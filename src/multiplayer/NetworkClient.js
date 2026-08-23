import { io } from 'socket.io-client';
import { RemotePlayer } from './RemotePlayer.js';

export class NetworkClient {
  constructor(scene, onKillfeed, onScoreboard, onPlayerDamage, weaponManager = null) {
    this.scene = scene;
    this.onKillfeed = onKillfeed;
    this.onScoreboard = onScoreboard;
    this.onPlayerDamage = onPlayerDamage;
    this.weaponManager = weaponManager;

    this.socket = null;
    this.isConnected = false;
    this.myPlayerId = null;
    this.remotePlayers = new Map();

    this.lastSendTime = 0;
    this.sendInterval = 1000 / 30;
    this.ping = 0;
  }

  setWeaponManager(wm) {
    this.weaponManager = wm;
  }

  connect(serverUrl, playerName, roomName = 'URBAN_WARFARE_01', onConnected) {
    const host = serverUrl || `${window.location.protocol}//${window.location.hostname}:3000`;

    try {
      this.socket = io(host, {
        transports: ['websocket', 'polling'],
        timeout: 4000,
        reconnectionAttempts: 3
      });

      this.socket.on('connect', () => {
        this.isConnected = true;
        this.myPlayerId = this.socket.id;
        console.log(`Connected to game server. Socket ID: ${this.myPlayerId}`);

        this.socket.emit('join_room', {
          roomName: roomName,
          playerName: playerName
        });

        if (onConnected) onConnected(true);
      });

      this.socket.on('connect_error', (err) => {
        console.warn('Running in local bot practice mode.');
        if (onConnected) onConnected(false);
      });

      this._setupSocketListeners();
    } catch (e) {
      if (onConnected) onConnected(false);
    }
  }

  _setupSocketListeners() {
    this.socket.on('room_state', (data) => {
      data.players.forEach(p => {
        if (p.id !== this.myPlayerId && !this.remotePlayers.has(p.id)) {
          this._spawnRemotePlayer(p.id, p.name, p.isBot);
        }
      });
    });

    this.socket.on('player_joined', (p) => {
      if (p.id !== this.myPlayerId && !this.remotePlayers.has(p.id)) {
        this._spawnRemotePlayer(p.id, p.name, p.isBot);
        if (this.onKillfeed) {
          this.onKillfeed(`${p.name} deployed into combat.`, 'system');
        }
      }
    });

    this.socket.on('player_left', (id) => {
      const rp = this.remotePlayers.get(id);
      if (rp) {
        if (this.onKillfeed) {
          this.onKillfeed(`${rp.name} retreated from combat.`, 'system');
        }
        rp.destroy();
        this.remotePlayers.delete(id);
      }
    });

    this.socket.on('players_transform_sync', (states) => {
      states.forEach(state => {
        if (state.id === this.myPlayerId) return;

        let rp = this.remotePlayers.get(state.id);
        if (!rp) {
          rp = this._spawnRemotePlayer(state.id, state.name, state.isBot);
        }
        rp.setNetworkState(state);
      });
    });

    this.socket.on('remote_shoot', (data) => {
      const rp = this.remotePlayers.get(data.id);
      if (rp) {
        rp.triggerMuzzleFlash();
      }
    });

    this.socket.on('receive_damage', (data) => {
      if (this.onPlayerDamage) {
        this.onPlayerDamage(data.amount, data.attackerName);
      }
    });

    this.socket.on('player_killed', (data) => {
      const victim = this.remotePlayers.get(data.victimId);
      if (victim) {
        victim.die(data.hitDirection);
      }

      if (this.onKillfeed) {
        this.onKillfeed(data.message, 'kill', data.killerName, data.victimName);
      }
    });

    this.socket.on('player_respawn', (data) => {
      const rp = this.remotePlayers.get(data.id);
      if (rp) {
        rp.respawn(data.position);
      }
    });

    this.socket.on('scoreboard_sync', (scores) => {
      if (this.onScoreboard) {
        this.onScoreboard(scores);
      }
    });
  }

  _spawnRemotePlayer(id, name, isBot = false) {
    const rp = new RemotePlayer(id, name, this.scene, isBot, this.weaponManager);
    this.remotePlayers.set(id, rp);
    return rp;
  }

  sendLocalState(playerController) {
    if (!this.isConnected || !this.socket) return;

    const now = performance.now();
    if (now - this.lastSendTime < this.sendInterval) return;
    this.lastSendTime = now;

    this.socket.emit('sync_state', {
      position: {
        x: Number(playerController.position.x.toFixed(2)),
        y: Number(playerController.position.y.toFixed(2)),
        z: Number(playerController.position.z.toFixed(2))
      },
      yaw: Number(playerController.yaw.toFixed(3)),
      pitch: Number(playerController.pitch.toFixed(3)),
      health: playerController.health,
      isADS: playerController.isADS,
      isCrouching: playerController.isCrouching
    });
  }

  sendShootEvent(origin, forwardDir) {
    if (!this.isConnected || !this.socket) return;

    this.socket.emit('shoot_event', {
      origin: { x: origin.x, y: origin.y, z: origin.z },
      dir: { x: forwardDir.x, y: forwardDir.y, z: forwardDir.z }
    });
  }

  sendHitEvent(targetPlayerId, damage, hitZone) {
    if (!this.isConnected || !this.socket) return;

    this.socket.emit('hit_event', {
      targetId: targetPlayerId,
      damage: damage,
      hitZone: hitZone
    });
  }

  getRemoteHitboxes() {
    const hitboxes = [];
    this.remotePlayers.forEach(rp => {
      if (!rp.isDead) {
        hitboxes.push(...rp.hitboxes);
      }
    });
    return hitboxes;
  }

  update(delta) {
    this.remotePlayers.forEach(rp => rp.update(delta));
  }
}
