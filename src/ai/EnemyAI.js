import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OBJLoader }  from 'three/examples/jsm/loaders/OBJLoader.js';

/* ═══════════════════════════════════════════════════════════
   EnemyAI — Full state machine: IDLE → PATROL → CHASE → COMBAT
   Shoots at player, holds gun.obj, uses Swat.fbx + animations
   ═══════════════════════════════════════════════════════════ */
export class EnemyAI {
  constructor(scene, physicsManager, audioManager, weaponManager, config = {}) {
    this.scene          = scene;
    this.physicsManager = physicsManager;
    this.audioManager   = audioManager;
    this.weaponManager  = weaponManager;

    this.config = { position: { x: 0, y: 0, z: 0 }, type: 'GRUNT', level: 1, name: 'GRUNT_1', ...config };

    /* ── Core state ── */
    this.isDead     = false;
    this.modelReady = false;
    this.health     = this._maxHealth();
    this.deathTimer = 0;

    /* ── Scene graph ── */
    this.group = new THREE.Group();
    this.group.position.set(this.config.position.x, 0, this.config.position.z);
    this.scene.add(this.group);

    this.model       = null;
    this.mixer       = null;
    this.animations  = {};
    this.currentAnim = null;

    /* ── AI parameters ── */
    this.state          = 'IDLE';
    this.detectionRange = 45;
    this.shootingRange  = 30;
    this.speed          = this._speed();
    this.accuracy       = this._accuracy();

    /* ── Shoot timing ── */
    this.shootCooldown = this.config.type === 'SNIPER' ? 2.5 :
                         this.config.type === 'HEAVY'  ? 0.4 : 0.22;
    this.shootTimer    = Math.random() * this.shootCooldown; // stagger

    /* ── Patrol waypoints ── */
    const p = this.config.position;
    this.waypoints = [
      new THREE.Vector3(p.x + 12, 0, p.z + 12),
      new THREE.Vector3(p.x - 12, 0, p.z + 12),
      new THREE.Vector3(p.x - 12, 0, p.z - 12),
      new THREE.Vector3(p.x + 12, 0, p.z - 12),
    ];
    this.waypointIdx = 0;
    this.idleTimer   = 0;

    /* ── State change timers ── */
    this.stateTimer   = 0;
    this.crouchTimer  = 0;

    /* ── Ground Y (for snapping) ── */
    this.groundY = 0;
    this._groundSampleTimer = 0;

    this._rc   = new THREE.Raycaster();
    this._down = new THREE.Vector3(0, -1, 0);

    this._loadSoldier();
    this._buildHealthBar();
    this._buildNametag();

    /* ── Muzzle flash light ── */
    this.muzzleLight = new THREE.PointLight(0xffdd00, 0, 8);
    this.muzzleLight.position.set(0, 1.4, 0.8);
    this.group.add(this.muzzleLight);
  }

  /* ──────────────── Model loading ──────────────── */
  _loadSoldier() {
    new FBXLoader().load('./assets/models/soldier/Swat.fbx', fbx => {
      fbx.scale.setScalar(0.01);
        fbx.rotation.y = Math.PI;
      this.rightHandBone = null;

      fbx.traverse(c => {
        if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; }
        if (c.isBone) {
          const n = c.name.toLowerCase();
          if (n.includes('righthand') || n.includes('hand_r')) this.rightHandBone = c;
        }
      });

      this.group.add(fbx);
      this.model = fbx;
      this.mixer = new THREE.AnimationMixer(fbx);

      this._loadGun();
      this._loadAnimations();
    }, undefined, () => this._buildBoxSoldier());
  }

  _buildBoxSoldier() {
    // Fallback: grey box humanoid
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x334455, roughness: 0.75 });
    const mk  = (w, h, d, py) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      m.position.y = py; m.castShadow = true; g.add(m);
    };
    mk(0.4, 0.9, 0.3, 1.15); // torso
    mk(0.2, 0.85, 0.22, 0.42); // legs (approx)
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), mat);
    headMesh.position.y = 1.7; g.add(headMesh);
    this.group.add(g);
    this.model = g;
    this.modelReady = true;
    this._buildHealthBar();
  }

  _loadGun() {
    new OBJLoader().load('./assets/models/weapons/gun.obj', obj => {
      // Scale gun relative to soldier (soldier is 0.01 scale)
      const bbox = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3(); bbox.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      // We want ~55cm gun in world space; soldier is 0.01 scale so gun local = 55
      const targetWorldLength = 0.55; // metres in world
      const scale = (targetWorldLength / maxDim) / 0.01;
      obj.scale.setScalar(scale);

      // Orient barrel toward -Z
      if (size.x >= size.z) obj.rotation.y = -Math.PI / 2;

      // Dark material
      const mat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, metalness: 0.7, roughness: 0.35 });
      obj.traverse(c => { if (c.isMesh) c.material = mat; });

      if (this.rightHandBone) {
        obj.position.set(0, 8, 5);   // local coords (soldier is in cm-space at 0.01)
        obj.rotation.set(0, Math.PI, 0);
        this.rightHandBone.add(obj);
      } else {
        // Fallback: attach to group directly at right-arm position
        obj.scale.setScalar(0.13);
        obj.position.set(0.4, 1.2, 0.3);
        this.group.add(obj);
      }
      this.gunObj = obj;
    });
  }

  _loadAnimations() {
    const clips = [
      'idle', 'idle aiming',
      'walk forward', 'run forward',
      'idle crouching', 'idle crouching aiming',
      'death from the front', 'death from the back',
      'death from front headshot',
    ];

    let loaded = 0;
    const loader = new FBXLoader();

    clips.forEach(name => {
      loader.load(`./assets/models/soldier/animations/${name}.fbx`, anim => {
        if (!anim.animations[0]) { loaded++; if (loaded === clips.length) this._onAnimsReady(); return; }
        const action = this.mixer.clipAction(anim.animations[0]);
        if (name.startsWith('death')) { action.clampWhenFinished = true; action.loop = THREE.LoopOnce; }
        this.animations[name] = action;
        loaded++;
        if (loaded === clips.length) this._onAnimsReady();
      }, undefined, () => { loaded++; if (loaded === clips.length) this._onAnimsReady(); });
    });
  }

  _onAnimsReady() {
    this.modelReady = true;
    this._play('idle');
  }

  _play(name, fade = 0.25) {
    const anim = this.animations[name] || this.animations['idle'];
    if (!anim || this.currentAnim === anim) return;
    this.currentAnim?.fadeOut(fade);
    anim.reset().fadeIn(fade).play();
    this.currentAnim = anim;
  }

  /* ──────────────── UI elements ──────────────── */
  _buildHealthBar() {
    const cvs = document.createElement('canvas'); cvs.width = 256; cvs.height = 28;
    this._hpCtx = cvs.getContext('2d');
    this._hpTex = new THREE.CanvasTexture(cvs);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this._hpTex, depthTest: false }));
    sp.scale.set(1.8, 0.22, 1); sp.position.set(0, 2.4, 0);
    this.group.add(sp);
    this.healthBarSprite = sp;
    this._redrawHp();
  }

  _redrawHp() {
    if (!this._hpCtx) return;
    const ctx = this._hpCtx, w = 256, h = 28;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h);
    const pct = Math.max(0, this.health / this._maxHealth());
    ctx.fillStyle = pct > 0.5 ? '#00dd44' : pct > 0.25 ? '#ffaa00' : '#ff2222';
    ctx.fillRect(2, 2, (w - 4) * pct, h - 4);
    this._hpTex.needsUpdate = true;
  }

  _buildNametag() {
    const cvs = document.createElement('canvas'); cvs.width = 512; cvs.height = 56;
    const ctx = cvs.getContext('2d');
    ctx.font = 'bold 36px Arial'; ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(`Lv${this.config.level} ${this.config.type}`, 256, 28);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cvs), depthTest: false }));
    sp.scale.set(2.8, 0.35, 1); sp.position.set(0, 2.75, 0);
    this.group.add(sp);
  }

  /* ──────────────── Stats ──────────────── */
  _maxHealth() {
    const base = this.config.type === 'HEAVY' ? 200 : this.config.type === 'SNIPER' ? 80 : 100;
    return base * Math.max(1, this.config.level);
  }
  _speed()    { return this.config.type === 'HEAVY' ? 1.8 : this.config.type === 'SNIPER' ? 2.5 : 3.2; }
  _accuracy() { return this.config.type === 'SNIPER' ? 0.85 : this.config.type === 'HEAVY' ? 0.35 : 0.5; }

  /* ──────────────── Damage / death ──────────────── */
  takeDamage(amount, type) {
    if (this.isDead) return false;
    this.health -= amount;
    this._redrawHp();
    if (this.health <= 0) { this.die(type); return true; }
    // Aggro immediately
    if (this.state === 'IDLE' || this.state === 'PATROL') this.state = 'CHASE';
    return false;
  }

  die(hitType) {
    this.isDead = true;
    this.state  = 'DEAD';
    this.deathTimer = 0;
    if (this.healthBarSprite) this.healthBarSprite.visible = false;
    const anim = hitType === 'headshot' ? 'death from front headshot' : 'death from the front';
    this._play(anim, 0.1);
  }

  destroy() {
    this.scene.remove(this.group);
  }

  /* ──────────────── Ground snapping ──────────────── */
  _snapToGround(delta) {
    this._groundSampleTimer -= delta;
    if (this._groundSampleTimer <= 0) {
      this._groundSampleTimer = 0.3;
      const origin = this.group.position.clone(); origin.y += 2;
      this._rc.set(origin, this._down); this._rc.near = 0; this._rc.far = 30;
      const meshes = this.physicsManager._getMeshes?.() ?? [];
      const hits = this._rc.intersectObjects(meshes, false);
      if (hits.length) this.groundY = hits[0].point.y;
    }
    if (this.group.position.y > this.groundY + 0.05) {
      this.group.position.y = Math.max(this.groundY, this.group.position.y - 8 * delta);
    } else {
      this.group.position.y = this.groundY;
    }
  }

  /* ──────────────── Shooting ──────────────── */
  _shoot(playerController) {
    if (!playerController) return;
    this.muzzleLight.intensity = 3;
    setTimeout(() => { this.muzzleLight.intensity = 0; }, 60);
    this.audioManager?.playGunshot?.();

    if (Math.random() < this._accuracy()) {
      const dmg = (this.config.type === 'SNIPER' ? 60 : this.config.type === 'HEAVY' ? 20 : 12) * this.config.level;
      playerController.takeDamage(dmg);
    }
  }

  /* ──────────────── Movement ──────────────── */
  _moveTo(target, delta, speed) {
    const dir = new THREE.Vector3().subVectors(target, this.group.position);
    dir.y = 0;
    if (dir.length() < 0.2) return;
    dir.normalize();
    this.group.position.addScaledVector(dir, speed * delta);
    this.group.rotation.y = Math.atan2(dir.x, dir.z);
  }

  _lookAt(pos) {
    const dx = pos.x - this.group.position.x;
    const dz = pos.z - this.group.position.z;
    this.group.rotation.y = Math.atan2(dx, dz);
  }

  /* ──────────────── Main update ──────────────── */
  update(delta, playerPosition, playerController) {
    if (!this.modelReady) return;
    this.mixer?.update(delta);

    if (this.isDead) {
      this.deathTimer += delta;
      return;
    }

    this._snapToGround(delta);

    const dist = this.group.position.distanceTo(playerPosition);
    this.stateTimer += delta;

    /* ─── State transitions ─── */
    if (this.state !== 'DEAD') {
      if (dist <= this.detectionRange && this.state === 'IDLE') this.state = 'PATROL';
      if (dist <= this.detectionRange * 0.7 && (this.state === 'IDLE' || this.state === 'PATROL')) this.state = 'CHASE';
      if (dist <= this.shootingRange && (this.state === 'CHASE')) this.state = 'COMBAT';
      if (dist > this.shootingRange + 5 && this.state === 'COMBAT') this.state = 'CHASE';
    }

    /* ─── State behaviour ─── */
    switch (this.state) {

      case 'IDLE':
        this._play('idle');
        this.idleTimer += delta;
        if (this.idleTimer > 3) { this.state = 'PATROL'; this.idleTimer = 0; }
        break;

      case 'PATROL': {
        this._play('walk forward');
        const wp = this.waypoints[this.waypointIdx];
        this._moveTo(wp, delta, this.speed * 0.45);
        if (this.group.position.distanceTo(wp) < 1.2) {
          this.waypointIdx = (this.waypointIdx + 1) % this.waypoints.length;
          this.state = 'IDLE';
        }
        break;
      }

      case 'CHASE':
        this._play('run forward');
        this._moveTo(playerPosition, delta, this.speed);
        break;

      case 'COMBAT': {
        this._lookAt(playerPosition);

        // Strafe / crouch transitions
        this.crouchTimer += delta;
        if (this.crouchTimer > 4 && Math.random() < 0.3) {
          this.crouchTimer = 0;
          this.state = 'CROUCH';
        }

        // Choose aiming animation
        this._play('idle aiming');

        // Shoot
        this.shootTimer -= delta;
        if (this.shootTimer <= 0) {
          this.shootTimer = this.shootCooldown + Math.random() * 0.3;
          this._shoot(playerController);
        }

        // Close-range: back off slightly
        if (dist < 4) {
          const away = new THREE.Vector3().subVectors(this.group.position, playerPosition).normalize();
          this.group.position.addScaledVector(away, this.speed * 0.5 * delta);
        }
        break;
      }

      case 'CROUCH': {
        this._lookAt(playerPosition);
        this._play('idle crouching aiming');
        this.shootTimer -= delta;
        if (this.shootTimer <= 0) {
          this.shootTimer = this.shootCooldown + Math.random() * 0.4;
          this._shoot(playerController);
        }
        this.crouchTimer += delta;
        if (this.crouchTimer > 3) { this.crouchTimer = 0; this.state = 'COMBAT'; }
        break;
      }
    }
  }
}
