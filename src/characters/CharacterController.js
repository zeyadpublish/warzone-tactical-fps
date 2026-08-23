import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { AnimationController } from './AnimationController.js';

export class CharacterController {
  constructor(scene, physicsManager, audioManager) {
    this.scene          = scene;
    this.physicsManager = physicsManager;
    this.audioManager   = audioManager;

    this.rootGroup = new THREE.Group();
    this.rootGroup.name = 'playerRoot';
    this.scene.add(this.rootGroup);

    // Physics state
    this.position  = new THREE.Vector3(0, 2, 0);
    this.velocity  = new THREE.Vector3();
    this.yaw   = 0;
    this.pitch = 0;

    // Movement params
    this.walkSpeed   = 5.5;
    this.sprintSpeed = 9.5;
    this.crouchSpeed = 2.6;
    this.jumpForce   = 7.0;
    this.gravity     = -20;

    // State flags
    this.isGrounded  = true;
    this.isSprinting = false;
    this.isCrouching = false;
    this.isADS       = false;
    this.isDead      = false;

    // Vitals
    this.health = 100; this.maxHealth = 100;
    this.armor  = 150; this.maxArmor  = 150;

    // Viewmodel
    this.adsProgress  = 0;
    this.sprintCant   = 0;
    this.footstepTimer = 0;

    this.animController  = new AnimationController(null);
    this.characterMesh   = null;
    this.rightHandAnchor = null;

    // Ground height cache — only recast when moved meaningfully
    this._lastGroundX  = Infinity;
    this._lastGroundZ  = Infinity;
    this._cachedGroundY = 0;
    this._groundCacheThresh = 0.5; // re-raycast if moved > 0.5m horizontally

    this._loadSoldier();
  }

  /* ── Load Swat.fbx; fallback to box soldier ── */
  _loadSoldier() {
    new FBXLoader().load('./assets/models/soldier/Swat.fbx', fbx => {
      fbx.scale.setScalar(0.01);
      fbx.traverse(c => {
        if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; }
        if (c.isBone) {
          const n = c.name.toLowerCase();
          if (n.includes('righthand') || n.includes('hand_r')) this.rightHandAnchor = c;
        }
      });
      fbx.visible = false; // FPS — own body invisible
      this.characterMesh = fbx;
      this.rootGroup.add(fbx);
      this.animController.setMesh(fbx);
      this.animController.loadAllAnimations('./assets/models/soldier/animations/');
    }, undefined, () => this._buildBoxSoldier());
  }

  _buildBoxSoldier() {
    const g = new THREE.Group();
    const mat = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.75, metalness: 0.2 });
    const mk  = (w, h, d, color, px, py, pz) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
      m.position.set(px, py, pz); m.castShadow = true; g.add(m); return m;
    };
    mk(0.38,0.22,0.25, 0x1e293b, 0,0.9,0);
    mk(0.44,0.46,0.30, 0x0f172a, 0,1.24,0).name = 'chest';
    const hg = new THREE.Group(); hg.position.set(0,1.62,0);
    hg.add(new THREE.Mesh(new THREE.SphereGeometry(0.13,12,12), mat(0xc89d7c)));
    g.add(hg);
    mk(0.16,0.82,0.17, 0x1e293b, -0.13,0.46,0);
    mk(0.16,0.82,0.17, 0x1e293b,  0.13,0.46,0);
    this.rightHandAnchor = new THREE.Group();
    this.rightHandAnchor.position.set(0.26,1.15,0.38);
    g.add(this.rightHandAnchor);
    g.visible = false;
    this.characterMesh = g;
    this.rootGroup.add(g);
    this.animController.setMesh(g);
  }

  /* ── Public API ── */
  takeDamage(amount) {
    if (this.isDead) return;
    let rem = amount;
    if (this.armor > 0) { const a = Math.min(this.armor, amount * 0.7); this.armor -= a; rem -= a; }
    this.health = Math.max(0, this.health - rem);
    this.audioManager.playHurt?.();
    if (this.health <= 0) this.die();
  }

  die() {
    if (this.isDead) return;
    this.isDead = true; this.health = 0; this.velocity.set(0,0,0);
    if (this.characterMesh) this.characterMesh.visible = true;
    this.animController.playDeathAnimation?.('front');
  }

  respawn(pos) {
    this.isDead = false;
    this.health = this.maxHealth; this.armor = this.maxArmor;
    this.position.set(pos.x, (pos.y ?? 2) + 0.5, pos.z);
    this.velocity.set(0, 0, 0);
    this.isGrounded = false;
    // Always look straight ahead at horizon on spawn
    this.yaw   = 0;
    this.pitch = 0;
    this._lastGroundX = Infinity; // invalidate ground cache
    this.rootGroup.position.copy(this.position);
    if (this.characterMesh) this.characterMesh.visible = false;
    this.animController.resetDeath?.();
  }

  /* ── Cached ground height ── */
  _getGroundY(pos) {
    const dx = pos.x - this._lastGroundX;
    const dz = pos.z - this._lastGroundZ;
    if (Math.hypot(dx, dz) > this._groundCacheThresh) {
      this._cachedGroundY = this.physicsManager.getGroundHeight(pos);
      this._lastGroundX   = pos.x;
      this._lastGroundZ   = pos.z;
    }
    return this._cachedGroundY;
  }

  /* ── Main update (called every frame) ── */
  update(delta, inputManager, weaponManager, sceneManager) {
    if (this.isDead) {
      this.animController.update?.(delta, {moveForward:0,moveRight:0}, false, false, false, false, 0);
      return;
    }

    /* ── 1. Mouse aim ── */
    const aim = inputManager.consumeAimDelta();
    this.yaw   -= aim.x;
    this.pitch -= aim.y;
    this.pitch  = Math.max(-Math.PI * 0.45, Math.min(Math.PI * 0.45, this.pitch));

    /* ── 2. State ── */
    this.isSprinting = inputManager.isSprinting && !inputManager.isCrouching && !inputManager.isADS;
    this.isCrouching = inputManager.isCrouching;
    this.isADS       = inputManager.isADS;

    /* ── 3. Horizontal movement ── */
    const fwd = inputManager.moveForward;
    const rgt = inputManager.moveRight;

    let speed = this.walkSpeed;
    if (this.isCrouching)      speed = this.crouchSpeed;
    else if (this.isSprinting) speed = this.sprintSpeed;
    else if (this.isADS)       speed *= 0.6;

    const sinY = Math.sin(this.yaw), cosY = Math.cos(this.yaw);
    this.velocity.x = (rgt * cosY - fwd * sinY) * speed;
    this.velocity.z = (-rgt * sinY - fwd * cosY) * speed;

    /* ── 4. Jump ── */
    if (inputManager.isJumping && this.isGrounded) {
      this.velocity.y = this.jumpForce;
      this.isGrounded = false;
      this.audioManager.playJump?.();
    }

    /* ── 5. Gravity ── */
    if (!this.isGrounded) this.velocity.y += this.gravity * delta;

    /* ── 6. Integrate position ── */
    const nextPos = this.position.clone().addScaledVector(this.velocity, delta);
    const groundY = this._getGroundY(nextPos);

    if (nextPos.y <= groundY + 0.02) {
      nextPos.y   = groundY;
      this.velocity.y = 0;
      this.isGrounded = true;
    } else {
      this.isGrounded = false;
    }

    /* ── 7. Collision ── */
    this.position.copy(this.physicsManager.checkCollision(nextPos, 0.4, this.isCrouching ? 1.1 : 1.75));
    this.rootGroup.position.copy(this.position);
    this.rootGroup.rotation.y = this.yaw;

    /* ── 8. Footsteps ── */
    const moving = Math.hypot(fwd, rgt) > 0.05 && this.isGrounded;
    if (moving) {
      this.footstepTimer += delta;
      const interval = this.isSprinting ? 0.28 : 0.46;
      if (this.footstepTimer >= interval) {
        this.footstepTimer = 0;
        this.audioManager.playFootstep?.(this.isSprinting, this.isCrouching);
      }
    } else {
      this.footstepTimer = 0.15;
    }

    /* ── 9. Animations ── */
    this.animController.update?.(
      delta, { moveForward: fwd, moveRight: rgt },
      this.isSprinting, this.isCrouching, this.isADS, !this.isGrounded, this.pitch
    );

    /* ── 10. FPS Viewmodel (gun in lower-right, COD style) ── */
    if (weaponManager?.gunMesh) {
      const vm = weaponManager.gunMesh;
      if (vm.parent !== sceneManager.fpsGunHolder) sceneManager.fpsGunHolder.add(vm);

      // ADS progress
      const adsTarget = this.isADS ? 1 : 0;
      this.adsProgress += (adsTarget - this.adsProgress) * Math.min(1, delta * 16);

      // Weapon bob (only when moving and on ground)
      const bobAmt = moving ? (this.isSprinting ? 0.008 : 0.003) : 0;
      const bobY   = Math.sin(weaponManager.bobbingTimer) * bobAmt * (1 - this.adsProgress * 0.85);
      const bobX   = Math.cos(weaponManager.bobbingTimer * 0.5) * bobAmt * 0.6 * (1 - this.adsProgress * 0.85);

      // Hip-fire: bottom-right corner.  ADS: centered.
      const hx = 0.095, hy = -0.095, hz = -0.14;  // hipfire (reduced from before)
      const ax = 0.000, ay = -0.060, az = -0.10;   // ADS

      vm.position.set(
        THREE.MathUtils.lerp(hx, ax, this.adsProgress) + weaponManager.swayX * 0.6 + bobX,
        THREE.MathUtils.lerp(hy, ay, this.adsProgress) - weaponManager.recoilKick + weaponManager.swayY * 0.6 + bobY,
        THREE.MathUtils.lerp(hz, az, this.adsProgress) + weaponManager.recoilKick * 0.8
      );

      // Sprint cant
      const cantTarget = this.isSprinting ? 0.18 : 0;
      this.sprintCant += (cantTarget - this.sprintCant) * delta * 10;

      vm.rotation.set(
        weaponManager.swayY * 0.8,
        weaponManager.swayX * 0.8,
        -weaponManager.swayX * 0.5 + this.sprintCant
      );
    }

    /* ── 11. Reload ── */
    if (inputManager.isReloading) {
      weaponManager?.reload();
      inputManager.isReloading = false;
    }
  }
}
