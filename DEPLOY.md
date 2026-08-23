# WARZONE Tactical FPS — Deployment Guide

## Step 1: Push to GitHub

1. Go to **github.com** → click **New repository**
2. Name it: `warzone-tactical-fps`
3. Set to **Public** or **Private**
4. **DO NOT** check "Add README" (you already have one)
5. Click **Create repository**
6. Copy the repo URL (e.g. `https://github.com/YourUsername/warzone-tactical-fps.git`)
7. Run in your terminal:
```bash
cd C:\Users\Zeyad\.gemini\antigravity\scratch\soldier-multiplayer-game
git remote add origin https://github.com/YOUR_USERNAME/warzone-tactical-fps.git
git push -u origin main
```

---

## Step 2: Build Windows EXE locally

```bash
npm run electron:build
```
Output: `release/WARZONE Tactical FPS Setup 1.0.0.exe` — a full Windows installer.
Also builds: `release/WARZONE Tactical FPS 1.0.0.exe` — a portable single-file EXE.

---

## Step 3: Build Android APK via Codemagic

1. Go to **codemagic.io** → Sign in with GitHub
2. Click **Add application** → select your `warzone-tactical-fps` repo
3. Codemagic will auto-detect the `codemagic.yaml` file
4. Under **android-release** workflow:
   - Add your keystore file in **Environment variables → Android signing**
   - Or leave unsigned for testing (uses debug key)
5. Click **Start new build**
6. Download the `.apk` from the Artifacts section when done

### For a signed release APK, add these Codemagic environment variables:
| Variable | Value |
|----------|-------|
| `CM_KEYSTORE` | Your keystore file (base64 encoded) |
| `CM_KEYSTORE_PASSWORD` | Keystore password |
| `CM_KEY_ALIAS` | Key alias |
| `CM_KEY_PASSWORD` | Key password |

---

## Step 4: Install APK on Android

```bash
# With USB debugging on:
adb install release/warzone.apk

# Or just transfer the APK file to your phone and open it
```

---

## Notes

- The web version always works at `http://localhost:5173` with `npm run dev`
- The EXE loads the built `dist/` folder — run `npm run build` first
- The APK wraps the web app in a WebView via Capacitor
- All multiplayer goes through your Replit server regardless of platform
