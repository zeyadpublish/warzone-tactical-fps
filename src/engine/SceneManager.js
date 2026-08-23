import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

export class SceneManager {
  constructor() {
    this.scene    = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.camera   = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.05, 800);

    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    document.getElementById('game-canvas').appendChild(this.renderer.domElement);

    // FPS Gun holder — child of camera, always in view
    this.fpsGunHolder = new THREE.Group();
    this.camera.add(this.fpsGunHolder);
    this.scene.add(this.camera);

    // Camera mode always FPS
    this.cameraMode = 'fps';

    this._buildDefaultEnvironment();
    this._setupLights();
    this._setupResize();
  }

  /* ─── Sky + fog only — city.fbx provides the actual ground ─── */
  _buildDefaultEnvironment() {
    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.Fog(0x87ceeb, 80, 400);
    // No ground plane here — the city FBX is the ground.
    // A small invisible disc at y=-1 prevents falling forever on first load.
    const safetyGround = new THREE.Mesh(
      new THREE.PlaneGeometry(600, 600, 1, 1),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    safetyGround.rotation.x = -Math.PI / 2;
    safetyGround.position.y = -1;
    safetyGround.name = 'safetyGround';
    this.scene.add(safetyGround);
    this.safetyGround = safetyGround;
  }

  /* ─── Full lighting rig (Warzone daytime) ─── */
  _setupLights() {
    this.scene.add(new THREE.AmbientLight(0xd4e8ff, 0.65));

    this.sunLight = new THREE.DirectionalLight(0xfff5e0, 2.6);
    this.sunLight.position.set(80, 180, 60);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far  = 400;
    this.sunLight.shadow.camera.left = this.sunLight.shadow.camera.bottom = -100;
    this.sunLight.shadow.camera.right = this.sunLight.shadow.camera.top  = 100;
    this.sunLight.shadow.bias = -0.001;
    this.scene.add(this.sunLight);

    const fill = new THREE.DirectionalLight(0xb0d4ff, 0.7);
    fill.position.set(-60, 40, -80);
    this.scene.add(fill);

    const bounce = new THREE.HemisphereLight(0x8fb3d4, 0x5a4a3a, 0.4);
    this.scene.add(bounce);
  }

  /* ─── Load city FBX — no textures, plain material ─── */
  loadCityFBX(onLoaded) {
    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0x8a8f96, roughness: 0.82, metalness: 0.08,
    });

    new FBXLoader().load('./assets/models/environment/city.fbx', (fbx) => {
      const bbox = new THREE.Box3().setFromObject(fbx);
      const size = new THREE.Vector3(); bbox.getSize(size);
      const maxDim = Math.max(size.x, size.z, 0.001);
      const scale = 200 / maxDim;
      fbx.scale.setScalar(scale);

      const center = new THREE.Vector3(); bbox.getCenter(center);
      fbx.position.set(-center.x * scale, -bbox.min.y * scale, -center.z * scale);

      fbx.traverse(c => {
        if (!c.isMesh) return;
        c.receiveShadow = true;
        c.castShadow = true;
        c.material = concreteMat;
      });

      fbx.name = 'city';
      this.scene.add(fbx);
      this.cityMesh = fbx;
      onLoaded?.(fbx);
    }, undefined, () => {
      console.info('[SceneManager] city.fbx not present yet, using procedural arena');
      this._buildUrbanArena();
      onLoaded?.(null);
    });
  }

  /* ─── Procedural urban arena fallback ─── */
  _buildUrbanArena() {
    const mat = (c, r = 0.7, m = 0.2) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
    const box = (w, h, d, color, px, py, pz) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
      m.position.set(px, py, pz); m.castShadow = true; m.receiveShadow = true;
      this.scene.add(m); return m;
    };

    // Perimeter walls
    box(200, 0.2, 200, 0x3a3a3a, 0, 0, 0).rotation.x = 0;
    // Tall buildings
    const layout = [
      [8,16,8, 0x4a5568, -28, 8, -20], [8,22,8, 0x374151, 28, 11, -22],
      [12,10,10, 0x4a5568, -42, 5, 20], [10,18,10, 0x374151, 42, 9, 22],
      [8,12,8, 0x4a5568, 0, 6, -38], [6,8,6, 0x374151, 18, 4, 35],
      [6,8,6, 0x374151, -18, 4, 35], [12,6,8, 0x374151, 0, 3, 28],
      [4,1.5,4, 0x64748b, -10, 1.55, 5], [4,1.5,4, 0x64748b, 10, 1.55, -5],
      [8,2,2, 0x475163, -20, 2, 0], [8,2,2, 0x475163, 20, 2, 0],
    ];
    layout.forEach(([w,h,d,c,px,py,pz]) => box(w,h,d,c,px,py,pz));
  }

  /* ─── Camera update (FPS only) ─── */
  updateCamera(position, yaw, pitch) {
    // FPS eye height
    const eyeH = 1.68;
    this.camera.position.set(position.x, position.y + eyeH, position.z);
    this.camera.rotation.set(pitch, yaw, 0, 'YXZ');
  }

  /* ─── Night mode for level 3 ─── */
  setNightMode(enabled) {
    if (enabled) {
      this.scene.background = new THREE.Color(0x05080f);
      this.scene.fog = new THREE.FogExp2(0x08101a, 0.022);
      if (this.sunLight) { this.sunLight.intensity = 0.15; this.sunLight.color.set(0x3a4aaa); }
      const moon = new THREE.DirectionalLight(0x8899cc, 0.6);
      moon.position.set(-80, 200, -50); this.scene.add(moon);
    } else {
      this.scene.background = new THREE.Color(0x87ceeb);
      this.scene.fog = new THREE.Fog(0x87ceeb, 60, 200);
      if (this.sunLight) { this.sunLight.intensity = 2.6; this.sunLight.color.set(0xfff5e0); }
    }
  }

  setIndustrialMode(enabled) {
    if (enabled) {
      this.scene.background = new THREE.Color(0x1a0a04);
      this.scene.fog = new THREE.Fog(0x261004, 30, 160);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  _setupResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = innerWidth / innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(innerWidth, innerHeight);
    });
  }
}
