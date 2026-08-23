export class AudioManager {
  constructor() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      this.ctx = null;
    }
    this._gainMaster = this.ctx?.createGain() ?? null;
    if (this._gainMaster) {
      this._gainMaster.gain.value = 0.7;
      this._gainMaster.connect(this.ctx.destination);
    }
  }

  _tone(type, freq, dur, gain = 0.5, detune = 0) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const g   = this.ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = detune;
      g.gain.setValueAtTime(gain, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
      osc.connect(g);
      g.connect(this._gainMaster ?? this.ctx.destination);
      osc.start(); osc.stop(this.ctx.currentTime + dur);
    } catch (_) {}
  }

  _noise(dur, gain = 0.5, filterFreq = 1200) {
    if (!this.ctx) return;
    try {
      const sr   = this.ctx.sampleRate;
      const buf  = this.ctx.createBuffer(1, sr * dur, sr);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      const src = this.ctx.createBufferSource();
      src.buffer = buf;

      const flt = this.ctx.createBiquadFilter();
      flt.type = 'lowpass'; flt.frequency.value = filterFreq;

      const g = this.ctx.createGain();
      g.gain.setValueAtTime(gain, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);

      src.connect(flt); flt.connect(g);
      g.connect(this._gainMaster ?? this.ctx.destination);
      src.start();
    } catch (_) {}
  }

  resume() { this.ctx?.resume(); }

  playGunshot() {
    this._noise(0.12, 0.9, 2800);
    this._tone('sawtooth', 85, 0.06, 0.4, -200);
    this._tone('square', 180, 0.04, 0.25, 500);
  }

  playReload() {
    this._tone('sawtooth', 320, 0.08, 0.3, 0);
    setTimeout(() => this._noise(0.05, 0.6, 4000), 100);
    setTimeout(() => this._tone('square', 220, 0.06, 0.3), 480);
  }

  playFootstep(isSprinting = false, isCrouching = false) {
    const gain = isCrouching ? 0.12 : (isSprinting ? 0.35 : 0.22);
    this._noise(0.07, gain, 500);
  }

  playJump() {
    this._tone('sine', 220, 0.18, 0.3, 0);
    this._noise(0.06, 0.2, 800);
  }

  playHurt() {
    this._noise(0.09, 0.55, 600);
    this._tone('sawtooth', 110, 0.12, 0.4, -300);
  }

  playDeath() {
    this._noise(0.25, 0.7, 300);
    this._tone('sawtooth', 75, 0.3, 0.5, -400);
  }

  playKill() {
    this._tone('sine', 880, 0.06, 0.45, 0);
    setTimeout(() => this._tone('sine', 1100, 0.06, 0.45, 0), 60);
  }

  playRifleEmpty() {
    this._tone('square', 600, 0.06, 0.35, 0);
  }

  playLevelComplete() {
    [0, 100, 200].forEach((t, i) => setTimeout(() => this._tone('sine', 440 + i * 220, 0.35, 0.5, 0), t));
  }
}
