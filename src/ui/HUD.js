/* ═══════════════════════════════════════════════════════════════════════
   HUD.js  –  Call of Duty Warzone–style HUD
   ═══════════════════════════════════════════════════════════════════════ */

export class HUD {
  constructor() {
    this._ammo        = 30;
    this._reserve     = 120;
    this._health      = 100;
    this._armor       = 150;
    this._killstreak  = 0;
    this._kills       = 0;
    this._enemiesLeft = 0;
    this._level       = 1;
    this._levelName   = 'CITY DISTRICT';
    this._killfeedItems = [];
    this._killfeedTimer = 0;

    this._buildDOM();
    this._bindElements();
    this.update({
      ammo: 30, reserve: 120, health: 100, armor: 150,
      kills: 0, enemiesLeft: 8, level: 1, levelName: 'CITY DISTRICT',
      pitch: 0, yaw: 0, isADS: false, isSprinting: false, isCrouching: false, isReloading: false
    });
  }

  /* ── Build all HUD elements in DOM ── */
  _buildDOM() {
    const hud = document.getElementById('hud');
    if (!hud) { console.error('[HUD] #hud element not found'); return; }

    hud.innerHTML = /* html */`
      <!-- Crosshair -->
      <div id="hud-crosshair">
        <div class="ch-top"></div><div class="ch-bot"></div>
        <div class="ch-lft"></div><div class="ch-rgt"></div>
        <div class="ch-dot"></div>
      </div>

      <!-- ── Bottom Left: Weapon & Ammo ── -->
      <div id="hud-weapon-block">
        <div id="hud-weapon-name">M4A1 CARBINE</div>
        <div id="hud-fire-mode">AUTO</div>
        <div id="hud-ammo-row">
          <span id="hud-ammo-cur">30</span>
          <span id="hud-ammo-sep"> / </span>
          <span id="hud-ammo-res">120</span>
        </div>
        <div id="hud-reload-bar" class="hidden"><div id="hud-reload-fill"></div></div>
      </div>

      <!-- ── Bottom Center: Vitals ── -->
      <div id="hud-vitals">
        <!-- 3-Plate Armor -->
        <div id="hud-armor-row">
          <div class="armor-plate" id="plate1"></div>
          <div class="armor-plate" id="plate2"></div>
          <div class="armor-plate" id="plate3"></div>
          <span id="hud-armor-val">150</span>
        </div>
        <!-- HP Bar -->
        <div id="hud-hp-row">
          <div id="hud-hp-bar"><div id="hud-hp-fill"></div></div>
          <span id="hud-hp-val">100</span>
        </div>
      </div>

      <!-- ── Top Left: Minimap stub ── -->
      <div id="hud-minimap">
        <canvas id="minimap-canvas" width="160" height="160"></canvas>
        <div id="minimap-label">MINIMAP</div>
      </div>

      <!-- ── Top Center: Level Banner ── -->
      <div id="hud-level-banner">
        <div id="hud-level-num">LEVEL 1</div>
        <div id="hud-level-name">CITY DISTRICT</div>
      </div>

      <!-- ── Top Right: Score Panel ── -->
      <div id="hud-score-panel">
        <div class="score-row"><span class="score-lbl">KILLS</span><span id="hud-kills">0</span></div>
        <div class="score-row"><span class="score-lbl">ENEMIES</span><span id="hud-enemies">8</span></div>
      </div>

      <!-- ── Compass ── -->
      <div id="hud-compass"><div id="hud-compass-strip">
        <span>N</span><span>NE</span><span>E</span><span>SE</span>
        <span>S</span><span>SW</span><span>W</span><span>NW</span>
        <span>N</span>
      </div></div>

      <!-- ── Hit Indicator (flash on damage) ── -->
      <div id="hud-hit-dir"></div>
      <div id="hud-vignette"></div>

      <!-- ── Killfeed ── -->
      <div id="hud-killfeed"></div>

      <!-- ── Elimination Banner ── -->
      <div id="hud-elim-banner" class="hidden">
        <div id="hud-elim-title">ENEMY ELIMINATED</div>
        <div id="hud-elim-sub" id="hud-elim-sub"></div>
      </div>

      <!-- ── State tags (ADS, sprint, crouch) ── -->
      <div id="hud-state-bar">
        <div id="hud-tag-ads"     class="state-tag hidden">[ ADS ]</div>
        <div id="hud-tag-sprint"  class="state-tag hidden">[ SPRINT ]</div>
        <div id="hud-tag-crouch"  class="state-tag hidden">[ CROUCH ]</div>
      </div>

      <!-- ── Objective ── -->
      <div id="hud-objective">
        <div id="hud-obj-icon">◉</div>
        <div id="hud-obj-text">ELIMINATE ALL ENEMIES</div>
        <div id="hud-obj-count"><span id="hud-obj-rem">8</span> remaining</div>
      </div>

      <!-- ── Level Complete ── -->
      <div id="hud-level-complete" class="hidden">
        <div id="hud-lc-title">LEVEL COMPLETE</div>
        <div id="hud-lc-sub">Next mission loading…</div>
        <div id="hud-lc-bar"><div id="hud-lc-fill"></div></div>
      </div>

        <!-- 💀 Death Screen 💀 -->
        <div id="hud-death-screen" class="hidden">
          <div id="hud-death-title">YOU WERE ELIMINATED</div>
          <div id="hud-death-buttons">
            <button id="btn-respawn">RESPAWN</button>
            <button id="btn-main-menu">MAIN MENU</button>
          </div>
        </div>
      `;
  }

  _bindElements() {
    const g = (id) => document.getElementById(id);
    this._el = {
      ammoCur    : g('hud-ammo-cur'),
      ammoRes    : g('hud-ammo-res'),
      reloadBar  : g('hud-reload-bar'),
      reloadFill : g('hud-reload-fill'),
      plate1     : g('plate1'), plate2: g('plate2'), plate3: g('plate3'),
      armorVal   : g('hud-armor-val'),
      hpFill     : g('hud-hp-fill'), hpVal: g('hud-hp-val'),
      levelNum   : g('hud-level-num'), levelName: g('hud-level-name'),
      kills      : g('hud-kills'), enemies: g('hud-enemies'),
      compassStrip: g('hud-compass-strip'),
      killfeed   : g('hud-killfeed'),
      elimBanner : g('hud-elim-banner'), elimTitle: g('hud-elim-title'), elimSub: g('hud-elim-sub'),
      tagADS     : g('hud-tag-ads'), tagSprint: g('hud-tag-sprint'), tagCrouch: g('hud-tag-crouch'),
      objText    : g('hud-obj-text'), objRem: g('hud-obj-rem'),
      levelComplete: g('hud-level-complete'), lcFill: g('hud-lc-fill'),
      deathScreen  : g('hud-death-screen'), deathCounter: g('hud-death-counter'),
      vignette   : g('hud-vignette'),
    };
  }

  /* ── Main update (called every frame) ── */
  update(state) {
    const { ammo, reserve, health, armor, kills, enemiesLeft, level, levelName,
            yaw, isADS, isSprinting, isCrouching, isReloading, reloadProgress } = state;

    // Ammo
    if (this._el.ammoCur) this._el.ammoCur.textContent = ammo;
    if (this._el.ammoRes) this._el.ammoRes.textContent = reserve;
    if (ammo === 0 && !isReloading) this._el.ammoCur?.classList.add('ammo-empty');
    else this._el.ammoCur?.classList.remove('ammo-empty');

    // Reload bar
    if (isReloading && reloadProgress !== undefined && this._el.reloadBar) {
      this._el.reloadBar.classList.remove('hidden');
      if (this._el.reloadFill) this._el.reloadFill.style.width = `${reloadProgress * 100}%`;
    } else if (this._el.reloadBar) {
      this._el.reloadBar.classList.add('hidden');
    }

    // HP
    const hpPct = Math.max(0, health / 100);
    if (this._el.hpFill) this._el.hpFill.style.width = `${hpPct * 100}%`;
    if (this._el.hpVal)  this._el.hpVal.textContent   = Math.ceil(health);
    if (health <= 30) {
      this._el.vignette?.classList.add('low-health');
    } else {
      this._el.vignette?.classList.remove('low-health');
    }

    // Armor plates (50 each)
    const a = Math.max(0, armor);
    if (this._el.plate1) this._el.plate1.className = 'armor-plate' + (a >= 50  ? ' plate-full' : (a > 0 ? ' plate-partial' : ''));
    if (this._el.plate2) this._el.plate2.className = 'armor-plate' + (a >= 100 ? ' plate-full' : (a > 50 ? ' plate-partial' : ''));
    if (this._el.plate3) this._el.plate3.className = 'armor-plate' + (a >= 150 ? ' plate-full' : (a > 100 ? ' plate-partial' : ''));
    if (this._el.armorVal) this._el.armorVal.textContent = Math.ceil(a);

    // Level
    if (this._el.levelNum  && level !== undefined) this._el.levelNum.textContent  = `LEVEL ${level}`;
    if (this._el.levelName && levelName)           this._el.levelName.textContent = levelName;

    // Score
    if (this._el.kills)   this._el.kills.textContent   = kills ?? 0;
    if (this._el.enemies) this._el.enemies.textContent = enemiesLeft ?? 0;
    if (this._el.objRem)  this._el.objRem.textContent  = enemiesLeft ?? 0;

    // State tags
    this._el.tagADS?.classList.toggle('hidden', !isADS);
    this._el.tagSprint?.classList.toggle('hidden', !isSprinting);
    this._el.tagCrouch?.classList.toggle('hidden', !isCrouching);

    // Compass
    if (this._el.compassStrip && yaw !== undefined) {
      const deg = (((-yaw * 180 / Math.PI) % 360) + 360) % 360;
      const offset = (deg / 360) * -100;
      this._el.compassStrip.style.transform = `translateX(calc(50% + ${offset}%))`;
    }
  }

  /* ── Killfeed ── */
  addKillfeedEvent(killerName, victimName, weapon = 'M4A1', headshot = false) {
    const kf = this._el.killfeed;
    if (!kf) return;
    const item = document.createElement('div');
    item.className = 'kf-item' + (headshot ? ' kf-headshot' : '');
    item.innerHTML = `<span class="kf-killer">${killerName}</span>
      ${headshot ? '💀' : '☠'}<span class="kf-wep">${weapon}</span>
      <span class="kf-victim">${victimName}</span>`;
    kf.appendChild(item);
    setTimeout(() => item.classList.add('kf-fade'), 4500);
    setTimeout(() => kf.removeChild(item), 5000);
  }

  /* ── Elimination banner ── */
  showEliminatedBanner(name, isHeadshot = false) {
    if (!this._el.elimBanner) return;
    if (this._el.elimTitle) this._el.elimTitle.textContent = isHeadshot ? '💀 HEADSHOT ELIMINATION' : 'ENEMY ELIMINATED';
    if (this._el.elimSub)   this._el.elimSub.textContent   = name ? `+ ${name}` : '';
    this._el.elimBanner.classList.remove('hidden');
    this._el.elimBanner.classList.add('elim-anim');
    setTimeout(() => {
      this._el.elimBanner.classList.add('hidden');
      this._el.elimBanner.classList.remove('elim-anim');
    }, 2800);
  }

  /* ── Hit indicator flash ── */
  showHitIndicator(direction = 'front') {
    const el = document.getElementById('hud-hit-dir');
    if (!el) return;
    el.className = `hit-dir-${direction}`;
    el.classList.add('hit-flash');
    setTimeout(() => el.classList.remove('hit-flash'), 400);
  }

  /* ── Level complete transition ── */
  showLevelComplete(nextLevel, duration = 3000) {
    const el = this._el.levelComplete;
    if (!el) return;
    el.classList.remove('hidden');
    let progress = 0;
    const interval = 50;
    const inc = interval / duration;
    const timer = setInterval(() => {
      progress += inc;
      if (this._el.lcFill) this._el.lcFill.style.width = `${progress * 100}%`;
      if (progress >= 1) clearInterval(timer);
    }, interval);
    setTimeout(() => el.classList.add('hidden'), duration + 200);
  }

  /* ── Death screen ── */
    showDeathScreen(onRespawn, onMainMenu) {
    const el = this._el.deathScreen;
    if (!el) return;
    el.classList.remove('hidden');
      const btnRespawn = document.getElementById('btn-respawn');
      const btnMenu = document.getElementById('btn-main-menu');
      if (btnRespawn) btnRespawn.onclick = () => { el.classList.add('hidden'); if(onRespawn) onRespawn(); };
      if (btnMenu) btnMenu.onclick = () => { el.classList.add('hidden'); if(onMainMenu) onMainMenu(); };



  }

  /* ── Minimap update ── */
  updateMinimap(playerPos, enemies) {
    const canvas = document.getElementById('minimap-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 160, H = 160, scale = W / 200;
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = 'rgba(0,10,20,0.75)';
    ctx.fillRect(0, 0, W, H);

    // Player dot
    const px = W/2 + playerPos.x * scale, py = H/2 + playerPos.z * scale;
    ctx.fillStyle = '#00e5ff';
    ctx.beginPath(); ctx.arc(Math.min(W-4, Math.max(4, px)), Math.min(H-4, Math.max(4, py)), 5, 0, Math.PI*2); ctx.fill();

    // Enemy dots
    ctx.fillStyle = '#ff3355';
    for (const e of enemies ?? []) {
      if (!e.mesh || e.state === 'DEAD') continue;
      const ex = W/2 + e.mesh.position.x * scale, ey = H/2 + e.mesh.position.z * scale;
      if (ex < 0 || ex > W || ey < 0 || ey > H) continue;
      ctx.beginPath(); ctx.arc(ex, ey, 4, 0, Math.PI*2); ctx.fill();
    }

    // Border
    ctx.strokeStyle = '#00e5ff44'; ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, W, H);
  }

  /* ── Leaderboard (Tab key) ── */
  initLeaderboard(myName) {
    this._myName = myName;
    this._lbData = [{ name: myName, kills: 0, deaths: 0, ping: 0, isYou: true }];

    // Inject leaderboard panel
    const panel = document.createElement('div');
    panel.id = 'leaderboard-panel';
    panel.style.cssText = [
      'display:none', 'position:fixed', 'top:50%', 'left:50%',
      'transform:translate(-50%,-50%)', 'background:rgba(0,5,15,0.93)',
      'border:1px solid #00e5ff55', 'color:#fff', 'min-width:560px',
      'z-index:9999', 'padding:24px 28px', 'font-family:monospace',
      'box-shadow:0 0 40px rgba(0,229,255,0.12)', 'border-radius:4px',
      'pointer-events:none'
    ].join(';');
    panel.innerHTML = `
      <div style="text-align:center;font-size:14px;letter-spacing:5px;color:#00e5ff;margin-bottom:18px;font-weight:bold">
        ⊕ LEADERBOARD
      </div>
      <table id="lb-table" style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="color:#00e5ff88;font-size:11px;border-bottom:1px solid #00e5ff22;letter-spacing:2px;">
            <th style="padding:6px 8px;text-align:left">#</th>
            <th style="padding:6px 8px;text-align:left">PLAYER</th>
            <th style="padding:6px 8px;text-align:center">KILLS</th>
            <th style="padding:6px 8px;text-align:center">DEATHS</th>
            <th style="padding:6px 8px;text-align:center">K/D</th>
            <th style="padding:6px 8px;text-align:right">PING</th>
          </tr>
        </thead>
        <tbody id="lb-body"></tbody>
      </table>
      <div style="text-align:center;color:#333;font-size:11px;margin-top:14px;letter-spacing:2px">HOLD TAB TO VIEW</div>
    `;
    document.body.appendChild(panel);
    this._lbPanel = panel;

    // Tab key toggle
    window.addEventListener('keydown', e => {
      if (e.code === 'Tab') { e.preventDefault(); panel.style.display = 'block'; }
    });
    window.addEventListener('keyup', e => {
      if (e.code === 'Tab') panel.style.display = 'none';
    });

    this._renderLeaderboard();
  }

  updateLeaderboard(entries) {
    if (!entries?.length) return;
    this._lbData = entries;
    this._renderLeaderboard();
  }

  addKillToLeaderboard(kills, deaths) {
    if (!this._lbData) return;
    const me = this._lbData.find(e => e.isYou);
    if (me) { me.kills = kills; me.deaths = deaths; }
    this._renderLeaderboard();
  }

  _renderLeaderboard() {
    const body = document.getElementById('lb-body');
    if (!body || !this._lbData) return;
    const sorted = [...this._lbData].sort((a, b) => (b.kills ?? 0) - (a.kills ?? 0));
    body.innerHTML = sorted.map((e, i) => {
      const kd = e.deaths ? (e.kills / e.deaths).toFixed(1) : (e.kills ?? 0);
      const gold = i === 0 ? 'color:#ffcc00' : '';
      return `
        <tr style="border-bottom:1px solid #ffffff0a;${gold};font-size:13px;">
          <td style="padding:7px 8px;opacity:0.6">${i + 1}</td>
          <td style="padding:7px 8px;font-weight:bold">${e.isYou ? '<span style="color:#00e5ff">▶</span> ' : ''}${e.name ?? 'Unknown'}</td>
          <td style="padding:7px 8px;text-align:center;color:#44ff88">${e.kills ?? 0}</td>
          <td style="padding:7px 8px;text-align:center;color:#ff4455">${e.deaths ?? 0}</td>
          <td style="padding:7px 8px;text-align:center">${kd}</td>
          <td style="padding:7px 8px;text-align:right;color:#555">${e.ping != null ? e.ping + 'ms' : '--'}</td>
        </tr>`;
    }).join('');
  }
}

