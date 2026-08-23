export class TouchControls {
  constructor(inputManager) {
    this.inputManager = inputManager;
    this.container = document.getElementById('touch-controls');

    this.joystickZone = document.getElementById('joystick-zone');
    this.joystickBase = document.getElementById('joystick-base');
    this.joystickStick = document.getElementById('joystick-stick');
    this.touchAimZone = document.getElementById('touch-aim-zone');

    this.btnFire = document.getElementById('btn-fire');
    this.btnAds = document.getElementById('btn-ads');
    this.btnJump = document.getElementById('btn-jump');
    this.btnCrouch = document.getElementById('btn-crouch');
    this.btnReload = document.getElementById('btn-reload');
    this.btnSprint = document.getElementById('btn-sprint');

    this.joystickTouchId = null;
    this.joystickOrigin = { x: 0, y: 0 };
    this.maxRadius = 50;

    this.aimTouchId = null;
    this.lastAimPos = { x: 0, y: 0 };

    this.isTouchDevice = false;

    this._autoDetectDevice();
    this._initJoystickEvents();
    this._initAimZoneEvents();
    this._initButtonEvents();
  }

  _autoDetectDevice() {
    // Only show on actual touch screens when touched
    const isMobileUserAgent = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobileUserAgent) {
      this.show();
      this.isTouchDevice = true;
    } else {
      // On Laptop / Desktop: Hide phone controls completely!
      this.hide();

      // If user physically touches a touchscreen screen on a 2-in-1 laptop, reveal them
      window.addEventListener('touchstart', () => {
        if (!this.isTouchDevice) {
          this.isTouchDevice = true;
          this.show();
        }
      }, { passive: true });
    }
  }

  show() {
    if (this.container) {
      this.container.classList.remove('hidden');
      this.container.style.display = 'block';
    }
    const hints = document.getElementById('desktop-hints');
    if (hints) hints.style.display = 'none';
  }

  hide() {
    if (this.container) {
      this.container.classList.add('hidden');
      this.container.style.display = 'none';
    }
    const hints = document.getElementById('desktop-hints');
    if (hints) hints.style.display = 'flex';
  }

  _initJoystickEvents() {
    if (!this.joystickZone) return;

    this.joystickZone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.joystickTouchId !== null) return;

      const touch = e.changedTouches[0];
      this.joystickTouchId = touch.identifier;

      const rect = this.joystickZone.getBoundingClientRect();
      this.joystickOrigin = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };

      this._handleJoystickMove(touch.clientX, touch.clientY);
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (this.joystickTouchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.joystickTouchId) {
          this._handleJoystickMove(touch.clientX, touch.clientY);
          break;
        }
      }
    }, { passive: false });

    const endJoystick = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.joystickTouchId) {
          this.joystickTouchId = null;
          if (this.joystickStick) {
            this.joystickStick.style.transform = 'translate(0px, 0px)';
          }
          this.inputManager.setJoystickInput(0, 0);
          break;
        }
      }
    };

    window.addEventListener('touchend', endJoystick);
    window.addEventListener('touchcancel', endJoystick);
  }

  _handleJoystickMove(clientX, clientY) {
    const dx = clientX - this.joystickOrigin.x;
    const dy = clientY - this.joystickOrigin.y;
    const dist = Math.hypot(dx, dy);

    let normX = 0;
    let normY = 0;

    if (dist > 0) {
      const clampedDist = Math.min(dist, this.maxRadius);
      const angle = Math.atan2(dy, dx);
      const stickX = Math.cos(angle) * clampedDist;
      const stickY = Math.sin(angle) * clampedDist;

      if (this.joystickStick) {
        this.joystickStick.style.transform = `translate(${stickX}px, ${stickY}px)`;
      }

      normX = stickX / this.maxRadius;
      normY = stickY / this.maxRadius;
    }

    this.inputManager.setJoystickInput(normX, normY);
  }

  _initAimZoneEvents() {
    if (!this.touchAimZone) return;

    this.touchAimZone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.aimTouchId !== null) return;

      const touch = e.changedTouches[0];
      this.aimTouchId = touch.identifier;
      this.lastAimPos = { x: touch.clientX, y: touch.clientY };
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (this.aimTouchId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.aimTouchId) {
          const dx = touch.clientX - this.lastAimPos.x;
          const dy = touch.clientY - this.lastAimPos.y;
          this.lastAimPos = { x: touch.clientX, y: touch.clientY };

          this.inputManager.addTouchAimDelta(dx, dy);
          break;
        }
      }
    }, { passive: false });

    const endAim = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.aimTouchId) {
          this.aimTouchId = null;
          break;
        }
      }
    };

    window.addEventListener('touchend', endAim);
    window.addEventListener('touchcancel', endAim);
  }

  _initButtonEvents() {
    const bindHoldButton = (btn, onDown, onUp) => {
      if (!btn) return;
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.add('active');
        onDown();
      }, { passive: false });

      const handleRelease = (e) => {
        btn.classList.remove('active');
        onUp();
      };
      btn.addEventListener('touchend', handleRelease);
      btn.addEventListener('touchcancel', handleRelease);
    };

    const bindTapButton = (btn, onTap) => {
      if (!btn) return;
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.add('active');
        onTap();
      }, { passive: false });

      btn.addEventListener('touchend', () => {
        btn.classList.remove('active');
      });
    };

    bindHoldButton(
      this.btnFire,
      () => { this.inputManager.isFiring = true; },
      () => { this.inputManager.isFiring = false; }
    );

    bindTapButton(this.btnAds, () => {
      this.inputManager.isADS = !this.inputManager.isADS;
    });

    bindHoldButton(
      this.btnJump,
      () => { this.inputManager.isJumping = true; },
      () => { this.inputManager.isJumping = false; }
    );

    bindTapButton(this.btnCrouch, () => {
      this.inputManager.isCrouching = !this.inputManager.isCrouching;
    });

    bindTapButton(this.btnSprint, () => {
      this.inputManager.isSprinting = !this.inputManager.isSprinting;
    });

    bindTapButton(this.btnReload, () => {
      this.inputManager.isReloading = true;
    });
  }
}
