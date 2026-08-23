/* ═══════════════════════════════════════════════════════════════════
   AuthUI.js  –  Full Sign In / Sign Up / Guest screen
   Call: new AuthUI().show().then(session => ...)
   ═══════════════════════════════════════════════════════════════════ */
import { AuthAPI, REPLIT_API_BASE } from '../api/AuthAPI.js';

export class AuthUI {
  constructor() {
    this._resolve = null;
    this._root    = null;
    this._tab     = 'signin';  // 'signin' | 'signup'
  }

  /* Returns a Promise that resolves with the session object */
  show() {
    return new Promise(resolve => {
      this._resolve = resolve;
      this._build();
    });
  }

  _build() {
    const root = document.createElement('div');
    root.id = 'auth-screen';
    root.innerHTML = /* html */`
      <div class="auth-bg">
        <!-- Animated background grid -->
        <canvas id="auth-bg-canvas"></canvas>

        <div class="auth-card">
          <!-- Logo -->
          <div class="auth-logo">
            <div class="auth-logo-icon">⊕</div>
            <div class="auth-logo-text">WARZONE</div>
            <div class="auth-logo-sub">TACTICAL OPERATIONS</div>
          </div>

          <!-- Tabs -->
          <div class="auth-tabs">
            <button class="auth-tab active" id="tab-signin" data-tab="signin">SIGN IN</button>
            <button class="auth-tab"        id="tab-signup" data-tab="signup">SIGN UP</button>
          </div>

          <!-- Sign In Panel -->
          <form class="auth-form" id="form-signin">
            <div class="auth-field">
              <label>EMAIL</label>
              <input type="email" id="si-email" placeholder="operator@unit.mil" autocomplete="email" />
            </div>
            <div class="auth-field">
              <label>PASSWORD</label>
              <div class="auth-pw-wrap">
                <input type="password" id="si-pass" placeholder="••••••••" autocomplete="current-password" />
                <button type="button" class="auth-eye" id="si-eye">👁</button>
              </div>
            </div>
            <div class="auth-remember">
              <label><input type="checkbox" id="si-remember" checked /> Remember me</label>
              <a class="auth-link" href="#">Forgot password?</a>
            </div>
            <div class="auth-error hidden" id="si-error"></div>
            <button type="submit" class="auth-btn primary" id="si-submit">
              <span class="btn-text">DEPLOY</span>
              <span class="btn-spinner hidden">⟳</span>
            </button>
          </form>

          <!-- Sign Up Panel -->
          <form class="auth-form hidden" id="form-signup">
            <div class="auth-field">
              <label>USERNAME</label>
              <input type="text" id="su-name" placeholder="CallSign" maxlength="20" autocomplete="username" />
            </div>
            <div class="auth-field">
              <label>EMAIL</label>
              <input type="email" id="su-email" placeholder="operator@unit.mil" autocomplete="email" />
            </div>
            <div class="auth-field">
              <label>PASSWORD</label>
              <div class="auth-pw-wrap">
                <input type="password" id="su-pass" placeholder="Min. 8 characters" autocomplete="new-password" />
                <button type="button" class="auth-eye" id="su-eye">👁</button>
              </div>
            </div>
            <div class="auth-field">
              <label>CONFIRM PASSWORD</label>
              <input type="password" id="su-confirm" placeholder="••••••••" autocomplete="new-password" />
            </div>
            <div class="auth-error hidden" id="su-error"></div>
            <button type="submit" class="auth-btn primary" id="su-submit">
              <span class="btn-text">CREATE ACCOUNT</span>
              <span class="btn-spinner hidden">⟳</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="auth-divider"><span>OR</span></div>

          <!-- Guest / Offline -->
          <button class="auth-btn ghost" id="btn-guest">
            ▶ &nbsp;PLAY AS GUEST (OFFLINE)
          </button>

          <div class="auth-footer">
            <span class="auth-version">v1.0.0</span>
            <span class="auth-legal">© 2026 Warzone Tactical</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(root);
    this._root = root;
    this._applyStyles();
    this._wire();
    this._animateBg();

    // If already logged in, skip to callback
    const existing = AuthAPI.getSession();
    if (existing?.user) {
      setTimeout(() => this._done(existing), 100);
    }
  }

  _wire() {
    // Tabs
    this._root.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this._tab = tab.dataset.tab;
        this._root.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this._root.getElementById?.('form-signin');
        document.getElementById('form-signin').classList.toggle('hidden', this._tab !== 'signin');
        document.getElementById('form-signup').classList.toggle('hidden', this._tab !== 'signup');
      });
    });

    // Password toggles
    const togglePw = (inputId, btnId) => {
      document.getElementById(btnId)?.addEventListener('click', () => {
        const inp = document.getElementById(inputId);
        inp.type = inp.type === 'password' ? 'text' : 'password';
      });
    };
    togglePw('si-pass', 'si-eye');
    togglePw('su-pass', 'su-eye');

    // Sign In submit
    document.getElementById('form-signin')?.addEventListener('submit', async e => {
      e.preventDefault();
      const email    = document.getElementById('si-email').value.trim();
      const password = document.getElementById('si-pass').value;
      if (!email || !password) return this._setError('si-error', 'All fields required');
      this._setLoading('si-submit', true);
      try {
        const session = await AuthAPI.signIn({ email, password });
        this._done(session);
      } catch (err) {
        // 401 = account doesn't exist or wrong password
        const msg = err.message.includes('401') || err.message.toLowerCase().includes('invalid')
          ? '❌ Wrong email or password — or account doesn\'t exist yet. Use Sign Up!'
          : err.message;
        this._setError('si-error', msg);

        // If 401, highlight the Sign Up tab to guide the user
        if (err.message.includes('401') || err.message.toLowerCase().includes('invalid')) {
          setTimeout(() => {
            document.querySelector('[data-tab="signup"]')?.click();
          }, 1800);
        }
      } finally {
        this._setLoading('si-submit', false);
      }
    });

    // Sign Up submit
    document.getElementById('form-signup')?.addEventListener('submit', async e => {
      e.preventDefault();
      const username = document.getElementById('su-name').value.trim();
      const email    = document.getElementById('su-email').value.trim();
      const password = document.getElementById('su-pass').value;
      const confirm  = document.getElementById('su-confirm').value;
      if (!username || !email || !password) return this._setError('su-error', 'All fields required');
      if (password !== confirm) return this._setError('su-error', 'Passwords do not match');
      if (password.length < 8)  return this._setError('su-error', 'Password must be at least 8 characters');
      this._setLoading('su-submit', true);
      try {
        const session = await AuthAPI.signUp({ username, email, password });
        this._done(session);
      } catch (err) {
        this._setError('su-error', err.message);
      } finally {
        this._setLoading('su-submit', false);
      }
    });

    // Guest
    document.getElementById('btn-guest')?.addEventListener('click', () => {
      const name  = prompt('Enter your callsign:', 'Operator') || 'Operator';
      const session = AuthAPI.guestSession(name);
      this._done(session);
    });

    // API URL save
    document.getElementById('auth-api-save')?.addEventListener('click', () => {
      const val = document.getElementById('auth-api-url').value.trim();
      if (val) localStorage.setItem('authApiBase', val);
      else     localStorage.removeItem('authApiBase');
      const btn = document.getElementById('auth-api-save');
      btn.textContent = '✓ SAVED'; btn.style.color = '#00e5ff';
      setTimeout(() => { btn.textContent = 'SAVE'; btn.style.color = ''; }, 1500);
    });
  }

  _setError(id, msg) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
    el.classList.add('auth-error-anim');
    setTimeout(() => el.classList.remove('auth-error-anim'), 400);
  }

  _setLoading(btnId, on) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.querySelector('.btn-text')?.classList.toggle('hidden', on);
    btn.querySelector('.btn-spinner')?.classList.toggle('hidden', !on);
    btn.disabled = on;
  }

  _done(session) {
    // Fade out
    if (this._root) {
      this._root.style.transition = 'opacity .5s';
      this._root.style.opacity    = '0';
      setTimeout(() => { this._root?.remove(); this._root = null; }, 520);
    }
    this._resolve?.(session);
  }

  _animateBg() {
    const canvas = document.getElementById('auth-bg-canvas');
    if (!canvas) return;
    canvas.width  = innerWidth;
    canvas.height = innerHeight;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      if (!document.getElementById('auth-bg-canvas')) return;
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = 'rgba(0,229,255,0.04)';
      ctx.lineWidth   = 1;
      const gs = 55;
      for (let x = 0; x < canvas.width; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gs) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Scan line
      const scanY = ((t * 0.6) % canvas.height);
      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 4);
      grad.addColorStop(0, 'rgba(0,229,255,0)');
      grad.addColorStop(1, 'rgba(0,229,255,0.06)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 40, canvas.width, 44);

      // Particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,255,${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', () => { canvas.width = innerWidth; canvas.height = innerHeight; });
  }

  _applyStyles() {
    if (document.getElementById('auth-styles')) return;
    const style = document.createElement('style');
    style.id = 'auth-styles';
    style.textContent = /* css */`
      #auth-screen {
        position: fixed; inset: 0; z-index: 20000;
        font-family: 'Barlow Condensed', 'Segoe UI', sans-serif;
      }
      .auth-bg {
        position: absolute; inset: 0;
        background: radial-gradient(ellipse at 60% 40%, #0a1828 0%, #020810 70%);
        display: flex; align-items: center; justify-content: center;
      }
      #auth-bg-canvas {
        position: absolute; inset: 0; pointer-events: none;
      }

      /* ── Card ── */
      .auth-card {
        position: relative; z-index: 1;
        width: min(420px, 92vw);
        background: rgba(4, 14, 26, 0.92);
        border: 1px solid rgba(0, 229, 255, 0.18);
        border-top: 2px solid rgba(0, 229, 255, 0.5);
        padding: 36px 36px 28px;
        backdrop-filter: blur(20px);
        box-shadow: 0 0 80px rgba(0, 229, 255, 0.07),
                    0 30px 60px rgba(0,0,0,0.6);
        animation: card-in .5s cubic-bezier(.22,1,.36,1) both;
      }
      @keyframes card-in {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* ── Logo ── */
      .auth-logo { text-align: center; margin-bottom: 28px; }
      .auth-logo-icon {
        font-size: 2.8rem; color: #00e5ff;
        text-shadow: 0 0 30px rgba(0,229,255,.6);
        animation: pulse-logo 2.8s ease-in-out infinite;
      }
      @keyframes pulse-logo {
        0%,100% { text-shadow: 0 0 30px rgba(0,229,255,.5); }
        50%      { text-shadow: 0 0 60px rgba(0,229,255,.9); }
      }
      .auth-logo-text {
        font-size: 2.4rem; font-weight: 800; letter-spacing: .35em;
        color: #e8f4f8; line-height: 1; margin-top: 4px;
      }
      .auth-logo-sub {
        font-size: .7rem; letter-spacing: .3em; color: rgba(0,229,255,.55);
        margin-top: 4px;
      }

      /* ── Tabs ── */
      .auth-tabs {
        display: flex; border-bottom: 1px solid rgba(0,229,255,.15);
        margin-bottom: 24px; gap: 0;
      }
      .auth-tab {
        flex: 1; background: none; border: none;
        padding: 10px; cursor: pointer;
        font-family: inherit; font-size: .85rem; font-weight: 700;
        letter-spacing: .15em; color: rgba(255,255,255,.35);
        border-bottom: 2px solid transparent; margin-bottom: -1px;
        transition: color .2s, border-color .2s;
      }
      .auth-tab.active { color: #00e5ff; border-bottom-color: #00e5ff; }
      .auth-tab:hover:not(.active) { color: rgba(255,255,255,.65); }

      /* ── Form ── */
      .auth-form { display: flex; flex-direction: column; gap: 14px; }
      .auth-field { display: flex; flex-direction: column; gap: 5px; }
      .auth-field label {
        font-size: .68rem; letter-spacing: .2em; color: rgba(0,229,255,.6);
      }
      .auth-field input {
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.1);
        color: #e8f4f8;
        padding: 11px 14px;
        font-family: inherit; font-size: .95rem;
        outline: none; border-radius: 2px;
        transition: border-color .2s, background .2s;
      }
      .auth-field input:focus {
        border-color: rgba(0,229,255,.5);
        background: rgba(0,229,255,.04);
      }
      .auth-field input::placeholder { color: rgba(255,255,255,.25); }
      .auth-pw-wrap { position: relative; }
      .auth-pw-wrap input { width: 100%; padding-right: 44px; }
      .auth-eye {
        position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
        background: none; border: none; cursor: pointer; font-size: 1rem; opacity: .5;
      }
      .auth-eye:hover { opacity: 1; }

      /* Remember / forgot */
      .auth-remember {
        display: flex; justify-content: space-between; align-items: center;
        font-size: .78rem;
      }
      .auth-remember label { color: rgba(255,255,255,.5); cursor: pointer; display: flex; gap: 6px; align-items: center; }
      .auth-link { color: rgba(0,229,255,.7); text-decoration: none; font-size: .78rem; }
      .auth-link:hover { color: #00e5ff; }

      /* Error */
      .auth-error {
        background: rgba(255,51,85,.12); border: 1px solid rgba(255,51,85,.3);
        color: #ff6688; font-size: .82rem; padding: 8px 12px;
        border-radius: 2px; letter-spacing: .05em;
      }
      .auth-error-anim { animation: shake .35s ease; }
      @keyframes shake {
        0%,100% { transform: translateX(0); }
        25% { transform: translateX(-6px); } 75% { transform: translateX(6px); }
      }

      /* ── Buttons ── */
      .auth-btn {
        width: 100%; padding: 13px;
        font-family: inherit; font-size: 1rem; font-weight: 800;
        letter-spacing: .2em; cursor: pointer; border: none;
        border-radius: 2px; transition: all .2s; margin-top: 4px;
        display: flex; align-items: center; justify-content: center; gap: 8px;
      }
      .auth-btn.primary {
        background: linear-gradient(135deg, #00b4cc, #00e5ff);
        color: #000;
        box-shadow: 0 0 20px rgba(0,229,255,.25);
      }
      .auth-btn.primary:hover {
        box-shadow: 0 0 40px rgba(0,229,255,.5);
        transform: translateY(-1px);
      }
      .auth-btn.primary:disabled { opacity: .6; cursor: not-allowed; transform: none; }
      .auth-btn.ghost {
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.15);
        color: rgba(255,255,255,.75); font-size: .88rem;
      }
      .auth-btn.ghost:hover {
        border-color: rgba(0,229,255,.4);
        color: #00e5ff;
        background: rgba(0,229,255,.06);
      }
      .btn-spinner {
        display: inline-block; animation: spin .7s linear infinite; font-size: 1.2rem;
      }
      @keyframes spin { to { transform: rotate(360deg); } }

      /* ── Divider ── */
      .auth-divider {
        display: flex; align-items: center; gap: 12px;
        margin: 18px 0 14px; color: rgba(255,255,255,.2); font-size: .78rem;
      }
      .auth-divider::before, .auth-divider::after {
        content: ''; flex: 1; height: 1px; background: rgba(255,255,255,.1);
      }

      /* ── API row ── */
      .auth-api-row {
        display: flex; align-items: center; gap: 6px; margin-top: 14px;
      }
      .auth-api-label {
        font-size: .65rem; letter-spacing: .15em; color: rgba(255,255,255,.3);
        flex-shrink: 0;
      }
      .auth-api-input {
        flex: 1; background: rgba(255,255,255,.03);
        border: 1px solid rgba(255,255,255,.08);
        color: rgba(255,255,255,.5); font-family: monospace;
        font-size: .72rem; padding: 5px 8px; outline: none; border-radius: 2px;
      }
      .auth-api-input::placeholder { color: rgba(255,255,255,.18); }
      .auth-api-input:focus { border-color: rgba(0,229,255,.3); color: rgba(255,255,255,.8); }
      .auth-api-save {
        background: none; border: 1px solid rgba(0,229,255,.3); color: rgba(0,229,255,.7);
        font-family: inherit; font-size: .65rem; letter-spacing: .12em;
        padding: 4px 8px; cursor: pointer; border-radius: 2px; flex-shrink: 0;
        transition: all .2s;
      }
      .auth-api-save:hover { background: rgba(0,229,255,.08); }

      /* ── Footer ── */
      .auth-footer {
        display: flex; justify-content: space-between;
        margin-top: 16px; font-size: .65rem; color: rgba(255,255,255,.2);
      }

      .hidden { display: none !important; }
    `;
    document.head.appendChild(style);
  }
}
