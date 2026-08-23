import * as THREE from 'three';
import { SceneManager }        from './engine/SceneManager.js';
import { PhysicsManager }      from './engine/PhysicsManager.js';
import { AudioManager }        from './engine/AudioManager.js';
import { InputManager }        from './engine/InputManager.js';
import { CharacterController } from './characters/CharacterController.js';
import { WeaponManager }       from './characters/WeaponManager.js';
import { LevelManager }        from './levels/LevelManager.js';
import { HUD }                 from './ui/HUD.js';
import { TouchControls }       from './ui/TouchControls.js';
import { AuthUI }              from './ui/AuthUI.js';
import { MainMenuUI }          from './ui/MainMenuUI.js';
import { AuthAPI }             from './api/AuthAPI.js';
import { OnlineClient }        from './api/OnlineClient.js';

/* ══════════════════════════════════════ */
class Game {
  constructor() {
    this.kills        = 0;
    this.currentLevel = 1;
    this._isRunning   = false;
    this._clock       = new THREE.Clock();
    this._deathShown  = false;
    this._netTimer    = 0;
    this._netInterval = 0.05; // send state 20×/s
    this.session      = null;
    this.online       = null; // OnlineClient when playing online
  }

  async start() {
    /* ── Auth ── */
    this.session = await new AuthUI().show();

    /* ── Main Menu ── */
    const choice = await new MainMenuUI(this.session).show();

    /* ── Init engine ── */
    await this._initEngine();

    /* ── Online mode ── */
    if (choice.mode === 'online' && this.session?.token) {
      this.online = new OnlineClient(this.hud);
      const roomCode = choice.roomCode ?? 'main';
      const connected = await this.online.connect(roomCode);
      if (connected) {
        // Leaderboard: add yourself, then update when server sends scores
        this.hud.initLeaderboard(this.session.user?.username ?? 'You');
        this.online.on('scoreboard_sync', (scores) => {
          const entries = scores.map(s => ({
            name:   s.username ?? s.name ?? s.id,
            kills:  s.kills ?? 0,
            deaths: s.deaths ?? 0,
            ping:   s.ping ?? null,
            isYou:  s.id === this.online?.socket?.id,
          }));
          this.hud.updateLeaderboard(entries);
        });
        this._setupOnlineHandlers();
      } else {
        this._toast('⚠ Server unreachable — switching to offline mode');
        this.online = null;
      }
    } else {
      // Offline: init leaderboard with just the player
      this.hud.initLeaderboard(this.session?.user?.username ?? 'You');
    }


    /* ── Load level ── */
    this._showLoadScreen(`LOADING LEVEL ${choice.level}…`);
    await this.levels.loadLevel(choice.level, () => this._onAllEnemiesKilled());
    this.currentLevel = choice.level;

    // Invalidate physics mesh cache after level load
    this.physics.invalidateCache();

    /* ── Find safe spawn ── */
    const spawnPos = await this._findSafeSpawn();
    this.character.respawn(spawnPos);

    this._hideLoadScreen();
    this._showClickToPlay();

    /* ── Go ── */
    this._isRunning = true;
    this._loop();
  }

  async _initEngine() {
    this.sceneManager = new SceneManager();
    this.physics      = new PhysicsManager(this.sceneManager.scene);
    this.audio        = new AudioManager();
    this.input        = new InputManager(this.sceneManager.renderer.domElement);
    this.hud          = new HUD();
    this.touch        = new TouchControls(this.input);

    window._inputRef = this.input;

    document.addEventListener('click',   () => this.audio.resume(), { once: true });
    document.addEventListener('keydown', () => this.audio.resume(), { once: true });

    this.weapon    = new WeaponManager(this.sceneManager.scene, this.audio);
    this.character = new CharacterController(this.sceneManager.scene, this.physics, this.audio);
    this.levels    = new LevelManager(this.sceneManager, this.physics, this.audio, this.weapon, this.hud);
  }

  /* ── Pointer-lock "Click to Play" overlay ── */
  _showClickToPlay() {
    const el = document.createElement('div');
    el.id = 'click-to-play';
    el.style.cssText = `
      position:fixed;inset:0;z-index:5000;display:flex;flex-direction:column;
      align-items:center;justify-content:center;background:rgba(0,0,0,0.55);
      font-family:'Barlow Condensed',sans-serif;cursor:pointer;
      animation:fade-in .4s ease;
    `;
    el.innerHTML = `
      <div style="font-size:1.1rem;letter-spacing:.4em;color:#00e5ff;text-shadow:0 0 20px #00e5ff;margin-bottom:10px">▶ CLICK TO PLAY</div>
      <div style="font-size:.72rem;letter-spacing:.2em;color:rgba(255,255,255,.4)">
        WASD · MOUSE AIM · LMB SHOOT · RMB ADS · SHIFT SPRINT · SPACE JUMP · C CROUCH · R RELOAD
      </div>
    `;
    document.body.appendChild(el);

    const dismiss = () => {
      this.sceneManager.renderer.domElement.requestPointerLock?.();
      el.style.opacity = '0';
      el.style.transition = 'opacity .3s';
      setTimeout(() => el.remove(), 350);
    };
    el.addEventListener('click', dismiss);
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === this.sceneManager.renderer.domElement) {
        el.remove();
      }
    });
  }

  /* ── Smart safe spawn finder ── */
  async _findSafeSpawn() {
    // Wait for city FBX load + matrixWorld update
    await new Promise(r => setTimeout(r, 800));

    // Collect only city geometry — skip safety ground, sprites, UI
    const cityMeshes = [];
    this.sceneManager.scene.traverse(c => {
      if (!c.isMesh) return;
      const n = c.name;
      if (n === 'safetyGround' || n === 'muzzle' || n === 'placeholder') return;
      if (n.startsWith('sprite')) return;
      cityMeshes.push(c);
    });

    if (cityMeshes.length === 0) return { x: 0, y: 5, z: 0 };

    const rc   = new THREE.Raycaster();
    const down = new THREE.Vector3(0, -1, 0);
    const up   = new THREE.Vector3(0,  1, 0);
    const testHeight = 150;

    // Candidate drop positions — start at centre, expand outward
    const pts = [];
    for (let ring = 0; ring <= 10; ring++) {
      const r = ring * 8; // 0, 8, 16, 24 … 80m
      const n = ring === 0 ? 1 : ring * 6;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, testHeight, Math.sin(a) * r));
      }
    }

    for (const pt of pts) {
      rc.set(pt, down); rc.near = 0; rc.far = testHeight + 10;
      const hits = rc.intersectObjects(cityMeshes, false);
      if (!hits.length) continue;

      const g = hits[0].point;

      // Must be above y = -0.5 (not through safety ground or void)
      if (g.y < -0.5) continue;

      // Check open air above (not inside a building ceiling)
      const aboveOrigin = g.clone(); aboveOrigin.y += 0.8;
      rc.set(aboveOrigin, up); rc.near = 0; rc.far = 5;
      const above = rc.intersectObjects(cityMeshes, false);
      if (above.length > 0 && above[0].distance < 3) continue; // enclosed

      return { x: g.x, y: g.y + 0.5, z: g.z };
    }

    // Absolute fallback — drop from centre, physics gravity will land player
    return { x: 0, y: 30, z: 0 };
  }

  /* ── Main game loop ── */
  _loop() {
    if (!this._isRunning) return;
    requestAnimationFrame(() => this._loop());

    const delta = Math.min(this._clock.getDelta(), 0.05);

    this.input.update();
    this.physics.tick(delta);

    if (this.input.isFiring && !this.character.isDead) this._doShoot();

    const isMoving = Math.hypot(this.input.moveForward, this.input.moveRight) > 0.05;
    this.weapon.update(delta, { x: 0, y: 0 }, isMoving, this.input.isSprinting);
    this.character.update(delta, this.input, this.weapon, this.sceneManager);
    this.levels.update(delta, this.character.position, this.character);

    this.sceneManager.updateCamera(
      this.character.position, this.character.yaw, this.character.pitch
    );

    // Send online state
    if (this.online?.connected) {
      this._netTimer += delta;
      if (this._netTimer >= this._netInterval) {
        this._netTimer = 0;
        this.online.sendPlayerState(
          this.character.position,
          this.character.yaw, this.character.pitch,
          this.character.health, this.character.armor,
          this.character.isCrouching ? 'crouch' : this.character.isSprinting ? 'sprint' : 'idle'
        );
      }
    }

    const reloadPct = this.weapon.isReloading
      ? 1 - this.weapon.reloadTimer / this.weapon.reloadDuration : undefined;

    this.hud.update({
      ammo: this.weapon.currentAmmo, reserve: this.weapon.reserveAmmo,
      health: this.character.health, armor: this.character.armor,
      kills: this.kills, enemiesLeft: this.levels.getEnemiesAlive(),
      level: this.currentLevel, levelName: this.levels.currentLevelName,
      yaw: this.character.yaw,
      isADS: this.character.isADS, isSprinting: this.character.isSprinting,
      isCrouching: this.character.isCrouching,
      isReloading: this.weapon.isReloading, reloadProgress: reloadPct,
    });

    this.hud.updateMinimap(this.character.position, this.levels.getEnemies());

    // Death handling
    if (this.character.isDead && !this._deathShown) {
      this._deathShown = true;
        document.exitPointerLock?.();
        if (this.input) this.input.isLocked = false;
        this.hud.showDeathScreen(
          () => { 
            this._findSafeSpawn().then(pos => { 
              this.character.respawn(pos); 
              this._deathShown = false;
              if (this.input) this.input.lock();
            }); 
          },
          () => { location.reload(); }
        );




    }

    this.sceneManager.render();
  }

  /* ── Shooting ── */
  _doShoot() {
    if (!this.weapon.canShoot()) {
      if (this.weapon.currentAmmo <= 0 && !this.weapon.isReloading) this.weapon.reload();
      return;
    }

    const camera  = this.sceneManager.camera;
    const origin  = new THREE.Vector3();
    camera.getWorldPosition(origin);

    const m = camera.matrixWorld.elements;
    const forward = new THREE.Vector3(-m[8], -m[9], -m[10]).normalize();

    const hit = this.physics.raycast(origin, forward, 250,
      this.character.rootGroup ? [this.character.rootGroup] : []);

    this.weapon.shoot(origin, forward, hit);

    // Online shot broadcast
    this.online?.sendShot(origin, forward, null, this.weapon.damage);

    if (hit?.object) this._checkEnemyHit(hit);
  }

  _checkEnemyHit(hit) {
    for (const e of this.levels.getEnemies()) {
      if (e.isDead) continue;
      let obj = hit.object, found = false;
      while (obj) { if (obj === e.group) { found = true; break; } obj = obj.parent; }
      if (!found) continue;

      const isHead = (hit.object.name ?? '').toLowerCase().includes('head');
      const dmg    = isHead ? this.weapon.damage * 2.5 : this.weapon.damage;
      const killed = e.takeDamage?.(dmg, isHead ? 'headshot' : 'body', hit.point);
      this.weapon.spawnDamageNumber(hit.point, dmg, isHead);

      if (killed || (e.health != null && e.health <= 0)) {
        this.kills++;
        const name = e.config?.name ?? 'ENEMY';
        this.hud.addKillfeedEvent('YOU', name, 'M4A1', isHead);
        this.hud.showEliminatedBanner(name, isHead);
        this.audio.playKill();
      }
      break;
    }
  }

  /* ── Online event handlers ── */
  _setupOnlineHandlers() {
    this.online.on('player_killed', msg => {
      if (msg.killerId === AuthAPI.getSession()?.user?.id) {
        this.kills++;
        this.hud.addKillfeedEvent('YOU', msg.victimName, 'M4A1', false);
        this.hud.showEliminatedBanner(msg.victimName, false);
        this.audio.playKill();
      }
    });
    this.online.on('shot', msg => {
      // Incoming shot from another player — check if it hits us
    });
  }

  /* ── Level progression ── */
  async _onAllEnemiesKilled() {
    this.audio.playLevelComplete();
    const next = this.currentLevel + 1;
    if (next <= 3) {
      this.hud.showLevelComplete(next, 3000);
      setTimeout(async () => {
        this.currentLevel = next;
        await this.levels.loadLevel(next, () => this._onAllEnemiesKilled());
        this.physics.invalidateCache();
        const pos = await this._findSafeSpawn();
        this.character.respawn(pos);
      }, 3000);
    } else {
      const banner = document.createElement('div');
      banner.style.cssText = `position:fixed;inset:0;display:flex;flex-direction:column;
        align-items:center;justify-content:center;background:rgba(0,0,0,0.92);
        z-index:9999;font-family:'Barlow Condensed',sans-serif;color:#fff;`;
      banner.innerHTML = `
        <div style="font-size:4rem;letter-spacing:.3em;color:#00e5ff;text-shadow:0 0 40px #00e5ff">MISSION ACCOMPLISHED</div>
        <div style="font-size:1.4rem;margin-top:1rem;opacity:.6;letter-spacing:.2em">ALL LEVELS CLEARED</div>
        <div style="margin-top:1.5rem;font-size:2rem;color:#ffb703">KILLS: ${this.kills}</div>
        <button onclick="location.reload()" style="margin-top:2rem;padding:14px 44px;
          background:#00e5ff;border:none;color:#000;font-size:1rem;font-weight:800;
          letter-spacing:.2em;cursor:pointer;font-family:inherit;border-radius:2px;">↩ MAIN MENU</button>`;
      document.body.appendChild(banner);
    }
  }

  /* ── Toast notification ── */
  _toast(msg, duration = 3000) {
    const t = document.createElement('div');
    t.style.cssText = `position:fixed;top:80px;left:50%;transform:translateX(-50%);
      background:rgba(0,0,0,.85);border:1px solid rgba(255,183,3,.4);color:#ffb703;
      font-family:'Barlow Condensed',sans-serif;letter-spacing:.1em;font-size:.9rem;
      padding:10px 22px;z-index:9000;border-radius:2px;pointer-events:none;
      animation:fade-in .3s ease;`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), duration);
  }

  /* ── Loading screen ── */
  _showLoadScreen(msg) {
    let el = document.getElementById('load-screen');
    if (!el) {
      el = document.createElement('div');
      el.id = 'load-screen';
      el.style.cssText = `position:fixed;inset:0;
        background:linear-gradient(135deg,#020a14,#05101e);
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        z-index:10000;font-family:'Barlow Condensed',sans-serif;color:#fff`;
      el.innerHTML = `
        <div style="font-size:4.5rem;font-weight:800;letter-spacing:.3em;color:#00e5ff;
                    text-shadow:0 0 60px rgba(0,229,255,.5);margin-bottom:6px">WARZONE</div>
        <div style="font-size:.8rem;letter-spacing:.35em;color:#6b8090;margin-bottom:32px">TACTICAL OPERATIONS</div>
        <div id="load-msg" style="font-size:1rem;letter-spacing:.12em;color:#a0b8c8;margin-bottom:16px">${msg}</div>
        <div style="width:340px;height:2px;background:rgba(255,255,255,.08);border-radius:2px">
          <div id="load-bar" style="width:0;height:100%;background:#00e5ff;border-radius:2px;
               box-shadow:0 0 10px #00e5ff;transition:width .3s ease"></div>
        </div>`;
      document.body.appendChild(el);
    }
    const m = document.getElementById('load-msg'); if (m) m.textContent = msg;
    let p = 0;
    clearInterval(this._loadBarInt);
    this._loadBarInt = setInterval(() => {
      p = Math.min(p + 1.8, 88);
      const b = document.getElementById('load-bar'); if (b) b.style.width = p + '%';
    }, 55);
  }

  _hideLoadScreen() {
    clearInterval(this._loadBarInt);
    const b = document.getElementById('load-bar'); if (b) b.style.width = '100%';

      setTimeout(() => { const el = document.getElementById('load-screen');
      if (el) { el.style.transition = 'opacity .5s'; el.style.opacity = '0'; setTimeout(() => el.remove(), 550); }
    }, 300);
  }
}

/* ── Add global keyframe for fade-in ── */
const ks = document.createElement('style');
ks.textContent = `@keyframes fade-in { from { opacity:0; } to { opacity:1; } }`;
document.head.appendChild(ks);

/* ── Boot ── */
new Game().start().catch(err => {
  console.error('[Warzone] Fatal:', err);
  const m = document.getElementById('load-msg');
  if (m) m.textContent = '⚠ Error: ' + err.message;
});
