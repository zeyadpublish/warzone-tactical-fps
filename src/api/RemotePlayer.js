import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

/* ═══════════════════════════════════════════════════════════
   RemotePlayer — renders another online player as a Swat soldier
   Receives position/yaw updates from server and smoothly interpolates
   ═══════════════════════════════════════════════════════════ */
export class RemotePlayer {
  constructor(scene, id, playerName) {
    this.scene      = scene;
    this.id         = id;
    this.name       = playerName || 'Enemy';
    this.health     = 100;
    this.maxHealth  = 100;

    // Target position from server (lerp toward this)
    this._targetPos = new THREE.Vector3();
    this._targetYaw = 0;

    /* ── Scene group ── */
    this.group = new THREE.Group();
    this.group.visible = false; // hidden until model loads
    scene.add(this.group);

    this.mixer = null;
    this.animations = {};
    this.currentAnim = null;
    this._ready = false;

    this._buildNametag();
    this._buildHealthBar();
    this._loadModel();
  }

  /* ──────────────────────────────── Model ── */
  _loadModel() {
    new FBXLoader().load('./assets/models/soldier/Swat.fbx', fbx => {
      fbx.scale.setScalar(0.01);
      fbx.rotation.y = Math.PI;
      fbx.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });

      this.group.add(fbx);
      this.model = fbx;
      this.mixer = new THREE.AnimationMixer(fbx);

      this._loadAnims();
    }, undefined, () => {
      // Fallback: simple box
      this._buildBox();
    });
  }

  _buildBox() {
    const mat = new THREE.MeshStandardMaterial({ color: 0x0044aa });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.5, 0.3), mat);
    body.position.y = 0.75;
    this.group.add(body);
    this._ready = true;
    this.group.visible = true;
  }

  _loadAnims() {
    const clips = ['idle', 'walk forward', 'run forward', 'death from the front'];
    let loaded = 0;
    const loader = new FBXLoader();

    clips.forEach(name => {
      loader.load(`./assets/models/soldier/animations/${name}.fbx`, anim => {
        if (anim.animations[0]) {
          const action = this.mixer.clipAction(anim.animations[0]);
          if (name.startsWith('death')) { action.clampWhenFinished = true; action.loop = THREE.LoopOnce; }
          this.animations[name] = action;
        }
        loaded++;
        if (loaded === clips.length) {
          this._ready = true;
          this.group.visible = true;
          this._play('idle');
        }
      }, undefined, () => { loaded++; if (loaded === clips.length) { this._ready = true; this.group.visible = true; } });
    });
  }

  _play(name, fade = 0.2) {
    const anim = this.animations[name] || this.animations['idle'];
    if (!anim || this.currentAnim === anim) return;
    this.currentAnim?.fadeOut(fade);
    anim.reset().fadeIn(fade).play();
    this.currentAnim = anim;
  }

  /* ──────────────────────────────── UI ── */
  _buildNametag() {
    const cvs = document.createElement('canvas'); cvs.width = 512; cvs.height = 64;
    const ctx = cvs.getContext('2d');
    ctx.font = 'bold 38px Arial'; ctx.fillStyle = '#00e5ff';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(this.name, 256, 32);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cvs), depthTest: false }));
    sp.scale.set(3, 0.4, 1); sp.position.set(0, 2.9, 0);
    this.group.add(sp);
    this._nameTag = sp;
  }

  _buildHealthBar() {
    const cvs = document.createElement('canvas'); cvs.width = 256; cvs.height = 28;
    this._hpCtx = cvs.getContext('2d');
    this._hpTex = new THREE.CanvasTexture(cvs);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this._hpTex, depthTest: false }));
    sp.scale.set(2, 0.22, 1); sp.position.set(0, 2.5, 0);
    this.group.add(sp);
    this._hpSprite = sp;
    this._redrawHp();
  }

  _redrawHp() {
    if (!this._hpCtx) return;
    const ctx = this._hpCtx, w = 256, h = 28;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h);
    const pct = Math.max(0, this.health / this.maxHealth);
    ctx.fillStyle = pct > 0.5 ? '#00dd44' : pct > 0.25 ? '#ffaa00' : '#ff2222';
    ctx.fillRect(2, 2, (w - 4) * pct, h - 4);
    this._hpTex.needsUpdate = true;
  }

  /* ──────────────────────────────── State update from server ── */
  applyState(state) {
    // Update target for lerp
    this._targetPos.set(state.x ?? 0, state.y ?? 0, state.z ?? 0);
    this._targetYaw = state.yaw ?? 0;

    this.health = state.health ?? this.health;
    this._redrawHp();

    // Choose animation based on state
    if (this._ready) {
      const anim = state.anim;
      if (anim === 'sprint' || anim === 'run')    this._play('run forward');
      else if (anim === 'walk')                    this._play('walk forward');
      else if (anim === 'dead')                    this._play('death from the front');
      else                                         this._play('idle');
    }
  }

  /* ──────────────────────────────── Per-frame update ── */
  update(delta) {
    if (this.mixer) this.mixer.update(delta);

    // Smooth position interpolation
    this.group.position.lerp(this._targetPos, Math.min(1, 12 * delta));
    // Smooth yaw interpolation
    const dyaw = this._targetYaw - this.group.rotation.y;
    this.group.rotation.y += Math.atan2(Math.sin(dyaw), Math.cos(dyaw)) * Math.min(1, 10 * delta);
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    this._redrawHp();
    if (this.health <= 0 && this._ready) this._play('death from the front');
  }

  destroy() {
    this.scene.remove(this.group);
  }
}
