import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  // GitHub Pages needs /warzone-tactical-fps/ as base
  // Capacitor/Electron/localhost need ./ as base
  const isGHPages = process.env.VITE_BASE_URL === '/warzone-tactical-fps/';
  const base = isGHPages ? '/warzone-tactical-fps/' : './';

  return {
    base,
    root: '.',
    publicDir: 'public',
    server: {
      port: 5173,
      host: true,
      open: false,
      watch: {
        ignored: ['**/release/**', '**/android/**', '**/.git/**']
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    }
  };
});
