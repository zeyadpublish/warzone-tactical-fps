# ⊕ WARZONE — Tactical FPS

> A browser-based 3D tactical FPS with AI enemies, multiplayer, and full mobile support.

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Android%20%7C%20Windows-blue)
![Stack](https://img.shields.io/badge/stack-Three.js%20%2B%20Socket.io%20%2B%20Capacitor%20%2B%20Electron-cyan)

---

## 🎮 Features

- **FPS gameplay** — WASD + mouse look, shooting, reloading
- **AI enemies** — State machine: IDLE → PATROL → CHASE → COMBAT → DEAD
- **City map** — Full 180m FBX city with building colliders
- **Multiplayer** — Socket.io real-time sync (Replit backend)
- **1v1 Friend rooms** — Private room codes
- **World leaderboard** — Global K/D rankings
- **Cross-platform** — Runs in browser, builds to Android APK & Windows EXE

---

## 🚀 Quick Start

```bash
npm install
npm run dev        # Start dev server → http://localhost:5173
```

## 🏗 Build

### Web
```bash
npm run build      # Output: dist/
```

### Windows EXE
```bash
npm run electron:build    # Output: release/WARZONE-Setup.exe
```

### Android APK
```bash
npm run cap:build:android     # Builds web + syncs to android/
# Then open Android Studio:
npm run cap:open:android
```

---

## 🌐 Backend (Replit)

- REST API: `https://frontline-game-host--zeyad0565615778.replit.app/api`
- Socket.io: `https://frontline-game-host--zeyad0565615778.replit.app`

### API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/auth/signup` | Create account |
| POST | `/api/auth/signin` | Sign in → JWT token |
| GET | `/api/auth/me` | Verify token |
| GET | `/api/health` | Server health |
| GET | `/api/leaderboard` | World leaderboard |

---

## 📁 Project Structure

```
src/
  api/          AuthAPI.js, OnlineClient.js
  characters/   CharacterController, WeaponManager, AnimationController
  ai/           EnemyAI.js — full state machine
  engine/       SceneManager, PhysicsManager, InputManager, AudioManager
  levels/       LevelManager.js — city.fbx loader + colliders
  ui/           HUD, AuthUI, MainMenuUI, TouchControls
server/
  server.js     Express + Socket.io backend
public/
  assets/models/
    soldier/    Swat.fbx + 30 Mixamo animations
    weapons/    gun.obj + PBR textures
    environment/ city.fbx
```

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Renderer | Three.js |
| Bundler | Vite |
| Multiplayer | Socket.io |
| Mobile | Capacitor |
| Desktop | Electron |
| CI/CD | Codemagic |
| Backend | Node.js + Express (Replit) |

---

## 📱 Codemagic

Connect this repo on [codemagic.io](https://codemagic.io) to automatically build:
- **APK** on every push to `main`
- **Windows EXE** on release tags

See [`codemagic.yaml`](./codemagic.yaml) for the full CI configuration.

---

© 2026 Zeyad — All rights reserved
