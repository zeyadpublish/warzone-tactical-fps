/* ═══════════════════════════════════════════════════════════════
   OnlineClient.js  —  Socket.io multiplayer client
   Server: https://frontline-game-host--zeyad0565615778.replit.app
   ═══════════════════════════════════════════════════════════════ */
import { io } from 'socket.io-client';
import { AuthAPI } from './AuthAPI.js';

const SERVER_URL = 'https://frontline-game-host--zeyad0565615778.replit.app';

export class OnlineClient {
  constructor(hud) {
    this.hud       = hud;
    this.socket    = null;
    this.connected = false;
    this.roomName  = 'main';
    this.players   = new Map(); // socketId → { name, x, y, z, yaw, pitch, health, anim }
    this._handlers = {};
    this._stateInterval = null;
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
        reconnectionAttempts: 5,
        reconnectionDelay:   1500,
      });

      this.socket.on('connect', () => {
        this.connected = true;
        console.log('[OnlineClient] Connected. ID:', this.socket.id);

        // Join default room right after connecting
        this.socket.emit('join_room', { roomName: this.roomName, playerName: name });
        resolve(true);
      });

      this.socket.on('connect_error', (err) => {
        console.warn('[OnlineClient] Connect error:', err.message);
        resolve(false);
      });

      this.socket.on('disconnect', (reason) => {
        this.connected = false;
        console.warn('[OnlineClient] Disconnected:', reason);
      });

      /* ── Server events ── */

      this.socket.on('room_state', (data) => {
        console.log('[OnlineClient] Room state:', data.players?.length, 'players');
        data.players?.forEach(p => {
          if (p.id !== this.socket.id) this.players.set(p.id, p);
        });
        this._handlers.room_joined?.(data);
      });

      this.socket.on('player_joined', (p) => {
        this.players.set(p.id, p);
        this.hud?.addKillfeedEvent?.('', p.username + ' joined', '', false);
        this._handlers.player_joined?.(p);
      });

      this.socket.on('player_left', (id) => {
        this.players.delete(id);
        this._handlers.player_left?.({ id });
      });

      // Authoritative 30 Hz transform broadcast from server
      this.socket.on('players_transform_sync', (states) => {
        states.forEach(s => {
          if (s.id === this.socket.id) return; // skip ourselves
          this.players.set(s.id, { ...this.players.get(s.id), ...s });
        });
        this._handlers.players_transform_sync?.(states);
      });

      this.socket.on('remote_shoot', (data) => this._handlers.shot?.(data));

      this.socket.on('receive_damage', ({ amount, attackerName }) => {
        this._handlers.receive_damage?.({ amount, attackerName });
      });

      this.socket.on('player_killed', (data) => {
        this._handlers.player_killed?.(data);
        this.hud?.addKillfeedEvent?.(data.killerName, data.victimName, 'rifle');
      });

      this.socket.on('scoreboard_sync', (scores) => {
        this._handlers.scoreboard_sync?.(scores);
      });
    });
  }

  /* ── Disconnect ── */
  disconnect() {
    clearInterval(this._stateInterval);
    this.socket?.disconnect();
    this.connected = false;
  }

  /* ── Send player position (called at 20 Hz from game loop) ── */
  sendPlayerState(position, yaw, pitch, health, armor, animState) {
    if (!this.connected || !this.socket) return;
    this.socket.emit('sync_state', {
      position: {
        x: +position.x.toFixed(2),
        y: +position.y.toFixed(2),
        z: +position.z.toFixed(2),
      },
      yaw:   +yaw.toFixed(3),
      pitch: +pitch.toFixed(3),
      health,
      animState,
      isADS:       false,
      isCrouching: false,
    });
  }

  /* ── Send a shot ── */
  sendShot(origin, direction, hitPlayerId = null, damage = 0) {
    if (!this.connected || !this.socket) return;
    this.socket.emit('shoot_event', {
      origin:      { x: origin.x, y: origin.y, z: origin.z },
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
