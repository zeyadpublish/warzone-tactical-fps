import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { EnemyAI } from '../ai/EnemyAI.js';

export class LevelManager {
  constructor(sceneManager, physicsManager, audioManager, weaponManager, hud) {
    this.sceneManager   = sceneManager;
    this.threeScene     = sceneManager.scene;   // actual THREE.Scene
    this.physicsManager = physicsManager;
    this.audioManager   = audioManager;
    this.weaponManager  = weaponManager;
    this.hud            = hud;

    this.currentLevel     = 1;
    this.currentLevelName = 'CITY DISTRICT';
    this.enemies          = [];
    this.onLevelComplete  = null;
    this.levelLoaded      = false;
    this.mapMesh          = null;
    this._completeFired   = false;

    this._levelConfigs = {
      1: { name: 'CITY DISTRICT',   grunt: 8,  heavy: 2, sniper: 0, mode: 'day'        },
      2: { name: 'INDUSTRIAL ZONE', grunt: 12, heavy: 4, sniper: 2, mode: 'industrial'  },
      3: { name: 'NIGHT RAID',      grunt: 16, heavy: 6, sniper: 4, mode: 'night'       },
    };

    // Extra geometry added per-level (containers, etc.)
    this._extraObjects = [];
  }

  /* ─── Load a level ─── */
  async loadLevel(levelNumber, onAllEnemiesKilled) {
    this.currentLevel    = levelNumber;
    this.onLevelComplete = onAllEnemiesKilled;
    this.levelLoaded     = false;
    this._completeFired  = false;

    // Cleanup previous enemies
    for (const e of this.enemies) e.destroy?.();
    this.enemies = [];

    // Cleanup extra geometry
    for (const obj of this._extraObjects) this.threeScene.remove(obj);
    this._extraObjects = [];

    const cfg = this._levelConfigs[levelNumber] ?? this._levelConfigs[1];
    this.currentLevelName = cfg.name;

    // Load or reuse city map
    if (!this.mapMesh) {
      await this._loadCityFBX();
    }

    // Apply level environment (lighting / fog / background)
    this._setupLevelEnvironment(cfg.mode);

    // Extra geometry for level 2
    if (levelNumber === 2) this._setupIndustrialElements();

    // Spawn enemies
    this._spawnEnemies(cfg);

    this.levelLoaded = true;
    console.log(`[LevelManager] Level ${levelNumber} – "${cfg.name}" loaded. ${this.enemies.length} enemies.`);
  }

  /* ─── Per-frame update ─── */
  update(delta, playerPosition, playerController) {
    if (!this.levelLoaded) return;

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i];
      e.update?.(delta, playerPosition, playerController);
      // Remove long-dead enemies from array
      if (e.isDead && (e.deathTimer ?? 0) > 8) {
        e.destroy?.();
        this.enemies.splice(i, 1);
      }
    }

    if (!this._completeFired && this.checkAllEnemiesKilled()) {
      this._completeFired = true;
      this.onLevelComplete?.();
    }
  }

  /* ─── Getters ─── */
  getCurrentLevel()   { return this.currentLevel; }
  getEnemies()        { return this.enemies; }
  getEnemiesAlive()   { return this.enemies.filter(e => !e.isDead).length; }
  checkAllEnemiesKilled() {
    if (this.enemies.length === 0) return false; // don't trigger before spawn
    return this.enemies.every(e => e.isDead);
  }

  /* ─── Spawn enemies from config ─── */
  _spawnEnemies(cfg) {
    // Spread enemies around the map in a ring of varied positions
    const makeSpawnPos = (idx, total) => {
      const angle  = (idx / total) * Math.PI * 2 + (Math.random() - 0.5) * 0.7;
      const radius = 20 + Math.random() * 45;
      return { x: Math.cos(angle) * radius, y: 0, z: Math.sin(angle) * radius };
    };

    const entries = [
      ...Array(cfg.grunt  ?? 0).fill('GRUNT'),
      ...Array(cfg.heavy  ?? 0).fill('HEAVY'),
      ...Array(cfg.sniper ?? 0).fill('SNIPER'),
    ];

    entries.forEach((type, idx) => {
      const pos = makeSpawnPos(idx, entries.length);
      const e = new EnemyAI(
        this.threeScene, this.physicsManager, this.audioManager, this.weaponManager,
        { position: pos, type, level: this.currentLevel, name: `${type}_${idx+1}` }
      );
      this.enemies.push(e);
    });
  }

  /* ─── Environment per level ─── */
  _setupLevelEnvironment(mode) {
    const s = this.threeScene;
    if (mode === 'day') {
      s.background = new THREE.Color(0x87ceeb);
      s.fog = new THREE.Fog(0x87ceeb, 60, 200);
      this.sceneManager.setNightMode(false);
      this.sceneManager.setIndustrialMode?.(false);
    } else if (mode === 'industrial') {
      s.background = new THREE.Color(0x261004);
      s.fog = new THREE.Fog(0x2a1008, 30, 160);
      this.sceneManager.setIndustrialMode?.(true);
    } else if (mode === 'night') {
      s.background = new THREE.Color(0x05080f);
      s.fog = new THREE.FogExp2(0x08101a, 0.022);
      this.sceneManager.setNightMode(true);
    }
  }

  /* ─── Extra industrial geometry (level 2) ─── */
  _setupIndustrialElements() {
    const colors = [0x7a2222, 0x225577, 0x3a3a3a, 0x4a2200];
    const mkBox  = (w, h, d, color, px, py, pz, ry = 0) => {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0.35 })
      );
      m.position.set(px, py, pz); m.rotation.y = ry;
      m.castShadow = true; m.receiveShadow = true;
      this.threeScene.add(m);
      this._extraObjects.push(m);
      // Register AABB collider
      const hw = w/2, hd = d/2;
      this.physicsManager.addBoxCollider(
        new THREE.Vector3(px-hw, py, pz-hd),
        new THREE.Vector3(px+hw, py+h, pz+hd)
      );
    };

    for (let i = 0; i < 18; i++) {
      const angle  = Math.random() * Math.PI * 2;
      const radius = 15 + Math.random() * 50;
      const px = Math.cos(angle) * radius, pz = Math.sin(angle) * radius;
      const color = colors[Math.floor(Math.random() * colors.length)];
      mkBox(4 + Math.random()*3, 3 + Math.random()*3, 10 + Math.random()*4, color, px, 1.5, pz, Math.random() * Math.PI);
    }

    // Overhead catwalk / platform
    mkBox(40, 0.4, 4, 0x2a2a2a, 0, 8, -10);
    mkBox(40, 0.4, 4, 0x2a2a2a, 0, 8,  10);
  }

  _loadCityFBX() {
    return new Promise((resolve) => {
      const concreteMat = new THREE.MeshStandardMaterial({ color: 0x7a7f86, roughness: 0.85, metalness: 0.08 });
      const glassMat    = new THREE.MeshStandardMaterial({ color: 0x7ab8d4, roughness: 0.1,  metalness: 0.3, transparent: true, opacity: 0.65 });

      new FBXLoader().load('./assets/models/environment/city.fbx', (fbx) => {

        // Step 1 — Add to scene and apply Z-up→Y-up rotation correction
        // FBX files exported from Blender/Maya with Z-up need this fix
        this.threeScene.add(fbx);
        fbx.rotation.x = -Math.PI / 2;
        fbx.updateMatrixWorld(true);

        // Step 2 — Measure world bbox AFTER rotation is applied
        const rawBbox   = new THREE.Box3().setFromObject(fbx);
        const rawSize   = new THREE.Vector3(); rawBbox.getSize(rawSize);
        console.log('[LevelManager] Raw city size (after rotation):', rawSize.x.toFixed(0), rawSize.y.toFixed(0), rawSize.z.toFixed(0));

        // Step 3 — Scale to 180m horizontal footprint
        const maxHoriz = Math.max(rawSize.x, rawSize.z, 0.001);
        const scale    = 180 / maxHoriz;
        fbx.scale.setScalar(scale);
        fbx.updateMatrixWorld(true);

        // Step 4 — Measure world bbox again after scaling
        const wBbox   = new THREE.Box3().setFromObject(fbx);
        const wCenter = new THREE.Vector3(); wBbox.getCenter(wCenter);

        // Step 5 — Shift to centre horizontally, ground at y=0
        fbx.position.set(
          fbx.position.x - wCenter.x,
          fbx.position.y - wBbox.min.y,
          fbx.position.z - wCenter.z
        );
        fbx.updateMatrixWorld(true);

        // Step 6 — Final confirmed world bbox
        const finalBbox = new THREE.Box3().setFromObject(fbx);
        const finalSize = new THREE.Vector3(); finalBbox.getSize(finalSize);
        console.log(`[LevelManager] City placed: ${finalSize.x.toFixed(0)}×${finalSize.z.toFixed(0)}m, h=${finalSize.y.toFixed(0)}m`);

        // Step 7 — Rich procedural colors based on mesh height
        const bldgPalette = [
          0x1a2535, 0x1e2d1a, 0x251a2d, 0x2d1a1a,
          0x1a252d, 0x2d251a, 0x1a1e2d, 0x2a2a1a,
          0x1a2d25, 0x2d1a25,
        ];
        const glassOptions = [
          new THREE.MeshStandardMaterial({ color: 0x5ab8d4, roughness: 0.06, metalness: 0.5, transparent: true, opacity: 0.52 }),
          new THREE.MeshStandardMaterial({ color: 0x3da8c0, roughness: 0.06, metalness: 0.5, transparent: true, opacity: 0.52 }),
          new THREE.MeshStandardMaterial({ color: 0x78ccaa, roughness: 0.06, metalness: 0.5, transparent: true, opacity: 0.52 }),
        ];
        const accentColors = [0x00e5ff, 0xff6600, 0xffcc00, 0x44ff88, 0xff4488, 0x8844ff];
        const roadMat    = new THREE.MeshStandardMaterial({ color: 0x1e2226, roughness: 0.99, metalness: 0.01 });
        const roofMat    = new THREE.MeshStandardMaterial({ color: 0x2a2e33, roughness: 0.88, metalness: 0.08 });
        const lowMat     = new THREE.MeshStandardMaterial({ color: 0x353b42, roughness: 0.92, metalness: 0.04 });
        const _tmpBB = new THREE.Box3();
        let _mi = 0;

        fbx.traverse(c => {
          if (!c.isMesh) return;
          c.castShadow = true; c.receiveShadow = true;
          const name = (c.name ?? '').toLowerCase();

          if (name.includes('glass') || name.includes('window')) {
            c.material = glassOptions[_mi % glassOptions.length];
          } else if (name.includes('road') || name.includes('street') || name.includes('pavement')) {
            c.material = roadMat;
          } else if (name.includes('roof') || name.includes('top')) {
            c.material = roofMat;
          } else {
            _tmpBB.setFromObject(c);
            const h = _tmpBB.max.y - _tmpBB.min.y;
            if (h > 25) {
              // Tall skyscraper — dark base + subtle emissive accent
              c.material = new THREE.MeshStandardMaterial({
                color: bldgPalette[_mi % bldgPalette.length],
                roughness: 0.28, metalness: 0.65,
                emissive: new THREE.Color(accentColors[_mi % accentColors.length]),
                emissiveIntensity: 0.025,
              });
            } else if (h > 8) {
              c.material = new THREE.MeshStandardMaterial({
                color: bldgPalette[(_mi + 4) % bldgPalette.length],
                roughness: 0.72, metalness: 0.18,
              });
            } else {
              c.material = lowMat;
            }
          }
          _mi++;
        });

        fbx.name = 'city_map';
        this.mapMesh = fbx;


        // Step 8 — Concrete ground plane sized to city footprint
        const gw = finalSize.x + 30, gd = finalSize.z + 30;
        const groundMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(gw, gd),
          new THREE.MeshStandardMaterial({ color: 0x4a4f54, roughness: 0.92, metalness: 0.04 })
        );
        groundMesh.rotation.x = -Math.PI / 2;
        groundMesh.position.set(0, 0.02, 0);
        groundMesh.receiveShadow = true;
        groundMesh.name = 'cityGround';
        this.threeScene.add(groundMesh);
        this._extraObjects.push(groundMesh);

        // Step 9 — Auto AABB box colliders
        this.physicsManager.clearColliders?.();
        const aabb = new THREE.Box3(), sz = new THREE.Vector3();
        let n = 0;
        fbx.traverse(c => {
          if (!c.isMesh) return;
          aabb.setFromObject(c); aabb.getSize(sz);
          if (Math.max(sz.x, sz.y, sz.z) < 2) return; // skip micro detail
          this.physicsManager.addBoxCollider?.(aabb.min.clone(), aabb.max.clone());
          n++;
        });
        this.physicsManager.invalidateCache?.();
        console.log(`[LevelManager] ${n} building colliders registered`);
        resolve();

      }, undefined, () => {
        console.info('[LevelManager] city.fbx not found — procedural fallback');
        this._buildProceduralCity();
        resolve();
      });
    });
  }




  _buildProceduralCity() {
    const mat = (c, r=0.75, m=0.15) => new THREE.MeshStandardMaterial({ color:c, roughness:r, metalness:m });
    const box = (w,h,d,color,px,py,pz) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat(color));
      mesh.position.set(px,py,pz); mesh.castShadow = true; mesh.receiveShadow = true;
      this.threeScene.add(mesh);
      this._extraObjects.push(mesh);
    };
    box(500,0.2,500, 0x3a3a3a, 0,0,0);
    const bldgs = [
      [8,16,8,0x4a5568,-28,8,-20],[8,22,8,0x374151,28,11,-22],
      [12,10,10,0x4a5568,-42,5,20],[10,18,10,0x374151,42,9,22],
      [8,12,8,0x4a5568,0,6,-38],[6,8,6,0x374151,18,4,35],
      [6,8,6,0x374151,-18,4,35],[12,6,8,0x374151,0,3,28],
    ];
    bldgs.forEach(b => box(...b));
  }
}
