import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

/* AnimationController
   Loads all Mixamo FBX clips and selects the right clip based on movement state. */
export class AnimationController {
  constructor(mesh) {
    this.mesh   = mesh;
    this.mixer  = null;
    this.clips  = {};      // name → AnimationClip
    this.actions = {};     // name → AnimationAction
    this.currentAction = null;
    this.currentName   = '';
    this._loadedCount  = 0;
    this._totalToLoad  = 0;
  }

  setMesh(mesh) {
    this.mesh  = mesh;
    this.mixer = mesh ? new THREE.AnimationMixer(mesh) : null;
  }

  /* Load all FBX animations from a folder. filenames = map of { key: filename } */
  loadAllAnimations(basePath) {
    const files = {
      idle:           'idle.fbx',
      idleAim:        'idle aiming.fbx',
      idleCrouch:     'idle crouching.fbx',
      idleCrouchAim:  'idle crouching aiming.fbx',
      walkFwd:        'walk forward.fbx',
      walkBack:       'walk backward.fbx',
      walkLeft:       'walk left.fbx',
      walkRight:      'walk right.fbx',
      walkFwdL:       'walk forward left.fbx',
      walkFwdR:       'walk forward right.fbx',
      walkBackL:      'walk backward left.fbx',
      walkBackR:      'walk backward right.fbx',
      runFwd:         'run forward.fbx',
      runBack:        'run backward.fbx',
      runLeft:        'run left.fbx',
      runRight:       'run right.fbx',
      sprintFwd:      'sprint forward.fbx',
      sprintFwdL:     'sprint forward left.fbx',
      sprintFwdR:     'sprint forward right.fbx',
      crouchFwd:      'walk crouching forward.fbx',
      crouchBack:     'walk crouching backward.fbx',
      crouchLeft:     'walk crouching left.fbx',
      crouchRight:    'walk crouching right.fbx',
      jumpUp:         'jump up.fbx',
      jumpLoop:       'jump loop.fbx',
      jumpDown:       'jump down.fbx',
      deathFront:     'death from the front.fbx',
      deathBack:      'death from the back.fbx',
      deathRight:     'death from right.fbx',
      deathHeadFront: 'death from front headshot.fbx',
      deathHeadBack:  'death from back headshot.fbx',
      deathCrouchHead:'death crouching headshot front.fbx',
    };

    this._totalToLoad = Object.keys(files).length;
    const loader = new FBXLoader();

    for (const [key, filename] of Object.entries(files)) {
      loader.load(`${basePath}${filename}`, (fbx) => {
        if (fbx.animations.length > 0) {
          const clip = fbx.animations[0];
          clip.name = key;
          this.clips[key] = clip;
          if (this.mixer) {
            this.actions[key] = this.mixer.clipAction(clip);
            this.actions[key].clampWhenFinished = false;
          }
        }
        this._loadedCount++;
        if (this._loadedCount >= this._totalToLoad) this._onAllLoaded();
      }, undefined, () => this._loadedCount++);
    }
  }

  _onAllLoaded() {
    // Start idle
    this.playAnimation('idleAim', 0.3);
  }

  playAnimation(name, crossfadeDuration = 0.22, loop = true) {
    if (!this.actions[name] || this.currentName === name) return;
    const next = this.actions[name];
    next.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity);
    next.enabled = true;
    next.timeScale = 1;
    if (!loop) { next.clampWhenFinished = true; }

    if (this.currentAction && this.currentName !== name) {
      this.currentAction.crossFadeTo(next, crossfadeDuration, true);
    } else {
      next.reset();
    }
    next.play();
    this.currentAction = next;
    this.currentName   = name;
  }

  playDeathAnimation(direction = 'front') {
    const map = { front: 'deathFront', back: 'deathBack', right: 'deathRight', headFront: 'deathHeadFront', headBack: 'deathHeadBack' };
    const key = map[direction] ?? 'deathFront';
    this.playAnimation(key, 0.15, false);
  }

  resetDeath() {
    if (this.actions['deathFront']) this.actions['deathFront'].stop();
    this.currentName = '';
    this.currentAction = null;
    this.playAnimation('idleAim', 0.3);
  }

  /* Called every frame — picks the correct animation based on state */
  update(delta, input, isSprinting, isCrouching, isADS, isAirborne, pitch) {
    if (!this.mixer) return;
    this.mixer.update(delta);

    const { moveForward: fwd, moveRight: rgt } = input;
    const moving = Math.hypot(fwd, rgt) > 0.05;

    let clip;
    if (isAirborne) {
      clip = 'jumpLoop';
    } else if (isCrouching) {
      if (!moving)      clip = isADS ? 'idleCrouchAim' : 'idleCrouch';
      else if (fwd > 0) clip = 'crouchFwd';
      else if (fwd < 0) clip = 'crouchBack';
      else if (rgt > 0) clip = 'crouchRight';
      else              clip = 'crouchLeft';
    } else if (isSprinting && fwd > 0.4) {
      if (rgt >  0.4)   clip = 'sprintFwdR';
      else if (rgt < -0.4) clip = 'sprintFwdL';
      else              clip = 'sprintFwd';
    } else if (moving) {
      if (isADS) {
        if (fwd > 0)      clip = 'walkFwd';
        else if (fwd < 0) clip = 'walkBack';
        else if (rgt > 0) clip = 'walkRight';
        else              clip = 'walkLeft';
      } else {
        if (fwd > 0.4 && rgt > 0.4)  clip = 'runFwd';
        else if (fwd > 0)             clip = 'runFwd';
        else if (fwd < 0)             clip = 'runBack';
        else if (rgt > 0)             clip = 'runRight';
        else                          clip = 'runLeft';
      }
    } else {
      clip = isADS ? 'idleAim' : 'idle';
    }

    if (clip && this.clips[clip]) this.playAnimation(clip, 0.18);
  }
}
