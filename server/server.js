import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { RoomManager } from './rooms.js';
import { BotManager } from './botManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

/* ══════════════════════════════════════════════════════
   In-memory user store (replace with DB in production)
   For production: use MongoDB/PostgreSQL + bcrypt + JWT
   ══════════════════════════════════════════════════════ */
const users  = new Map(); // email → { id, username, email, passwordHash }
const tokens = new Map(); // token → userId

function hashPw(pw) {
  return crypto.createHash('sha256').update(pw + 'warzone_salt_2026').digest('hex');
}

function generateToken(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  tokens.set(token, userId);
  return token;
}

function getUserByToken(token) {
  const userId = tokens.get(token);
  if (!userId) return null;
  for (const u of users.values()) if (u.id === userId) return u;
  return null;
}

/* ── REST Auth Routes ── */

// POST /api/auth/signup
app.post('/api/auth/signup', (req, res) => {
  const { username, email, password } = req.body || {};
  if (!username || !email || !password)
    return res.status(400).json({ message: 'username, email and password are required' });

  if (users.has(email))
    return res.status(409).json({ message: 'Email already registered' });

  const id = 'user_' + Date.now();
  const user = { id, username, email, passwordHash: hashPw(password) };
  users.set(email, user);
  const token = generateToken(id);

  res.json({
    token,
    user: { id, username, email },
  });
});

// POST /api/auth/signin
app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ message: 'email and password are required' });

  const user = users.get(email);
  if (!user || user.passwordHash !== hashPw(password))
    return res.status(401).json({ message: 'Invalid email or password' });

  const token = generateToken(user.id);
  res.json({
    token,
    user: { id: user.id, username: user.username, email: user.email },
  });
});

// GET /api/auth/me  (validate token)
app.get('/api/auth/me', (req, res) => {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '').trim();
  const user = getUserByToken(token);
  if (!user) return res.status(401).json({ message: 'Invalid or expired token' });
  res.json({ id: user.id, username: user.username, email: user.email });
});

// GET /api/health
app.get('/api/health', (_req, res) => res.json({ status: 'ok', timestamp: Date.now() }));

/* ── Static frontend ── */
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

/* ── Socket.io multiplayer ── */
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*', methods: ['GET','POST'] } });

const roomManager = new RoomManager();
const roomBots    = new Map();

io.on('connection', (socket) => {
  console.log(`[WS] Connected: ${socket.id}`);

  // Authenticate via token in handshake
  const token = socket.handshake.query?.token || socket.handshake.auth?.token;
  const authedUser = token ? getUserByToken(token) : null;
  const displayName = authedUser?.username ?? socket.handshake.query?.name ?? 'Operator';

  socket.on('join_room', ({ roomName = 'main', playerName }) => {
    const name = playerName || displayName;
    const player = roomManager.addPlayer(roomName, socket.id, name);
    socket.join(roomName);

    if (!roomBots.has(roomName)) {
      const room = roomManager.getOrCreateRoom(roomName);
      roomBots.set(roomName, new BotManager(room, io));
    }

    socket.emit('room_state', { players: roomManager.getRoomPlayerList(roomName), roomName });
    socket.to(roomName).emit('player_joined', { id: socket.id, username: name });
    console.log(`[WS] ${name} joined room: ${roomName}`);
  });

  socket.on('player_state', (data) => {
    const player = roomManager.getPlayer(socket.id);
    if (!player) return;
    Object.assign(player, { position: data, yaw: data.yaw, pitch: data.pitch,
      health: data.health, armor: data.armor, anim: data.anim });
  });

  // Legacy event name
  socket.on('sync_state', (data) => {
    const player = roomManager.getPlayer(socket.id);
    if (!player) return;
    Object.assign(player, { position: data.position, yaw: data.yaw, pitch: data.pitch,
      health: data.health, animState: data.animState });
  });

  socket.on('shot', (data) => {
    const player = roomManager.getPlayer(socket.id);
    if (!player) return;
    socket.to(player.room).emit('shot', { id: socket.id, ...data });
  });

  socket.on('shoot_event', (data) => {
    const player = roomManager.getPlayer(socket.id);
    if (!player) return;
    socket.to(player.room).emit('remote_shoot', { id: socket.id, ...data });
  });

  socket.on('hit_event', ({ targetId, damage, hitZone }) => {
    const attacker = roomManager.getPlayer(socket.id);
    if (!attacker) return;

    const bots = roomBots.get(attacker.room);
    if (bots && targetId.startsWith('bot_')) {
      bots.damageBot(targetId, damage, socket.id, attacker.name);
      return;
    }

    const victim = roomManager.getPlayer(targetId);
    if (victim) {
      victim.health = Math.max(0, (victim.health ?? 100) - damage);
      io.to(targetId).emit('receive_damage', { amount: damage, attackerName: attacker.name });

      if (victim.health <= 0) {
        attacker.kills = (attacker.kills || 0) + 1;
        victim.deaths  = (victim.deaths  || 0) + 1;
        io.to(attacker.room).emit('player_killed', {
          victimId: targetId, victimName: victim.name,
          killerId: socket.id, killerName: attacker.name,
        });
      }
    }
  });

  socket.on('ping', () => socket.emit('pong', { t: Date.now() }));

  socket.on('disconnect', () => {
    const result = roomManager.removePlayer(socket.id);
    if (result) {
      io.to(result.roomName).emit('player_left', socket.id);
      console.log(`[WS] Left: ${socket.id}`);
    }
  });
});

// 30 Hz server tick — broadcast all positions
setInterval(() => {
  for (const [roomName, room] of roomManager.rooms.entries()) {
    roomBots.get(roomName)?.update(1/30);

    const states = Array.from(room.players.values()).map(p => ({
      id: p.id, name: p.name,
      x: p.position?.x ?? 0, y: p.position?.y ?? 0, z: p.position?.z ?? 0,
      yaw: p.yaw ?? 0, pitch: p.pitch ?? 0,
      health: p.health ?? 100, anim: p.anim ?? p.animState ?? 'idle',
      isBot: p.isBot ?? false,
    }));

    io.to(roomName).emit('players_transform_sync', states);
    io.to(roomName).emit('player_state', ...states); // compat alias
  }
}, 1000 / 30);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`\n╔══════════════════════════════════════╗`);
  console.log(`║  WARZONE Server  →  port ${PORT}       ║`);
  console.log(`║  REST: /api/auth/signin|signup|me    ║`);
  console.log(`║  WS:   socket.io + raw ws            ║`);
  console.log(`╚══════════════════════════════════════╝\n`);
});
