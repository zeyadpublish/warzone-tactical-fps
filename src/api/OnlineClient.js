/* ═══════════════════════════════════════════════════════════════
   OnlineClient.js  —  Socket.io multiplayer client
   Server: https://warzone-tactical-fps-server--my-api.replit.app
   ═══════════════════════════════════════════════════════════════ */
import { io } from 'socket.io-client';
import { AuthAPI } from './AuthAPI.js';

const SERVER_URL = 'https://warzone-tactical-fps-server--my-api.replit.app';

export class OnlineClient {
  constructor(hud) {
    this.hud       = hud;
    this.socket    = null;
    this.connected = false;
    this.roomName  = 'main';
    this.players   = new Map(); // socketId → { name, x, y, z, yaw, pitch, health, anim }
    this._handlers = {};
    this._pingInterval = null;
    this._latency  = 0;
  }

  /* ── Connect ── */
  connect(roomCode = 'main') {
    const session = AuthAPI.getSession();
    const name    = session?.user?.username || 'Operator';
    const token   = session?.token || null;
    this.roomName = roomCode;

    return new Promise((resolve) => {
      this.socket = io(SERVER_URL, {
        transports: ['websocket', 'polling'],
        auth:  { token },
        query: { token, name },
        reconnection:        true,
        reconnectionAttempts: 8,
        reconnectionDelay:   1500,
      });

      this.socket.on('connect', () => {
        this.connected = true;
        console.log('[OnlineClient] Connected. ID:', this.socket.id);

        // Join room right after connecting
        this.socket.emit('join_room', { roomName: this.roomName, playerName: name });

        // Start ping measurement
        this._startPing();
        resolve(true);
      });

      this.socket.on('connect_error', (err) => {
        console.warn('[OnlineClient] Connect error:', err.message);
        resolve(false);
      });

      this.socket.on('disconnect', (reason) => {
        this.connected = false;
        this._stopPing();
        console.warn('[OnlineClient] Disconnected:', reason);
      });

      /* ──────────── Server → Client events ──────────── */

      // Room state (who's already in the room when we join)
      // Support both old format (room_state) and new format (room:state)
      const onRoomState = (data) => {
        console.log('[OnlineClient] Room state:', data.players?.length, 'players');
        data.players?.forEach(p => {
          if (p.id !== this.socket.id) this.players.set(p.id, p);
        });
        this._handlers.room_state?.(data);
      };
      this.socket.on('room_state', onRoomState);
      this.socket.on('room:state', onRoomState);

      // Player joined
      const onPlayerJoined = (p) => {
        this.players.set(p.id, p);
        this.hud?.addKillfeedEvent?.('', (p.username ?? p.name ?? '?') + ' joined', '', false);
        this._handlers.player_joined?.(p);
      };
      this.socket.on('player_joined', onPlayerJoined);
      this.socket.on('player:joined', onPlayerJoined);

      // Player left
      const onPlayerLeft = (data) => {
        const id = data?.id ?? data;
        this.players.delete(id);
        this._handlers.player_left?.({ id });
      };
      this.socket.on('player_left', onPlayerLeft);
      this.socket.on('player:left',  onPlayerLeft);

      // 30 Hz position sync
      const onTransformSync = (states) => {
        states.forEach(s => {
          if (s.id === this.socket.id) return; // skip self
          this.players.set(s.id, { ...this.players.get(s.id), ...s });
        });
        this._handlers.players_transform_sync?.(states);
      };
      this.socket.on('players_transform_sync', onTransformSync);
      this.socket.on('players:transform',      onTransformSync);
      this.socket.on('state:sync',             onTransformSync);

      // Remote shot (visual only)
      const onRemoteShoot = (data) => this._handlers.shot?.(data);
      this.socket.on('remote_shoot', onRemoteShoot);
      this.socket.on('remote:shoot', onRemoteShoot);

      // We took damage
      const onReceiveDamage = ({ amount, attackerName, remainingHP } = {}) => {
        this._handlers.receive_damage?.({ amount, attackerName, remainingHP });
      };
      this.socket.on('receive_damage', onReceiveDamage);
      this.socket.on('receive:damage', onReceiveDamage);
      this.socket.on('player:damage',  onReceiveDamage);

      // Player killed
      const onPlayerKilled = (data) => {
        this._handlers.player_killed?.(data);
        const killer = data.killerName ?? data.killerSocketId ?? '?';
        const victim = data.victimName ?? '?';
        this.hud?.addKillfeedEvent?.(killer, victim, 'rifle', false);
      };
      this.socket.on('player_killed', onPlayerKilled);
      this.socket.on('player:killed', onPlayerKilled);
      this.socket.on('kill:event',    onPlayerKilled);

      // Scoreboard
      const onScoreboard = (scores) => this._handlers.scoreboard_sync?.(scores);
      this.socket.on('scoreboard_sync', onScoreboard);
      this.socket.on('scoreboard:sync', onScoreboard);
      this.socket.on('leaderboard:update', onScoreboard);

      // Respawn (server tells us to respawn)
      this.socket.on('respawn', (data) => {
        this._handlers.respawn?.(data);
      });

      // Ping response
      this.socket.on('server_pong', (ts) => {
        this._latency = Math.round((Date.now() - ts) / 2);
      });
      this.socket.on('pong', (ts) => {
        this._latency = Math.round((Date.now() - ts) / 2);
      });
    });
  }

  /* ── Ping measurement ── */
  _startPing() {
    this._stopPing();
    this._pingInterval = setInterval(() => {
      if (this.connected) this.socket.emit('client_ping', Date.now());
    }, 2000);
  }
  _stopPing() {
    if (this._pingInterval) { clearInterval(this._pingInterval); this._pingInterval = null; }
  }

  get ping() { return this._latency; }

  /* ── Disconnect ── */
  disconnect() {
    this._stopPing();
    this.socket?.disconnect();
    this.connected = false;
  }

  /* ── Send player position (20 Hz from game loop) ── */
  sendPlayerState(position, yaw, pitch, health, armor, animState) {
    if (!this.connected || !this.socket) return;
    this.socket.emit('sync_state', {
      position: {
        x: +position.x.toFixed(2),
        y: +position.y.toFixed(2),
        z: +position.z.toFixed(2),
      },
      yaw:        +yaw.toFixed(3),
      pitch:      +pitch.toFixed(3),
      health,
      armor,
      animState,
      isCrouching: false,
      isADS:       false,
    });
  }

  /* ── Send a shot ── */
  sendShot(origin, direction, hitPlayerId = null, damage = 0) {
    if (!this.connected || !this.socket) return;
    this.socket.emit('shoot_event', {
      origin:      { x: origin.x,    y: origin.y,    z: origin.z },
      direction:   { x: direction.x, y: direction.y, z: direction.z },
      hitPlayerId, damage,
    });
  }

  /* ── Report a hit ── */
  sendHit(targetId, damage, hitZone = 'torso') {
    if (!this.connected || !this.socket) return;
    this.socket.emit('hit_event', { targetId, damage, hitZone });
  }

  /* ── Event listener ── */
  on(event, fn) { this._handlers[event] = fn; }

  /* ── Get all remote players ── */
  getRemotePlayers() { return Array.from(this.players.values()); }
}
