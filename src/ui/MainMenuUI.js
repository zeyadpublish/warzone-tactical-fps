/* ═══════════════════════════════════════════════════════════════════
   MainMenuUI.js  –  Post-login main menu
   call: new MainMenuUI(session).show().then(choice => ...)
   choice: { mode: 'online'|'offline', level: 1|2|3 }
   ═══════════════════════════════════════════════════════════════════ */
import { AuthAPI } from '../api/AuthAPI.js';

export class MainMenuUI {
  constructor(session) {
    this.session  = session;
    this._resolve = null;
    this._root    = null;
  }

  show() {
    return new Promise(resolve => {
      this._resolve = resolve;
      this._build();
    });
  }

  _build() {
    const u = this.session?.user ?? {};
    const isGuest = u.isGuest ?? !this.session?.online;

    const root = document.createElement('div');
    root.id = 'main-menu';
    root.innerHTML = /* html */`
      <div class="mm-bg">
        <canvas id="mm-bg-canvas"></canvas>
        <div class="mm-content">

          <!-- Header -->
          <div class="mm-header">
            <div class="mm-header-left">
              <div class="mm-logo">
                <span class="mm-logo-glyph">⊕</span>
                <div>
                  <div class="mm-logo-title">WARZONE</div>
                  <div class="mm-logo-sub">TACTICAL OPERATIONS</div>
                </div>
              </div>
            </div>
            <div class="mm-header-right">
              <div class="mm-profile">
                <div class="mm-avatar">${(u.username?.[0] ?? 'G').toUpperCase()}</div>
                <div class="mm-profile-info">
                  <div class="mm-username">${u.username ?? 'Guest'}</div>
                  <div class="mm-status ${isGuest ? 'status-offline' : 'status-online'}">
                    ${isGuest ? '⬤ OFFLINE' : '⬤ ONLINE'}
                  </div>
                </div>
                <button class="mm-logout-btn" id="mm-logout">LOGOUT</button>
              </div>
            </div>
          </div>

          <!-- Main buttons -->
          <div class="mm-center">
            <div class="mm-tagline">SELECT OPERATION</div>

            <div class="mm-modes">
              <!-- Online -->
              <button class="mm-mode-card ${isGuest ? 'mode-locked' : ''}" id="mm-online" ${isGuest ? 'data-locked="true"' : ''}>
                <div class="mode-icon">🌐</div>
                <div class="mode-title">PLAY ONLINE</div>
                <div class="mode-desc">Multiplayer · Global matchmaking · Ranked</div>
                ${isGuest ? '<div class="mode-lock-badge">LOGIN REQUIRED</div>' : ''}
              </button>

              <!-- Offline / vs bots -->
              <button class="mm-mode-card" id="mm-offline">
                <div class="mode-icon">🤖</div>
                <div class="mode-title">PLAY OFFLINE</div>
                <div class="mode-desc">Solo · AI enemies · All 3 levels</div>
              </button>
              <!-- 1v1 Private Room -->
              <button class="mm-mode-card ${isGuest ? 'mode-locked' : ''}" id="mm-1v1" ${isGuest ? 'data-locked="true"' : ''}>
                <div class="mode-icon">⚔</div>
                <div class="mode-title">1v1 FRIEND</div>
                <div class="mode-desc">Private room · Share code · Invite only</div>
                ${isGuest ? '<div class="mode-lock-badge">LOGIN REQUIRED</div>' : ''}
              </button>
            </div>

            <!-- Level selector (shown after offline click) -->
            <div class="mm-level-select hidden" id="mm-level-panel">
              <div class="mm-level-title">SELECT LEVEL</div>
              <div class="mm-levels">
                <button class="mm-level-btn active" data-level="1">
                  <div class="level-num">01</div>
                  <div class="level-name">CITY DISTRICT</div>
                  <div class="level-diff">● NORMAL</div>
                </button>
                <button class="mm-level-btn" data-level="2">
                  <div class="level-num">02</div>
                  <div class="level-name">INDUSTRIAL ZONE</div>
                  <div class="level-diff">●● HARD</div>
                </button>
                <button class="mm-level-btn" data-level="3">
                  <div class="level-num">03</div>
                  <div class="level-name">NIGHT RAID</div>
                  <div class="level-diff">●●● ELITE</div>
                </button>
              </div>
              <button class="mm-deploy-btn" id="mm-deploy">
                ▶ &nbsp;DEPLOY NOW
              </button>
            </div>

            <!-- 1v1 Private Room panel -->
            <div class="mm-level-select hidden" id="mm-room-panel">
              <div class="mm-level-title">⚔ PRIVATE 1v1 ROOM</div>
              <div style="display:flex;gap:14px;margin:18px 0;">
                <button class="mm-deploy-btn" id="mm-create-room" style="flex:1;font-size:13px;">
                  ＋ CREATE ROOM
                </button>
                <div style="display:flex;flex-direction:column;gap:8px;flex:1;">
                  <input id="mm-room-code-input" maxlength="6" placeholder="ENTER CODE"
                    style="background:#0a1628;border:1px solid #00e5ff44;color:#00e5ff;
                    padding:10px 14px;font-family:monospace;font-size:20px;letter-spacing:6px;
                    text-align:center;text-transform:uppercase;outline:none;width:100%;box-sizing:border-box;"/>
                  <button class="mm-deploy-btn" id="mm-join-room" style="font-size:13px;">→ JOIN ROOM</button>
                </div>
              </div>
              <div id="mm-room-status" style="text-align:center;color:#00e5ff;min-height:44px;font-family:monospace;font-size:13px;"></div>
              <button class="mm-deploy-btn" id="mm-room-back" style="margin-top:10px;background:transparent;border-color:#ffffff22;color:#888;font-size:12px;">
                ← BACK
              </button>
            </div>


          </div>

          <!-- Bottom nav -->
          <div class="mm-bottom-nav">
            <button class="mm-nav-btn" id="mm-settings">⚙ SETTINGS</button>
            <button class="mm-nav-btn" id="mm-world-lb">🏆 LEADERBOARD</button>
            <button class="mm-nav-btn" id="mm-credits">📋 CREDITS</button>
            <div class="mm-build">BUILD 1.0.0</div>
          </div>

          <!-- Settings panel -->
          <div class="mm-panel hidden" id="panel-settings">
            <div class="mm-panel-title">SETTINGS</div>
            <div class="mm-setting-row">
              <label>Mouse Sensitivity</label>
              <input type="range" id="set-sens" min="0.5" max="5" step="0.1" value="1" />
              <span id="set-sens-val">1.0×</span>
            </div>
            <div class="mm-setting-row">
              <label>Master Volume</label>
              <input type="range" id="set-vol" min="0" max="1" step="0.05" value="0.7" />
              <span id="set-vol-val">70%</span>
            </div>
            <div class="mm-setting-row">
              <label>FOV</label>
              <input type="range" id="set-fov" min="60" max="110" step="1" value="70" />
              <span id="set-fov-val">70°</span>
            </div>
            <button class="mm-close-panel" id="close-settings">CLOSE</button>
          </div>

          <!-- ── WORLD LEADERBOARD PANEL ── -->
          <div class="mm-panel hidden" id="panel-world-lb" style="min-width:600px;max-width:700px;">
            <div class="mm-panel-title" style="color:#ffcc00;letter-spacing:4px;">🏆 WORLD LEADERBOARD</div>
            <div id="wlb-status" style="text-align:center;color:#555;font-size:12px;margin-bottom:12px;font-family:monospace;">Loading...</div>
            <table style="width:100%;border-collapse:collapse;font-family:monospace;font-size:13px;">
              <thead>
                <tr style="color:#00e5ff88;font-size:11px;border-bottom:1px solid #00e5ff22;letter-spacing:2px;">
                  <th style="padding:7px 10px;text-align:left">#</th>
                  <th style="padding:7px 10px;text-align:left">PLAYER</th>
                  <th style="padding:7px 10px;text-align:center">KILLS</th>
                  <th style="padding:7px 10px;text-align:center">DEATHS</th>
                  <th style="padding:7px 10px;text-align:center">K/D</th>
                  <th style="padding:7px 10px;text-align:right">LEVEL</th>
                </tr>
              </thead>
              <tbody id="wlb-body"></tbody>
            </table>
            <div style="display:flex;gap:12px;margin-top:16px;">
              <button class="mm-deploy-btn" id="wlb-refresh" style="flex:1;font-size:12px;">↻ REFRESH</button>
              <button class="mm-close-panel" id="close-world-lb" style="flex:1;">CLOSE</button>
            </div>
          </div>

          <!-- ── CREDITS PANEL ── -->
          <div class="mm-panel hidden" id="panel-credits" style="max-width:480px;">
            <div class="mm-panel-title" style="letter-spacing:4px;">📋 CREDITS</div>
            <div style="font-family:monospace;font-size:12px;line-height:2;color:#aaa;">
              <div style="color:#00e5ff;letter-spacing:2px;margin-bottom:8px;">WARZONE — TACTICAL OPERATIONS</div>
              <div>🎮 <b style="color:#fff">Game Engine</b> — Three.js + Vite</div>
              <div>🤖 <b style="color:#fff">AI System</b> — Custom State Machine</div>
              <div>🧍 <b style="color:#fff">Soldier Model</b> — Swat.fbx (Mixamo)</div>
              <div>🔫 <b style="color:#fff">Weapon Model</b> — gun.obj (Custom)</div>
              <div>🏙️ <b style="color:#fff">City Map</b> — city.fbx (Uploaded)</div>
              <div>🌐 <b style="color:#fff">Backend</b> — Node.js + Socket.io (Replit)</div>
              <div>🔐 <b style="color:#fff">Auth</b> — JWT + Crypto (Replit API)</div>
              <div style="margin-top:16px;color:#555;font-size:11px;">
                Built with ❤ — All rights reserved © 2026
              </div>
              <div style="margin-top:6px;color:#333;font-size:10px;letter-spacing:1px;">
                frontline-game-host.replit.app
              </div>
            </div>
            <button class="mm-close-panel" id="close-credits" style="margin-top:20px;">CLOSE</button>
          </div>

        </div>
      </div>
    `;


    document.body.appendChild(root);
    this._root = root;
    this._applyStyles();
    this._wire();
    this._animateBg();
  }

  _wire() {
    let selectedLevel = 1;
    let selectedMode  = 'offline';

    // Online button
    document.getElementById('mm-online')?.addEventListener('click', e => {
      if (e.currentTarget.dataset.locked) {
        this._flash('Login required to play online');
        return;
      }
      selectedMode = 'online';
      this._done({ mode: 'online', level: 1 });
    });

    // Offline → show level selector
    document.getElementById('mm-offline')?.addEventListener('click', () => {
      selectedMode = 'offline';
      document.getElementById('mm-level-panel')?.classList.remove('hidden');
      document.getElementById('mm-offline')?.classList.add('mode-selected');
    });

    // Level selection
    this._root.querySelectorAll('.mm-level-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this._root.querySelectorAll('.mm-level-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedLevel = parseInt(btn.dataset.level);
      });
    });

    // Deploy
    document.getElementById('mm-deploy')?.addEventListener('click', () => {
      this._done({ mode: selectedMode, level: selectedLevel });
    });

    // ── 1v1 FRIEND ROOM ──
    const showPanel  = (id) => { ['mm-level-panel','mm-room-panel'].forEach(p => document.getElementById(p)?.classList.add('hidden')); document.getElementById(id)?.classList.remove('hidden'); };

    document.getElementById('mm-1v1')?.addEventListener('click', e => {
      if (e.currentTarget.dataset.locked) { this._flash('Login required for 1v1'); return; }
      showPanel('mm-room-panel');
    });

    let _lobbySocket = null; // pre-game socket used in waiting room

    const _cleanupLobby = () => {
      if (_lobbySocket) { try { _lobbySocket.disconnect(); } catch(e){} _lobbySocket = null; }
    };

    document.getElementById('mm-room-back')?.addEventListener('click', () => {
      _cleanupLobby();
      document.getElementById('mm-room-panel')?.classList.add('hidden');
    });

    document.getElementById('mm-create-room')?.addEventListener('click', () => {
      const code   = Math.random().toString(36).substring(2, 8).toUpperCase();
      const status = document.getElementById('mm-room-status');
      if (!status) return;

      // Show waiting UI — Start button DISABLED until friend joins
      status.innerHTML = `
        <div style="font-size:11px;letter-spacing:2px;color:#888;margin-bottom:6px">YOUR ROOM CODE — SHARE WITH FRIEND</div>
        <div style="font-size:40px;letter-spacing:12px;color:#00e5ff;font-weight:bold;margin-bottom:10px;text-shadow:0 0 20px #00e5ff88">${code}</div>
        <div id="mm-wait-status" style="color:#555;font-size:13px;letter-spacing:2px;margin-bottom:16px">
          ⏳ Waiting for friend to join...
        </div>
        <button class="mm-deploy-btn" id="mm-start-1v1"
          style="font-size:14px;opacity:0.35;pointer-events:none;cursor:not-allowed;filter:grayscale(1)">
          ▶ WAITING FOR FRIEND...
        </button>
        <button id="mm-cancel-lobby" style="display:block;margin:10px auto 0;background:transparent;border:none;color:#555;font-size:12px;cursor:pointer;letter-spacing:2px;font-family:'Barlow Condensed',sans-serif">
          ✕ CANCEL
        </button>`;

      document.getElementById('mm-cancel-lobby')?.addEventListener('click', () => {
        _cleanupLobby();
        status.innerHTML = '<div style="color:#ff4455">Room cancelled.</div>';
      });

      // Connect a lightweight lobby socket to listen for the friend joining
      _cleanupLobby();
      import('https://cdn.socket.io/4.7.2/socket.io.esm.min.js').then(({ io }) => {
        const session = this._session;
        const myName  = session?.user?.username || 'Host';
        _lobbySocket  = io('https://warzone-tactical-fps-server--my-api.replit.app', {
          transports: ['websocket', 'polling'],
          auth:  { token: session?.token },
          query: { token: session?.token, name: myName },
        });

        _lobbySocket.on('connect', () => {
          _lobbySocket.emit('join_room', { roomName: code, playerName: myName });
        });

        const onFriendJoined = (p) => {
          const friendName = p.username ?? p.name ?? 'Friend';
          const waitEl = document.getElementById('mm-wait-status');
          if (waitEl) {
            waitEl.innerHTML = `<span style="color:#00ff88;font-size:15px;letter-spacing:2px">✅ ${friendName} joined!</span>`;
          }
          // Enable the Start button
          const startBtn = document.getElementById('mm-start-1v1');
          if (startBtn) {
            startBtn.textContent         = `▶ START GAME WITH ${friendName.toUpperCase()}`;
            startBtn.style.opacity       = '1';
            startBtn.style.pointerEvents = 'auto';
            startBtn.style.cursor        = 'pointer';
            startBtn.style.filter        = 'none';
            startBtn.addEventListener('click', () => {
              _cleanupLobby();
              this._done({ mode: 'online', level: 1, roomCode: code });
            }, { once: true });
          }
        };
        _lobbySocket.on('player_joined', onFriendJoined);
        _lobbySocket.on('player:joined', onFriendJoined);

        _lobbySocket.on('connect_error', () => {
          const waitEl = document.getElementById('mm-wait-status');
          if (waitEl) waitEl.innerHTML = '<span style="color:#ff4455">⚠ Cannot reach server — check connection</span>';
        });
      }).catch(() => {
        // Fallback: no pre-game socket, just show the code and let them start manually
        const startBtn = document.getElementById('mm-start-1v1');
        if (startBtn) {
          startBtn.textContent         = '▶ START GAME NOW';
          startBtn.style.opacity       = '1';
          startBtn.style.pointerEvents = 'auto';
          startBtn.style.filter        = 'none';
          startBtn.style.cursor        = 'pointer';
          startBtn.addEventListener('click', () => {
            _cleanupLobby();
            this._done({ mode: 'online', level: 1, roomCode: code });
          }, { once: true });
        }
      });
    });

    document.getElementById('mm-join-room')?.addEventListener('click', () => {
      const raw  = (document.getElementById('mm-room-code-input')?.value ?? '').trim().toUpperCase();
      const code = raw.replace(/[^A-Z0-9]/g, '');
      if (code.length < 4) { this._flash('Enter a valid room code'); return; }
      document.getElementById('mm-room-status').innerHTML =
        `<div style="color:#44ff88;font-size:15px">✓ Joining room <b>${code}</b>…</div>`;
      setTimeout(() => this._done({ mode: 'online', level: 1, roomCode: code }), 600);
    });



    // Logout
    document.getElementById('mm-logout')?.addEventListener('click', () => {
      AuthAPI.logout();
      // Re-show auth
      this._root.remove();
      import('./AuthUI.js').then(({ AuthUI }) => {
        new AuthUI().show().then(session => {
          new MainMenuUI(session).show().then(choice => this._resolve?.(choice));
        });
      });
    });

    // Settings
    document.getElementById('mm-settings')?.addEventListener('click', () => {
      this._togglePanel('panel-settings');
    });
    document.getElementById('close-settings')?.addEventListener('click', () => {
      document.getElementById('panel-settings')?.classList.add('hidden');
    });

    // ── CREDITS ──
    document.getElementById('mm-credits')?.addEventListener('click', () => {
      this._togglePanel('panel-credits');
    });
    document.getElementById('close-credits')?.addEventListener('click', () => {
      document.getElementById('panel-credits')?.classList.add('hidden');
    });

    // ── WORLD LEADERBOARD ──
    const fetchLeaderboard = async () => {
      const status = document.getElementById('wlb-status');
      const body   = document.getElementById('wlb-body');
      if (!body) return;
      if (status) status.textContent = '⟳ Fetching data from server...';

      try {
        const base = 'https://frontline-game-host--zeyad0565615778.replit.app/api';
        // Try /leaderboard first, fall back to /scores
        let data = null;
        for (const path of ['/leaderboard', '/scores', '/stats/leaderboard']) {
          try {
            const r = await fetch(base + path);
            if (r.ok) { data = await r.json(); break; }
          } catch {}
        }

        if (!data || !Array.isArray(data) || data.length === 0) {
          // Server doesn't have a leaderboard endpoint yet — show placeholder
          if (status) status.innerHTML = `<span style="color:#ff6644">⚠ Server leaderboard not set up yet.</span><br>
            <span style="color:#555;font-size:11px">Add GET /api/leaderboard to your Replit server to show real data.</span>`;
          // Show a fake demo board so the UI isn't empty
          data = [
            { username: this.session?.user?.username ?? 'You', kills: 0, deaths: 0, level: 1 },
          ];
        } else {
          if (status) status.textContent = `Top ${Math.min(data.length, 20)} players worldwide`;
        }

        const top20 = data.slice(0, 20);
        const myName = this.session?.user?.username ?? '';
        body.innerHTML = top20.map((p, i) => {
          const kd    = p.deaths ? (p.kills / p.deaths).toFixed(2) : (p.kills ?? 0);
          const isMe  = p.username === myName || p.name === myName;
          const gold  = i === 0 ? 'color:#ffcc00;' : '';
          const meRow = isMe ? 'background:rgba(0,229,255,0.07);' : '';
          return `<tr style="border-bottom:1px solid #ffffff08;${gold}${meRow}">
            <td style="padding:7px 10px;opacity:0.55">${i + 1}</td>
            <td style="padding:7px 10px;font-weight:bold">${isMe ? '<span style="color:#00e5ff">▶</span> ' : ''}${p.username ?? p.name ?? 'Unknown'}</td>
            <td style="padding:7px 10px;text-align:center;color:#44ff88">${p.kills ?? 0}</td>
            <td style="padding:7px 10px;text-align:center;color:#ff4455">${p.deaths ?? 0}</td>
            <td style="padding:7px 10px;text-align:center">${kd}</td>
            <td style="padding:7px 10px;text-align:right;color:#555">${p.level ?? 1}</td>
          </tr>`;
        }).join('');
      } catch (err) {
        if (status) status.innerHTML = `<span style="color:#ff4444">⚠ Failed to load: ${err.message}</span>`;
      }
    };

    document.getElementById('mm-world-lb')?.addEventListener('click', () => {
      this._togglePanel('panel-world-lb');
      fetchLeaderboard();
    });
    document.getElementById('close-world-lb')?.addEventListener('click', () => {
      document.getElementById('panel-world-lb')?.classList.add('hidden');
    });
    document.getElementById('wlb-refresh')?.addEventListener('click', fetchLeaderboard);



    // Settings sliders
    const sliders = [
      ['set-sens', 'set-sens-val', v => v + '×', v => localStorage.setItem('sens', v)],
      ['set-vol',  'set-vol-val',  v => Math.round(v*100) + '%', v => localStorage.setItem('vol', v)],
      ['set-fov',  'set-fov-val',  v => v + '°', v => localStorage.setItem('fov', v)],
    ];
    sliders.forEach(([id, valId, fmt, save]) => {
      const inp = document.getElementById(id);
      const val = document.getElementById(valId);
      if (!inp || !val) return;
      // restore saved
      const saved = localStorage.getItem(id.replace('set-', ''));
      if (saved) inp.value = saved;
      val.textContent = fmt(inp.value);
      inp.addEventListener('input', () => { val.textContent = fmt(inp.value); save(inp.value); });
    });
  }

  /* ── Toggle a panel, closing others first ── */
  _togglePanel(id) {
    const all = ['panel-settings', 'panel-world-lb', 'panel-credits'];
    const isOpen = !document.getElementById(id)?.classList.contains('hidden');
    all.forEach(p => document.getElementById(p)?.classList.add('hidden'));
    if (!isOpen) document.getElementById(id)?.classList.remove('hidden');
  }

  _flash(msg) {
    let el = document.getElementById('mm-flash');
    if (!el) {
      el = document.createElement('div');
      el.id = 'mm-flash';
      el.style.cssText = `
        position:fixed;top:24px;left:50%;transform:translateX(-50%);
        background:rgba(255,51,85,.9);color:#fff;padding:10px 24px;
        font-family:'Barlow Condensed',sans-serif;letter-spacing:.1em;font-size:.9rem;
        border-radius:2px;z-index:30000;pointer-events:none;
        animation:flash-in .3s ease;
      `;
      document.body.appendChild(el);
    }
    el.textContent = msg;
    clearTimeout(this._flashTimer);
    this._flashTimer = setTimeout(() => el.remove(), 2500);
  }

  _done(choice) {
    // Save settings to be picked up by game
    if (this._root) {
      this._root.style.transition = 'opacity .5s';
      this._root.style.opacity    = '0';
      setTimeout(() => { this._root?.remove(); this._root = null; }, 520);
    }
    this._resolve?.(choice);
  }

  _animateBg() {
    const canvas = document.getElementById('mm-bg-canvas');
    if (!canvas) return;
    canvas.width = innerWidth; canvas.height = innerHeight;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const draw = () => {
      if (!document.getElementById('mm-bg-canvas')) return;
      t += 0.3;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Hex grid effect
      ctx.strokeStyle = 'rgba(0,229,255,0.035)';
      ctx.lineWidth = 1;
      const s = 38, h = s * Math.sqrt(3) / 2;
      for (let row = -1; row < canvas.height / h + 1; row++) {
        for (let col = -1; col < canvas.width / (s * 1.5) + 1; col++) {
          const cx = col * s * 1.5;
          const cy = row * h * 2 + (col % 2 ? h : 0);
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i;
            const x = cx + s * Math.cos(a), y = cy + s * Math.sin(a);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.closePath(); ctx.stroke();
        }
      }

      // Sweeping glow beam
      const bx = (Math.sin(t * 0.008) * 0.5 + 0.5) * canvas.width;
      const grd = ctx.createRadialGradient(bx, canvas.height * 0.5, 0, bx, canvas.height * 0.5, canvas.height * 0.6);
      grd.addColorStop(0, 'rgba(0,229,255,0.04)');
      grd.addColorStop(1, 'rgba(0,229,255,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', () => { canvas.width = innerWidth; canvas.height = innerHeight; });
  }

  _applyStyles() {
    if (document.getElementById('mm-styles')) return;
    const s = document.createElement('style');
    s.id = 'mm-styles';
    s.textContent = /* css */`
      #main-menu {
        position: fixed; inset: 0; z-index: 19000;
        font-family: 'Barlow Condensed', 'Segoe UI', sans-serif;
        animation: mm-in .5s cubic-bezier(.22,1,.36,1) both;
      }
      @keyframes mm-in { from { opacity:0; } to { opacity:1; } }

      .mm-bg {
        position: absolute; inset: 0;
        background: radial-gradient(ellipse at 30% 60%, #0a1a2e 0%, #020810 65%);
        display: flex; align-items: stretch; justify-content: stretch;
      }
      #mm-bg-canvas { position: absolute; inset: 0; pointer-events: none; }

      .mm-content {
        position: relative; z-index: 1;
        width: 100%; display: flex; flex-direction: column;
        padding: 0 clamp(20px, 5vw, 60px);
      }

      /* ── Header ── */
      .mm-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 22px 0; border-bottom: 1px solid rgba(0,229,255,.12);
      }
      .mm-header-left { display: flex; align-items: center; }
      .mm-logo { display: flex; align-items: center; gap: 14px; }
      .mm-logo-glyph { font-size: 2.2rem; color: #00e5ff; text-shadow: 0 0 20px rgba(0,229,255,.6); }
      .mm-logo-title { font-size: 1.8rem; font-weight: 800; letter-spacing: .3em; color: #e8f4f8; line-height: 1; }
      .mm-logo-sub { font-size: .6rem; letter-spacing: .3em; color: rgba(0,229,255,.5); }

      /* Profile */
      .mm-profile { display: flex; align-items: center; gap: 12px; }
      .mm-avatar {
        width: 40px; height: 40px; border-radius: 50%;
        background: linear-gradient(135deg, #00b4cc, #005a80);
        display: flex; align-items: center; justify-content: center;
        font-size: 1.1rem; font-weight: 800; color: #fff;
        border: 2px solid rgba(0,229,255,.4);
      }
      .mm-username { font-size: 1rem; font-weight: 700; color: #e8f4f8; }
      .mm-status { font-size: .65rem; letter-spacing: .15em; }
      .status-online { color: #00ff88; }
      .status-offline { color: #6b8090; }
      .mm-logout-btn {
        background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12);
        color: rgba(255,255,255,.5); font-family: inherit; font-size: .7rem;
        letter-spacing: .15em; padding: 5px 10px; cursor: pointer; border-radius: 2px;
        transition: all .2s;
      }
      .mm-logout-btn:hover { color: #ff3355; border-color: rgba(255,51,85,.4); }

      /* ── Center ── */
      .mm-center { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; }
      .mm-tagline { font-size: .75rem; letter-spacing: .45em; color: rgba(0,229,255,.5); }

      /* Mode cards */
      .mm-modes { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
      .mm-mode-card {
        width: min(300px, 42vw); padding: 28px 24px;
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.1);
        cursor: pointer; text-align: left; position: relative; overflow: hidden;
        transition: all .25s; border-radius: 4px;
        font-family: inherit;
      }
      .mm-mode-card::before {
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(135deg, rgba(0,229,255,0) 50%, rgba(0,229,255,.04));
        opacity: 0; transition: opacity .25s;
      }
      .mm-mode-card:hover { border-color: rgba(0,229,255,.4); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,229,255,.1); }
      .mm-mode-card:hover::before { opacity: 1; }
      .mm-mode-card.mode-selected { border-color: #00e5ff; box-shadow: 0 0 30px rgba(0,229,255,.15); }
      .mm-mode-card.mode-locked { opacity: .55; cursor: not-allowed; }
      .mm-mode-card.mode-locked:hover { transform: none; border-color: rgba(255,255,255,.1); box-shadow: none; }
      .mode-icon { font-size: 2rem; margin-bottom: 12px; }
      .mode-title { font-size: 1.3rem; font-weight: 800; letter-spacing: .15em; color: #e8f4f8; margin-bottom: 6px; }
      .mode-desc { font-size: .78rem; color: rgba(255,255,255,.4); letter-spacing: .04em; }
      .mode-lock-badge {
        position: absolute; top: 10px; right: 10px;
        background: rgba(255,183,3,.15); border: 1px solid rgba(255,183,3,.3);
        color: #ffb703; font-size: .6rem; letter-spacing: .15em;
        padding: 3px 7px; border-radius: 2px;
      }

      /* Level selector */
      .mm-level-select { text-align: center; animation: slide-up .3s ease; }
      @keyframes slide-up { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
      .mm-level-title { font-size: .72rem; letter-spacing: .3em; color: rgba(0,229,255,.55); margin-bottom: 14px; }
      .mm-levels { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
      .mm-level-btn {
        width: 140px; padding: 16px 12px; background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.1); cursor: pointer;
        font-family: inherit; text-align: center; transition: all .2s; border-radius: 3px;
      }
      .mm-level-btn.active { border-color: #00e5ff; background: rgba(0,229,255,.08); }
      .mm-level-btn:hover:not(.active) { border-color: rgba(0,229,255,.3); }
      .level-num { font-size: 2rem; font-weight: 800; color: rgba(255,255,255,.15); line-height: 1; }
      .mm-level-btn.active .level-num { color: #00e5ff; }
      .level-name { font-size: .78rem; font-weight: 700; color: #e8f4f8; letter-spacing: .06em; margin: 5px 0 4px; }
      .level-diff { font-size: .65rem; color: rgba(255,183,3,.7); letter-spacing: .1em; }

      .mm-deploy-btn {
        padding: 14px 48px; background: linear-gradient(135deg, #00b4cc, #00e5ff);
        border: none; color: #000; font-family: inherit; font-size: 1.1rem; font-weight: 800;
        letter-spacing: .25em; cursor: pointer; border-radius: 3px;
        box-shadow: 0 0 30px rgba(0,229,255,.3); transition: all .2s;
      }
      .mm-deploy-btn:hover { box-shadow: 0 0 50px rgba(0,229,255,.55); transform: translateY(-2px); }

      /* ── Bottom nav ── */
      .mm-bottom-nav {
        display: flex; align-items: center; gap: 8px;
        padding: 16px 0; border-top: 1px solid rgba(0,229,255,.1);
      }
      .mm-nav-btn {
        background: none; border: 1px solid rgba(255,255,255,.1);
        color: rgba(255,255,255,.5); font-family: inherit; font-size: .78rem;
        letter-spacing: .1em; padding: 7px 14px; cursor: pointer; border-radius: 2px;
        transition: all .2s;
      }
      .mm-nav-btn:hover { color: #00e5ff; border-color: rgba(0,229,255,.3); }
      .mm-build { margin-left: auto; font-size: .65rem; color: rgba(255,255,255,.2); letter-spacing: .1em; }

      /* Settings panel */
      .mm-panel {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
        width: min(420px, 90vw); background: rgba(4,14,26,.97);
        border: 1px solid rgba(0,229,255,.2); border-top: 2px solid #00e5ff;
        padding: 28px; z-index: 100; border-radius: 4px;
        box-shadow: 0 20px 60px rgba(0,0,0,.8);
        animation: panel-in .25s ease;
      }
      @keyframes panel-in { from { opacity:0; transform:translate(-50%,-48%); } to { opacity:1; transform:translate(-50%,-50%); } }
      .mm-panel-title { font-size: 1.1rem; font-weight: 800; letter-spacing: .2em; color: #00e5ff; margin-bottom: 20px; }
      .mm-setting-row {
        display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
      }
      .mm-setting-row label { flex: 1; font-size: .8rem; color: rgba(255,255,255,.6); }
      .mm-setting-row input[type=range] {
        flex: 1.5; accent-color: #00e5ff;
      }
      .mm-setting-row span { font-size: .8rem; color: #00e5ff; min-width: 36px; text-align: right; }
      .mm-close-panel {
        margin-top: 8px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
        color: rgba(255,255,255,.6); font-family: inherit; font-size: .8rem; letter-spacing: .15em;
        padding: 8px 18px; cursor: pointer; border-radius: 2px; transition: all .2s; width: 100%;
      }
      .mm-close-panel:hover { color: #00e5ff; border-color: rgba(0,229,255,.35); }

      @keyframes flash-in { from { opacity:0; transform:translateX(-50%) translateY(-8px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
      .hidden { display: none !important; }
    `;
    document.head.appendChild(s);
  }
}
