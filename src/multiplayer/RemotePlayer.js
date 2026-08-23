import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { AnimationController } from '../characters/AnimationController.js';

export class RemotePlayer {
  constructor(id, name, scene, isBot = false, weaponManager = null) {
    this.id = id;
    this.name = name || 'Operative';
    this.scene = scene;
    this.isBot = isBot;
    this.weaponManager = weaponManager;

    this.rootGroup = new THREE.Group();
    this.scene.add(this.rootGroup);

    this.targetPos = new THREE.Vector3();
    this.targetYaw = 0;
    this.targetPitch = 0;
    this.currentPitch = 0;

    this.health = 100;
    this.maxHealth = 100;
    this.isDead = false;

    this.characterMesh = null;
    this.animController = null;
    this.hitboxes = [];
    this.rightHandAnchor = null;
    this.gunMesh = null;

    this._loadRemoteSoldierModel();
    this._buildNameTagHUD();
  }

  _loadRemoteSoldierModel() {
    const loader = new FBXLoader();
    loader.load(
      './assets/models/soldier/Swat.fbx',
      (fbx) => {
        fbx.scale.set(0.01, 0.01, 0.01);
        fbx.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.userData = { hitZone: 'torso', playerId: this.id };
            this.hitboxes.push(child);
          }
          if (child.isBone && (child.name.toLowerCase().includes('righthand') || child.name.toLowerCase().includes('hand_r'))) {
            this.rightHandAnchor = child;
          }
        });
        this.characterMesh = fbx;
        this._attachGun();
        this.rootGroup.add(this.characterMesh);
        this.animController = new AnimationController(this.characterMesh);
        this.animController.loadAllAnimations();
      },
      undefined,
      () => {
        this._buildProceduralSoldier();
      }
    );
  }

  _buildProceduralSoldier() {
    this.characterMesh = new THREE.Group();

    const uniformMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.7, metalness: 0.2 });
    const vestMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.55, metalness: 0.5 });
    const enemyVisorMat = new THREE.MeshStandardMaterial({
      color: 0xff3366,
      emissive: 0xff0044,
      emissiveIntensity: 1.2,
      metalness: 0.9,
      roughness: 0.1
    });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xc89d7c, roughness: 0.85 });

    const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.22, 0.25), uniformMat);
    pelvis.name = 'pelvis';
    pelvis.position.y = 0.9;
    this.characterMesh.add(pelvis);

    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.46, 0.3), vestMat);
    chest.name = 'chest';
    chest.userData = { hitZone: 'torso', playerId: this.id };
    chest.position.set(0, 1.24, 0);
    this.characterMesh.add(chest);
    this.hitboxes.push(chest);

    const headGroup = new THREE.Group();
    headGroup.name = 'headGroup';
    headGroup.position.set(0, 1.62, 0);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 12), skinMat);
    head.userData = { hitZone: 'head', playerId: this.id };
    headGroup.add(head);
    this.hitboxes.push(head);

    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), vestMat);
    helmet.position.set(0, 0.03, -0.01);
    headGroup.add(helmet);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.065, 0.08), enemyVisorMat);
    visor.position.set(0, 0.02, 0.13);
    headGroup.add(visor);
    this.characterMesh.add(headGroup);

    const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.52, 0.12), uniformMat);
    leftArm.name = 'leftArm';
    leftArm.position.set(-0.29, 1.22, 0.08);
    leftArm.rotation.x = -0.42;
    this.characterMesh.add(leftArm);

    const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.52, 0.12), uniformMat);
    rightArm.name = 'rightArm';
    rightArm.position.set(0.29, 1.22, 0.12);
    rightArm.rotation.x = -0.92;
    this.characterMesh.add(rightArm);

    this.rightHandAnchor = new THREE.Group();
    this.rightHandAnchor.position.set(0.26, 1.15, 0.38);
    this.characterMesh.add(this.rightHandAnchor);

    const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.82, 0.17), uniformMat);
    leftLeg.name = 'leftLeg';
    leftLeg.userData = { hitZone: 'limbs', playerId: this.id };
    leftLeg.position.set(-0.13, 0.46, 0);
    this.characterMesh.add(leftLeg);
    this.hitboxes.push(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.82, 0.17), uniformMat);
    rightLeg.name = 'rightLeg';
    rightLeg.userData = { hitZone: 'limbs', playerId: this.id };
    rightLeg.position.set(0.13, 0.46, 0);
    this.characterMesh.add(rightLeg);
    this.hitboxes.push(rightLeg);

    this._attachGun();

    this.characterMesh.traverse(c => {
      if (c.isMesh) {
        c.castShadow = true;
        c.receiveShadow = true;
      }
    });

    this.rootGroup.add(this.characterMesh);
    this.animController = new AnimationController(this.characterMesh);
  }

  _attachGun() {
    if (!this.rightHandAnchor) return;
    
    // Clone gun.obj or create standard rifle
    if (this.weaponManager && this.weaponManager.masterGunTemplate) {
      this.gunMesh = this.weaponManager.masterGunTemplate.clone();
    } else {
      this.gunMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.11, 0.5),
        new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.25 })
      );
    }
    this.rightHandAnchor.add(this.gunMesh);
    this.gunMesh.position.set(0, 0, 0);
    this.gunMesh.rotation.set(0, 0, 0);
  }

  _buildNameTagHUD() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    this.nameTagCanvas = canvas;
    this.nameTagCtx = canvas.getContext('2d');

    this.nameTagTexture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: this.nameTagTexture, depthTest: false });
    this.nameTagSprite = new THREE.Sprite(spriteMat);
    this.nameTagSprite.scale.set(1.4, 0.35, 1);
    this.nameTagSprite.position.set(0, 2.15, 0);
    this.rootGroup.add(this.nameTagSprite);

    this._updateNameTagGraphics();
  }

  _updateNameTagGraphics() {
    const ctx = this.nameTagCtx;
    ctx.clearRect(0, 0, 256, 64);

    ctx.fillStyle = 'rgba(10, 15, 25, 0.8)';
    ctx.roundRect(10, 8, 236, 48, 8);
    ctx.fill();

    ctx.font = 'bold 18px "Segoe UI", sans-serif';
    ctx.fillStyle = this.isBot ? '#ffb703' : '#ff3366';
    ctx.textAlign = 'center';
    ctx.fillText((this.isBot ? '🤖 ' : '💀 ') + this.name, 128, 28);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(30, 36, 196, 8);

    const pct = Math.max(0, this.health / this.maxHealth);
    ctx.fillStyle = pct > 0.35 ? '#00ff88' : '#ff3366';
    ctx.fillRect(30, 36, 196 * pct, 8);

    this.nameTagTexture.needsUpdate = true;
  }

  setHealth(val) {
    this.health = val;
    this._updateNameTagGraphics();
    if (this.health <= 0 && !this.isDead) {
      this.die();
    }
  }

  die(hitDirection = 'front') {
    this.isDead = true;
    if (this.animController) this.animController.playDeathAnimation(hitDirection);
  }

  respawn(pos) {
    this.isDead = false;
    this.health = this.maxHealth;
    this._updateNameTagGraphics();
    this.rootGroup.position.set(pos.x, pos.y || 0, pos.z);
    if (this.animController) this.animController.resetDeath();
  }

  setNetworkState(state) {
    if (state.position) {
      this.targetPos.set(state.position.x, state.position.y, state.position.z);
    }
    if (state.yaw !== undefined) this.targetYaw = state.yaw;
    if (state.pitch !== undefined) this.targetPitch = state.pitch;
    if (state.health !== undefined) this.setHealth(state.health);
  }

  triggerMuzzleFlash() {
    if (!this.gunMesh) return;
    this.gunMesh.traverse(c => {
      if (c.isMesh && c.material) {
        c.material.emissive = new THREE.Color(0xffaa22);
        c.material.emissiveIntensity = 3;
        setTimeout(() => {
          if (c.material) c.material.emissiveIntensity = 0;
        }, 45);
      }
    });
  }

  update(delta) {
    if (this.isDead) {
      if (this.animController) this.animController.update(delta, { moveForward: 0, moveRight: 0 }, false, false, false, false, 0);
      return;
    }

    const prevX = this.rootGroup.position.x;
    const prevZ = this.rootGroup.position.z;

    this.rootGroup.position.lerp(this.targetPos, 0.28);
    this.rootGroup.rotation.y += (this.targetYaw - this.rootGroup.rotation.y) * 0.32;
    this.currentPitch += (this.targetPitch - this.currentPitch) * 0.32;

    const dx = this.rootGroup.position.x - prevX;
    const dz = this.rootGroup.position.z - prevZ;
    const speed = Math.hypot(dx, dz) / delta;
    const isMoving = speed > 0.2;

    if (this.animController) {
      this.animController.update(
        delta,
        { moveForward: isMoving ? 1.0 : 0, moveRight: 0 },
        speed > 6.0,
        false,
        false,
        false,
        this.currentPitch
      );
    }
  }

  destroy() {
    this.scene.remove(this.rootGroup);
    if (this.characterMesh) {
      this.characterMesh.traverse(c => {
        if (c.geometry) c.geometry.dispose();
        if (c.material) c.material.dispose();
      });
    }
  }
}
