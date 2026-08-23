/* ═══════════════════════════════════════════════════════════════
   AuthAPI.js
   API Base: https://warzone-tactical-fps-server--my-api.replit.app/api
   WebSocket: wss://warzone-tactical-fps-server--my-api.replit.app
   ═══════════════════════════════════════════════════════════════ */

export const REPLIT_API_BASE = 'https://warzone-tactical-fps-server--my-api.replit.app/api';
export const REPLIT_WS_URL   = 'wss://warzone-tactical-fps-server--my-api.replit.app';

const BASE = () => localStorage.getItem('authApiBase') || REPLIT_API_BASE;

export const AuthAPI = {
  async signUp({ username, email, password }) {
    let res, data;
    try {
      res  = await fetch(`${BASE()}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      data = await _safeJson(res);
    } catch (e) {
      throw new Error('Cannot reach server — check your internet or API URL');
    }
    if (!res.ok) throw new Error(data?.message || `Server error (${res.status})`);
    _saveSession(data);
    return data;
  },

  async signIn({ email, password }) {
    let res, data;
    try {
      res  = await fetch(`${BASE()}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      data = await _safeJson(res);
    } catch (e) {
      throw new Error('Cannot reach server — check your internet or API URL');
    }
    if (!res.ok) throw new Error(data?.message || `Server error (${res.status})`);
    _saveSession(data);
    return data;
  },

  guestSession(username = 'Operator') {
    const session = {
      token: null,
      user:  { id: 'guest_' + Date.now(), username, email: null, isGuest: true },
      online: false,
    };
    _saveSession(session);
    return session;
  },

  getSession() {
    try { return JSON.parse(localStorage.getItem('warzone_session') || 'null'); }
    catch { return null; }
  },

  logout() { localStorage.removeItem('warzone_session'); },
  isLoggedIn() { return !!this.getSession()?.user; },

  getAuthHeader() {
    const token = this.getSession()?.token;
    return token ? { Authorization: `Bearer ${token}` } : {};
  },
};

function _saveSession(data) {
  localStorage.setItem('warzone_session', JSON.stringify({
    token:  data.token ?? null,
    user:   data.user  ?? data,
    online: !!data.token,
  }));
}

/* Try to parse JSON; if server returned HTML/plain-text, return a clean error object */
async function _safeJson(res) {
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return res.json();
  const text = await res.text();
  // Extract Express "Cannot POST /path" message if present
  const match = text.match(/Cannot \w+ [^\s<"]+/);
  if (match) throw new Error(`Route not found on server: ${match[0]}`);
  if (!res.ok)  throw new Error(`Server returned ${res.status} (non-JSON response)`);
  return {};
}
