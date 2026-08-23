export class MenuUI {
  constructor(onStartGame) {
    this.onStartGame = onStartGame;
    this.container = document.getElementById('menu-overlay');

    // Tabs
    this.tabs = {
      play: document.getElementById('tab-play'),
      rooms: document.getElementById('tab-rooms'),
      loadout: document.getElementById('tab-loadout'),
      settings: document.getElementById('tab-settings')
    };

    this.tabBtns = {
      play: document.getElementById('tab-play-btn'),
      rooms: document.getElementById('tab-rooms-btn'),
      loadout: document.getElementById('tab-loadout-btn'),
      settings: document.getElementById('tab-settings-btn')
    };

    // Inputs & Buttons
    this.playerNameInput = document.getElementById('player-name-input');
    this.btnQuickPlay = document.getElementById('btn-quick-play');
    this.modeButtons = document.querySelectorAll('.mode-btn');

    // Settings
    this.settingSens = document.getElementById('setting-sens');
    this.settingVolume = document.getElementById('setting-volume');
    this.settingGraphics = document.getElementById('setting-graphics');
    this.settingCamera = document.getElementById('setting-camera');

    this.selectedMode = 'multiplayer';
    this.selectedRoom = 'URBAN_WARFARE_01';

    this._loadSavedSettings();
    this._initEvents();
  }

  _loadSavedSettings() {
    const savedName = localStorage.getItem('tactical_callsign');
    if (savedName && this.playerNameInput) this.playerNameInput.value = savedName;

    const savedSens = localStorage.getItem('tactical_sens');
    if (savedSens && this.settingSens) this.settingSens.value = savedSens;

    const savedVol = localStorage.getItem('tactical_vol');
    if (savedVol && this.settingVolume) this.settingVolume.value = savedVol;

    const savedCam = localStorage.getItem('tactical_cam');
    if (savedCam && this.settingCamera) this.settingCamera.value = savedCam;
  }

  _initEvents() {
    // Tab switching
    Object.keys(this.tabBtns).forEach(tabKey => {
      const btn = this.tabBtns[tabKey];
      if (!btn) return;
      btn.addEventListener('click', () => {
        Object.values(this.tabBtns).forEach(b => b?.classList.remove('active'));
        Object.values(this.tabs).forEach(t => t?.classList.remove('active'));

        btn.classList.add('active');
        this.tabs[tabKey]?.classList.add('active');
      });
    });

    // Mode Selection
    this.modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedMode = btn.dataset.mode || 'multiplayer';
      });
    });

    // Quick Play / Deploy Button
    if (this.btnQuickPlay) {
      this.btnQuickPlay.addEventListener('click', () => {
        const playerName = this.playerNameInput ? this.playerNameInput.value.trim() || 'Soldier_77' : 'Soldier_77';
        localStorage.setItem('tactical_callsign', playerName);

        if (this.settingSens) localStorage.setItem('tactical_sens', this.settingSens.value);
        if (this.settingVolume) localStorage.setItem('tactical_vol', this.settingVolume.value);
        if (this.settingCamera) localStorage.setItem('tactical_cam', this.settingCamera.value);

        this.hide();

        if (this.onStartGame) {
          this.onStartGame({
            playerName: playerName,
            mode: this.selectedMode,
            roomName: this.selectedRoom,
            sensitivity: parseFloat(this.settingSens?.value || 1.2),
            volume: parseFloat(this.settingVolume?.value || 0.8),
            cameraMode: this.settingCamera?.value || 'tps',
            graphics: this.settingGraphics?.value || 'medium'
          });
        }
      });
    }
  }

  show() {
    if (this.container) this.container.style.display = 'flex';
  }

  hide() {
    if (this.container) this.container.style.display = 'none';
  }
}
