/* ═══════════════════════════════════════════════════════════════
   OnlineClient.js  —  Socket.io multiplayer client
   Server: https://warzone-tactical-fps-server--my-api.replit.app

   EXACT event contract (from server docs):
   CLIENT → join_room             { roomName, roomId, playerName }
   CLIENT → player:move           { x, y, z, health, anim }
   CLIENT → shoot_event           { origin, direction }
   CLIENT → hit_event             { targetId, damage, hitZone }
   SERVER → room:state            { players, phase }
   SERVER → player:joined         { playerId, name }
   SERVER → player:left           { playerId }
   SERVER → players_transform_sync [ playerState ]
   SERVER → player_killed         { killerName, victimName, hitZone }
   REST   → POST /api/rooms       returns { id, roomId, roomCode, status }
   REST   → GET  /api/leaderboard
   REST   → GET  /api/online
   ═══════════════════════════════════════════════════════════════ */
import { io } from 'socket.io-client';

const SERVER_URL = 'https://warzone-tactical-fps-server--my-api.replit.app';
const API_URL    = 'https://warzone-tactical-fps-server--my-api.replit.app/api';

export class OnlineClient {
  constructor(hud) {
    this.hud       = hud;
    this.socket    = null;
    this.connected = false;
    this.roomName  = 'main';
    this.players   = new Map(); // playerId → playerState
    this._handlers = {};
    this._pingInterval = null;
    this._latency  = 0;
  }

  /* ══════════════════════════════════════════════════════
     Connect
  ══════════════════════════════════════════════════════ */
  async connect(roomCode = 'main') {
    this.roomName = roomCode;

    // Notify server about the room via REST (informational only — don't change roomName)
    try {
      await fetch(`${API_URL}/rooms`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomCode, roomName: roomCode }),
      });
    } catch (e) {
      console.warn('[OnlineClient] REST room notify failed (non-fatal):', e.message);
    }
    // ALWAYS use the original user-entered code as socket room name

    return new Promise((resolve) => {
      this.socket = io(SERVER_URL, {
        transports: ['websocket', 'polling'],
        reconnection:        true,
        reconnectionAttempts: 8,
        reconnectionDelay:   1500,
      });

      this.socket.on('connect', () => {
        this.connected = true;
        console.log('[OnlineClient] Connected:', this.socket.id);

        // join_room { roomName, roomId, playerName }
        const name = this._playerName ?? 'Operator';
        this.socket.emit('join_room', {
          roomName:   this.roomName,
          roomId:     this.roomName,
          playerName: name,
        });

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

      /* ══════════════════════════════════════════════════
         SERVER → CLIENT (exact contract)
      ══════════════════════════════════════════════════ */

      // room:state { players, phase }
      this.socket.on('room:state', ({ players = [], phase } = {}) => {
        console.log('[OnlineClient] room:state — players:', players.length, 'phase:', phase);
        players.forEach(p => {
          if (p.playerId !== this.socket.id) this.players.set(p.playerId, p);
        });
        this._handlers.room_state?.({ players, phase });
      });

      // player:joined { playerId, name }
      this.socket.on('player:joined', ({ playerId, name } = {}) => {
        if (playerId === this.socket.id) return;
        this.players.set(playerId, { playerId, name, x: 0, y: 0, z: 0, anim: 'idle' });
        this.hud?.addKillfeedEvent?.('', (name ?? 'Operator') + ' joined', '', false);
        // Normalize to { id, username, name } for RemotePlayer compatibility
        this._handlers.player_joined?.({ id: playerId, playerId, username: name, name });
      });

      // player:left { playerId }
      this.socket.on('player:left', ({ playerId } = {}) => {
        this.players.delete(playerId);
        this._handlers.player_left?.({ id: playerId, playerId });
      });

      // players_transform_sync [ playerState ] — 30 Hz
      this.socket.on('players_transform_sync', (states = []) => {
        states.forEach(s => {
          const id = s.playerId ?? s.id;
          if (!id || id === this.socket.id) return;
          this.players.set(id, { ...this.players.get(id), ...s });
        });
        this._handlers.players_transform_sync?.(states);
      });

      // player_killed { killerName, victimName, hitZone }
      this.socket.on('player_killed', ({ killerName, victimName, hitZone } = {}) => {
        this.hud?.addKillfeedEvent?.(killerName ?? '?', victimName ?? '?', 'M4A1', hitZone === 'head');
        this._handlers.player_killed?.({ killerName, victimName, hitZone });
      });

      // receive_damage (may be added by server later)
      this.socket.on('receive_damage', (data = {}) => {
        this._handlers.receive_damage?.(data);
      });

      // scoreboard (may be added by server later)
      this.socket.on('scoreboard_sync',  (s) => this._handlers.scoreboard_sync?.(s));
      this.socket.on('scoreboard:sync',  (s) => this._handlers.scoreboard_sync?.(s));

      // respawn
      this.socket.on('respawn', (d) => this._handlers.respawn?.(d));

      // Ping
      this.socket.on('pong',        (ts) => { this._latency = Math.round((Date.now() - ts) / 2); });
      this.socket.on('server_pong', (ts) => { this._latency = Math.round((Date.now() - ts) / 2); });
    });
  }

  /* ══════════════════════════════════════════════════
     CLIENT → SERVER (exact contract)
  ══════════════════════════════════════════════════ */

  // player:move { x, y, z, health, anim } — 20 Hz
  sendPlayerState(position, yaw, pitch, health, armor, animState) {
    if (!this.connected || !this.socket) return;
    this.socket.emit('player:move', {
      x:      +position.x.toFixed(2),
      y:      +position.y.toFixed(2),
      z:      +position.z.toFixed(2),
      yaw:    +yaw.toFixed(3),
      health: Math.round(health ?? 100),
      armor:  Math.round(armor  ?? 0),
      anim:   animState ?? 'idle',
    });
  }

  // shoot_event { origin, direction }
  sendShot(origin, direction, hitPlayerId = null, damage = 0) {
    if (!this.connected || !this.socket) return;
    this.socket.emit('shoot_event', {
      origin:    { x: origin.x,    y: origin.y,    z: origin.z },
      direction: { x: direction.x, y: direction.y, z: direction.z },
      hitPlayerId, damage,
    });
  }

  // hit_event { targetId, damage, hitZone }
  sendHit(targetId, damage, hitZone = 'torso') {
    if (!this.connected || !this.socket) return;
    this.socket.emit('hit_event', { targetId, damage, hitZone });
  }

  /* ══════════════════════════════════════════════════
     Helpers
  ══════════════════════════════════════════════════ */
  setPlayerName(name) { this._playerName = name; }

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

  disconnect() {
    this._stopPing();
    this.socket?.disconnect();
    this.connected = false;
  }

  on(event, fn) { this._handlers[event] = fn; }

  getRemotePlayers() { return Array.from(this.players.values()); }
}
