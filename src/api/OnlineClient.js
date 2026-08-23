/* ═══════════════════════════════════════════════════════════════
   OnlineClient.js  —  Socket.io multiplayer client
   Server: https://warzone-tactical-fps-server--my-api.replit.app
   Event contract (exact from server docs):
     CLIENT → player:move    { x, y, rotation }
     CLIENT → player:shoot   { origin, direction }
     SERVER → player:joined  { playerId, name }
     SERVER → player:left    { playerId }
     SERVER → room:state     { players, phase }
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
    this.roomId    = null;   // server-assigned room id (if using REST /api/rooms)
    this.players   = new Map(); // playerId → { playerId, name, x, y, rotation }
    this._handlers = {};
    this._pingInterval = null;
    this._latency  = 0;
  }

  /* ══════════════════════════════════════════════════════
     Connect — creates/joins room via REST then socket
  ══════════════════════════════════════════════════════ */
  async connect(roomCode = 'main') {
    this.roomName = roomCode;

    // Try to create/join room via REST first
    try {
      const res = await fetch(`${API_URL}/rooms`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomCode, name: roomCode }),
      });
      if (res.ok) {
        const data = await res.json();
        this.roomId = data.id ?? data.roomId ?? roomCode;
        console.log('[OnlineClient] Room created/joined via REST:', this.roomId);
      }
    } catch (e) {
      console.warn('[OnlineClient] REST room join failed, using socket only:', e.message);
    }

    return new Promise((resolve) => {
      this.socket = io(SERVER_URL, {
        transports: ['websocket', 'polling'],
        reconnection:        true,
        reconnectionAttempts: 8,
        reconnectionDelay:   1500,
      });

      this.socket.on('connect', () => {
        this.connected = true;
        console.log('[OnlineClient] Socket connected. ID:', this.socket.id);

        // Join room via socket event
        this.socket.emit('join_room', { roomName: this.roomName, roomId: this.roomId });

        // Start ping
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
         SERVER → CLIENT events (exact contract)
      ══════════════════════════════════════════════════ */

      // room:state { players, phase } — full state sync after room changes
      this.socket.on('room:state', ({ players, phase } = {}) => {
        console.log('[OnlineClient] room:state — players:', players?.length, 'phase:', phase);
        players?.forEach(p => {
          if (p.playerId !== this.socket.id) {
            this.players.set(p.playerId, p);
          }
        });
        this._handlers.room_state?.({ players, phase });
      });

      // player:joined { playerId, name } — new operative enters room
      this.socket.on('player:joined', ({ playerId, name } = {}) => {
        if (playerId === this.socket.id) return; // skip self
        this.players.set(playerId, { playerId, name, x: 0, y: 0, rotation: 0 });
        this.hud?.addKillfeedEvent?.('', (name ?? 'Operator') + ' joined', '', false);
        // Pass in normalized format that RemotePlayer expects
        this._handlers.player_joined?.({ id: playerId, username: name, name });
      });

      // player:left { playerId } — player disconnected
      this.socket.on('player:left', ({ playerId } = {}) => {
        this.players.delete(playerId);
        this._handlers.player_left?.({ id: playerId });
      });

      // Ping
      this.socket.on('pong', (ts) => { this._latency = Math.round((Date.now() - ts) / 2); });
      this.socket.on('server_pong', (ts) => { this._latency = Math.round((Date.now() - ts) / 2); });

      /* ══════════════════════════════════════════════════
         Optional extra events the server might also send
         (keep compatibility just in case)
      ══════════════════════════════════════════════════ */
      this.socket.on('players_transform_sync', (states) => {
        states?.forEach(s => {
          const id = s.playerId ?? s.id;
          if (id && id !== this.socket.id) this.players.set(id, { ...this.players.get(id), ...s });
        });
        this._handlers.players_transform_sync?.(states);
      });

      this.socket.on('receive_damage', (data) => this._handlers.receive_damage?.(data));
      this.socket.on('receive:damage', (data) => this._handlers.receive_damage?.(data));
      this.socket.on('player_killed',  (data) => {
        this._handlers.player_killed?.(data);
        this.hud?.addKillfeedEvent?.(data.killerName ?? '?', data.victimName ?? '?', 'rifle', false);
      });
      this.socket.on('player:killed', (data) => {
        this._handlers.player_killed?.(data);
        this.hud?.addKillfeedEvent?.(data.killerName ?? '?', data.victimName ?? '?', 'rifle', false);
      });
      this.socket.on('scoreboard_sync',  (s) => this._handlers.scoreboard_sync?.(s));
      this.socket.on('scoreboard:sync',  (s) => this._handlers.scoreboard_sync?.(s));
      this.socket.on('respawn', (d) => this._handlers.respawn?.(d));
    });
  }

  /* ══════════════════════════════════════════════════
     CLIENT → SERVER (exact contract)
  ══════════════════════════════════════════════════ */

  // player:move { x, y, rotation } — called at 20 Hz from game loop
  sendPlayerState(position, yaw, pitch, health, armor, animState) {
    if (!this.connected || !this.socket) return;
    // Server uses x, y, rotation — map 3D position to 2D + rotation
    this.socket.emit('player:move', {
      x:        +position.x.toFixed(2),
      y:        +position.z.toFixed(2), // use Z as 2D Y (top-down)
      rotation: +yaw.toFixed(3),
      // Extra fields for our remote player rendering (server may ignore)
      posY:     +position.y.toFixed(2),
      health,
      armor,
      anim: animState,
    });
  }

  // player:shoot { origin, direction } — authoritative fire event
  sendShot(origin, direction, hitPlayerId = null, damage = 0) {
    if (!this.connected || !this.socket) return;
    this.socket.emit('player:shoot', {
      origin:    { x: origin.x,    y: origin.y,    z: origin.z },
      direction: { x: direction.x, y: direction.y, z: direction.z },
      // Extra fields server may ignore but useful for hit detection
      hitPlayerId, damage,
    });
  }

  // hit_event — may not be in server contract but keep for future
  sendHit(targetId, damage, hitZone = 'torso') {
    if (!this.connected || !this.socket) return;
    this.socket.emit('hit_event', { targetId, damage, hitZone });
  }

  /* ══════════════════════════════════════════════════
     Ping / Latency
  ══════════════════════════════════════════════════ */
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

  /* ══════════════════════════════════════════════════
     Misc
  ══════════════════════════════════════════════════ */
  disconnect() {
    this._stopPing();
    this.socket?.disconnect();
    this.connected = false;
  }

  on(event, fn) { this._handlers[event] = fn; }

  getRemotePlayers() { return Array.from(this.players.values()); }
}
