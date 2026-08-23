import * as THREE from 'three';

export class PhysicsManager {
  constructor(scene) {
    this.scene     = scene;
    this.colliders = [];

    // Cached flat mesh list — rebuilt when invalidated
    this._meshCache      = null;
    this._cacheTimer     = 0;
    this._cacheInterval  = 3.0; // rebuild every 3 s

    // Reusable raycaster to avoid GC pressure every frame
    this._rc   = new THREE.Raycaster();
    this._down = new THREE.Vector3(0, -1, 0);
    this._orig = new THREE.Vector3();
  }

  /* ── Build / return cached mesh list ── */
  _getMeshes() {
    if (!this._meshCache) {
      this._meshCache = [];
      this.scene.traverse(c => {
        if (c.isMesh &&
            c.name !== 'muzzle' && c.name !== 'bullet' &&
            !c.name.startsWith('hud') && !c.name.startsWith('sprite')) {
          this._meshCache.push(c);
        }
      });
    }
    return this._meshCache;
  }

  /* Call after a major scene change (level load) */
  invalidateCache() {
    this._meshCache = null;
    this._cacheTimer = 0;
  }

  /* ── Ground height via downward raycast ── */
  getGroundHeight(position) {
    this._orig.set(position.x, position.y + 2, position.z);
    this._rc.set(this._orig, this._down);
    this._rc.near = 0;
    this._rc.far  = 100;

    const hits = this._rc.intersectObjects(this._getMeshes(), false);
    if (hits.length > 0) return hits[0].point.y;
    return 0;
  }

  /* ── Tick: periodic cache refresh ── */
  tick(delta) {
    this._cacheTimer += delta;
    if (this._cacheTimer > this._cacheInterval) {
      this._meshCache  = null;
      this._cacheTimer = 0;
    }
  }

  /* ── AABB box collider registration ── */
  addBoxCollider(min, max) {
    this.colliders.push({ min: min.clone(), max: max.clone() });
  }
  clearColliders() { this.colliders = []; }

  /* ── Slide-based AABB collision ── */
  checkCollision(nextPos, radius, height) {
    let p = nextPos.clone();
    for (const col of this.colliders) {
      const colHeight = col.max.y - col.min.y;
      // Skip nearly-flat colliders (floors/rooftops) — only walls block horizontal movement
      if (colHeight < 0.8) continue;
      // Skip colliders whose top is below player's feet
      if (col.max.y < p.y) continue;
      // Skip colliders whose bottom is above player's head
      if (col.min.y > p.y + height) continue;

      const cx = (col.min.x + col.max.x) * 0.5;
      const cz = (col.min.z + col.max.z) * 0.5;
      const hw = (col.max.x - col.min.x) * 0.5 + radius;
      const hd = (col.max.z - col.min.z) * 0.5 + radius;

      const dx = p.x - cx, dz = p.z - cz;
      if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
        const px = hw - Math.abs(dx), pz = hd - Math.abs(dz);
        if (px < pz) p.x += dx < 0 ? -px : px;
        else         p.z += dz < 0 ? -pz : pz;
      }
    }
    return p;
  }

  /* ── Bullet hitscan ── */
  raycast(origin, direction, maxDist = 250, excludeList = []) {
    const rc = new THREE.Raycaster(
      origin.clone(),
      direction.clone().normalize(),
      0.05, maxDist
    );
    const candidates = this._getMeshes().filter(m => !excludeList.includes(m));
    const hits = rc.intersectObjects(candidates, true);
    return hits.length > 0 ? hits[0] : null;
  }
}
