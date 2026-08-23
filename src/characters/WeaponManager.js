import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';

export class WeaponManager {
  constructor(scene, audioManager) {
    this.scene = scene;
    this.audioManager = audioManager;

    this.texLoader = new THREE.TextureLoader();
    this.tgaLoader = new TGALoader();

    // Weapon stats
    this.name = 'M4A1 CARBINE';
    this.fireMode = 'AUTO';
    this.fireRate = 0.09;
    this.fireTimer = 0;
    this.damage = 34;
    this.magSize = 30;
    this.currentAmmo = 30;
    this.reserveAmmo = 120;
    this.isReloading = false;
    this.reloadDuration = 1.6;
    this.reloadTimer = 0;

    // Viewmodel physics
    this.recoilKick = 0;
    this.maxRecoil = 0.04;
    this.swayX = 0;
    this.swayY = 0;
    this.bobbingTimer = 0;

    // FX pools
    this.tracers = [];
    this.sparks = [];
    this.casings = [];
    this.damageNumbers = [];

    // Gun references
    this.gunMesh = null;         // The FPS viewmodel group attached to camera
    this.masterGunTemplate = null; // Cloneable gun for enemies

    this._buildFPSViewmodel();   // Always shows immediately
    this._loadGunOBJ();          // Tries to replace rifle with real OBJ
    this._initMuzzleFX();
  }

  /* ─── FPS Viewmodel: invisible placeholder until gun.obj loads ─── */
  _buildFPSViewmodel() {
    const vm = new THREE.Group();
    vm.name = 'fpsViewModel';

    // Invisible placeholder so the group is non-empty
    const ph = new THREE.Mesh(
      new THREE.BoxGeometry(0.001, 0.001, 0.001),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    ph.name = 'placeholder';
    vm.add(ph);

    // Muzzle flash origin (updated when gun.obj is measured)
    this._muzzleLocalPos = new THREE.Vector3(0, 0, -0.07);

    // Template for enemy gun clones (updated when gun.obj loads)
    this.masterGunTemplate = ph.clone();

    this.gunMesh = vm;
  }

  /* ─── Load real gun.obj (replaces placeholder when ready) ─── */
  _loadGunOBJ() {
    const texBase = './assets/models/weapons/textures/';

    const loadTex = (name, colorSpace = THREE.SRGBColorSpace) => {
      const paths = [
        `${texBase}${name}.tga.png`,
        `${texBase}${name}`,
        `./assets/models/weapons/SK texture/01/${name}.tga`,
        `./assets/models/weapons/SK texture/02/${name}.tga`
      ];
      for (const p of paths) {
        try {
          const t = this.texLoader.load(p, (tex) => {
            tex.colorSpace = colorSpace;
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
          }, undefined, () => {});
          if (t) return t;
        } catch (_) {}
      }
      return null;
    };

    const mat01 = new THREE.MeshStandardMaterial({
      map:          loadTex('01_BaseColor', THREE.SRGBColorSpace),
      normalMap:    loadTex('01_Normal',    THREE.LinearSRGBColorSpace),
      roughnessMap: loadTex('01_Roughness', THREE.LinearSRGBColorSpace),
      emissiveMap:  loadTex('01_Emissive',  THREE.SRGBColorSpace),
      emissive:     new THREE.Color(0xffffff),
      emissiveIntensity: 0.15,
      roughness: 0.55,
      metalness: 0.6
    });

    const mat02 = new THREE.MeshStandardMaterial({
      map:           loadTex('02_BaseColor', THREE.SRGBColorSpace),
      normalMap:     loadTex('02_Normal',    THREE.LinearSRGBColorSpace),
      roughnessMap:  loadTex('02_Roughness', THREE.LinearSRGBColorSpace),
      metalnessMap:  loadTex('02_Metallic',  THREE.LinearSRGBColorSpace),
      emissiveMap:   loadTex('02_Emissive',  THREE.SRGBColorSpace),
      emissive:      new THREE.Color(0xffffff),
      emissiveIntensity: 0.1,
      roughness: 0.45,
      metalness: 0.75
    });

    const loader = new OBJLoader();
    loader.load('./assets/models/weapons/gun.obj', (obj) => {
      // Measure raw bounding box
      const bbox = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3(); bbox.getSize(size);
      const center = new THREE.Vector3(); bbox.getCenter(center);

      // Centre pivot at bounding-box centre
      obj.traverse(c => {
        if (c.isMesh) c.position.sub(center);
      });

      // Scale so the longest axis = 0.13m — fits the FPS lower-right viewmodel slot
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale  = 0.13 / Math.max(maxDim, 0.001);
      obj.scale.setScalar(scale);

      // Orient: gun barrel should point toward -Z (into the screen)
      // Longest axis tells us which way the gun is modelled
      if (size.x >= size.y && size.x >= size.z) {
        // Modelled along X → rotate 90° around Y so barrel faces -Z
        obj.rotation.y = -Math.PI / 2;
      } else if (size.y >= size.x && size.y >= size.z) {
        // Modelled along Y → tilt so barrel faces -Z
        obj.rotation.x = Math.PI / 2;
      }
      // If Z is already longest, no rotation needed

      let mi = 0;
      obj.traverse(c => {
        if (c.isMesh) {
          c.material    = (mi % 2 === 0) ? mat01 : mat02;
          c.castShadow  = false;
          mi++;
        }
      });

      // Clear ALL children (placeholder + anything else) then add fresh OBJ
      while (this.gunMesh.children.length > 0) {
        this.gunMesh.remove(this.gunMesh.children[0]);
      }
      obj.name = 'gun';
      this.gunMesh.add(obj);

      // Update muzzle position to actual barrel tip
      this._muzzleLocalPos = new THREE.Vector3(0, 0, -scale * maxDim * 0.5);

      // Template clone used when attaching gun to enemy soldiers
      this.masterGunTemplate = obj.clone();
      console.log('[WeaponManager] gun.obj loaded, scale:', scale.toFixed(5));
    }, undefined, () => {
      console.log('[WeaponManager] gun.obj not found — using procedural rifle');
    });
  }

  /* ─── Muzzle Flash FX ─── */
  _initMuzzleFX() {
    this.muzzleLight = new THREE.PointLight(0xffaa22, 0, 7);
    this.scene.add(this.muzzleLight);

    const c = document.createElement('canvas'); c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32,32,0, 32,32,30);
    g.addColorStop(0, '#ffffff'); g.addColorStop(0.3, '#ffcc44'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,64,64);
    const spriteMat = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), blending: THREE.AdditiveBlending });
    this.muzzleSprite = new THREE.Sprite(spriteMat);
    this.muzzleSprite.scale.setScalar(0.4);
    this.muzzleSprite.visible = false;
    this.scene.add(this.muzzleSprite);
  }

  /* ─── Public API ─── */
  cloneGunMesh() {
    if (!this.masterGunTemplate) return null;
    return this.masterGunTemplate.clone();
  }

  canShoot() {
    return this.fireTimer <= 0 && !this.isReloading && this.currentAmmo > 0;
  }

  shoot(originWorld, forwardDir, hitResult) {
    if (!this.canShoot()) {
      if (this.currentAmmo <= 0 && !this.isReloading) this.reload();
      return null;
    }

    this.currentAmmo--;
    this.fireTimer = this.fireRate;
    this.recoilKick = this.maxRecoil;

    this.audioManager.playGunshot();
    this._triggerMuzzleFlash(originWorld, forwardDir);
    this._ejectCasing(originWorld, forwardDir);

    const end = hitResult ? hitResult.point
                           : originWorld.clone().add(forwardDir.clone().multiplyScalar(200));
    this._spawnTracer(originWorld, end);
    if (hitResult) this._spawnImpact(hitResult.point, hitResult.face?.normal ?? new THREE.Vector3(0,1,0));

    return { damage: this.damage, hit: hitResult };
  }

  reload() {
    if (this.isReloading || this.currentAmmo === this.magSize || this.reserveAmmo <= 0) return;
    this.isReloading = true;
    this.reloadTimer = this.reloadDuration;
    this.audioManager.playReload();
  }

  spawnDamageNumber(point, damage, isCrit = false) {
    const cvs = document.createElement('canvas'); cvs.width = 128; cvs.height = 64;
    const ctx = cvs.getContext('2d');
    ctx.font = `bold ${isCrit ? 32 : 26}px 'Segoe UI',sans-serif`;
    ctx.fillStyle = isCrit ? '#ffb703' : '#ff3366';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#000'; ctx.shadowBlur = 4;
    ctx.fillText(`-${Math.ceil(damage)}${isCrit ? ' !' : ''}`, 64, 42);
    const sm = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cvs), depthTest: false });
    const sprite = new THREE.Sprite(sm);
    sprite.position.copy(point).add(new THREE.Vector3(0, 0.3, 0));
    sprite.scale.set(0.75, 0.38, 1);
    this.scene.add(sprite);
    this.damageNumbers.push({ sprite, velocity: new THREE.Vector3(0, 1.1, 0), life: 0.75 });
  }

  /* ─── Private FX helpers ─── */
  _triggerMuzzleFlash(origin, dir) {
    const pos = origin.clone().add(dir.clone().multiplyScalar(0.55));
    this.muzzleLight.position.copy(pos); this.muzzleLight.intensity = 3.5;
    this.muzzleSprite.position.copy(pos); this.muzzleSprite.visible = true;
    setTimeout(() => { this.muzzleLight.intensity = 0; this.muzzleSprite.visible = false; }, 38);
  }

  _ejectCasing(origin, fwd) {
    const right = new THREE.Vector3(fwd.z, 0, -fwd.x).normalize();
    const geo = new THREE.CylinderGeometry(0.005, 0.005, 0.025, 6);
    const mat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.95, roughness: 0.2 });
    const m = new THREE.Mesh(geo, mat);
    m.position.copy(origin);
    this.scene.add(m);
    const vel = right.clone().multiplyScalar(1.8 + Math.random());
    vel.y += 1.3 + Math.random() * 0.5;
    this.casings.push({ mesh: m, velocity: vel, life: 0.9 });
  }

  _spawnTracer(start, end) {
    const geo = new THREE.BufferGeometry().setFromPoints([start.clone(), start.clone()]);
    const mat = new THREE.LineBasicMaterial({ color: 0xffee55, transparent: true, opacity: 0.9 });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.tracers.push({ line, start: start.clone(), end: end.clone(), progress: 0, speed: 14 });
  }

  _spawnImpact(point, normal) {
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(0.025, 4, 4),
        new THREE.MeshBasicMaterial({ color: 0xffaa22 })
      );
      m.position.copy(point);
      const vel = normal.clone().multiplyScalar(1.8 + Math.random() * 2);
      vel.x += (Math.random() - 0.5) * 1.5;
      vel.y += (Math.random() - 0.5) * 1.5;
      vel.z += (Math.random() - 0.5) * 1.5;
      this.scene.add(m);
      this.sparks.push({ mesh: m, velocity: vel, life: 0.22 });
    }
  }

  /* ─── Per-Frame Update ─── */
  update(delta, aimDelta = { x: 0, y: 0 }, isMoving = false, isSprinting = false) {
    if (this.fireTimer > 0) this.fireTimer -= delta;
    this.recoilKick = Math.max(0, this.recoilKick - delta * 0.55);
    this.swayX += (aimDelta.x * 0.16 - this.swayX) * 0.2;
    this.swayY += (aimDelta.y * 0.16 - this.swayY) * 0.2;
    if (isMoving) this.bobbingTimer += delta * (isSprinting ? 13 : 8.5);
    else          this.bobbingTimer = 0;

    if (this.isReloading) {
      this.reloadTimer -= delta;
      if (this.reloadTimer <= 0) {
        const add = Math.min(this.magSize - this.currentAmmo, this.reserveAmmo);
        this.currentAmmo += add; this.reserveAmmo -= add;
        this.isReloading = false;
      }
    }

    // Tracers
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const tr = this.tracers[i];
      tr.progress += delta * tr.speed;
      const head = tr.start.clone().lerp(tr.end, Math.min(1, tr.progress));
      const tail = tr.start.clone().lerp(tr.end, Math.max(0, tr.progress - 0.18));
      tr.line.geometry.setFromPoints([tail, head]);
      if (tr.progress > 1.2) { this.scene.remove(tr.line); tr.line.geometry.dispose(); tr.line.material.dispose(); this.tracers.splice(i,1); }
    }
    // Sparks
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const sp = this.sparks[i];
      sp.life -= delta; sp.velocity.y -= 9.8 * delta;
      sp.mesh.position.addScaledVector(sp.velocity, delta);
      if (sp.life <= 0) { this.scene.remove(sp.mesh); sp.mesh.geometry.dispose(); sp.mesh.material.dispose(); this.sparks.splice(i,1); }
    }
    // Casings
    for (let i = this.casings.length - 1; i >= 0; i--) {
      const cs = this.casings[i];
      cs.life -= delta; cs.velocity.y -= 12 * delta;
      cs.mesh.position.addScaledVector(cs.velocity, delta);
      if (cs.mesh.position.y < 0.01) { cs.mesh.position.y = 0.01; cs.velocity.y *= -0.3; }
      if (cs.life <= 0) { this.scene.remove(cs.mesh); cs.mesh.geometry.dispose(); cs.mesh.material.dispose(); this.casings.splice(i,1); }
    }
    // Damage numbers
    for (let i = this.damageNumbers.length - 1; i >= 0; i--) {
      const dn = this.damageNumbers[i];
      dn.life -= delta;
      dn.sprite.position.addScaledVector(dn.velocity, delta);
      dn.sprite.material.opacity = Math.max(0, dn.life / 0.75);
      if (dn.life <= 0) { this.scene.remove(dn.sprite); dn.sprite.material.dispose(); this.damageNumbers.splice(i,1); }
    }
  }
}
