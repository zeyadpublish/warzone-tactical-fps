export class InputManager {
  constructor(canvasElement) {
    this.canvas = canvasElement;

    // Movement axes (-1 to 1)
    this.moveForward = 0;
    this.moveRight = 0;

    // Aim deltas (radians)
    this.aimDeltaX = 0;
    this.aimDeltaY = 0;

    // Action states
    this.isFiring = false;
    this.isADS = false;
    this.isSprinting = false;
    this.isCrouching = false;
    this.isJumping = false;
    this.isReloading = false;
    this.isScoreboard = false;
    this.cameraToggleRequested = false;

    // Joystick input
    this.joystickX = 0;
    this.joystickY = 0;

    // Sensitivity
    this.mouseSensitivity = 0.0022;
    this.touchSensitivity = 0.004;

    this.isPointerLocked = false;
    this.isMouseDown = false;
    this.keys = {};

    this._setupControls();
  }

  _setupControls() {
    // 1. Keyboard Controls (Always active)
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      if (e.code === 'KeyC') {
        this.isCrouching = !this.isCrouching;
      }
      if (e.code === 'KeyV') {
        this.cameraToggleRequested = true;
      }
      if (e.code === 'KeyR') {
        this.isReloading = true;
      }
      if (e.code === 'Tab') {
        e.preventDefault();
        this.isScoreboard = true;
      }
      if (e.code === 'Space') {
        this.isJumping = true;
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.isSprinting = true;
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'Tab') {
        this.isScoreboard = false;
      }
      if (e.code === 'Space') {
        this.isJumping = false;
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.isSprinting = false;
      }
    });

    // 2. Mouse Pointer Lock on canvas click
    this.canvas.addEventListener('click', () => {
      if (document.pointerLockElement !== this.canvas) {
        this.canvas.requestPointerLock?.();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = (document.pointerLockElement === this.canvas);
    });

    // Mouse movement
    document.addEventListener('mousemove', (e) => {
      if (this.isPointerLocked) {
        this.aimDeltaX += e.movementX * this.mouseSensitivity;
        this.aimDeltaY += e.movementY * this.mouseSensitivity;
      } else if (this.isMouseDown) {
        // Allow drag-aiming even if pointer lock isn't active
        this.aimDeltaX += (e.movementX || 0) * this.mouseSensitivity;
        this.aimDeltaY += (e.movementY || 0) * this.mouseSensitivity;
      }
    });

    window.addEventListener('mousedown', (e) => {
      if (e.target === this.canvas || this.isPointerLocked) {
        this.isMouseDown = true;
        if (e.button === 0) this.isFiring = true;
        if (e.button === 2) this.isADS = true;
      }
    });

    window.addEventListener('mouseup', (e) => {
      this.isMouseDown = false;
      if (e.button === 0) this.isFiring = false;
      if (e.button === 2) this.isADS = false;
    });

    window.addEventListener('contextmenu', (e) => {
      if (this.isPointerLocked || e.target === this.canvas) {
        e.preventDefault();
      }
    });
  }

  // Mobile virtual joystick input
  setJoystickInput(x, y) {
    this.joystickX = x;
    this.joystickY = y;
  }

  // Mobile touch aim drag delta
  addTouchAimDelta(dx, dy) {
    this.aimDeltaX += dx * this.touchSensitivity;
    this.aimDeltaY += dy * this.touchSensitivity;
  }

  update() {
    let fwd = 0;
    let rgt = 0;

    // Keyboard WASD / Arrows
    if (this.keys['KeyW'] || this.keys['ArrowUp']) fwd += 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) fwd -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) rgt += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) rgt -= 1;

    // Merge with touch joystick
    if (Math.abs(this.joystickY) > 0.05) fwd += -this.joystickY;
    if (Math.abs(this.joystickX) > 0.05) rgt += this.joystickX;

    const len = Math.hypot(fwd, rgt);
    if (len > 0.05) {
      const clampLen = Math.min(1.0, len);
      this.moveForward = (fwd / len) * clampLen;
      this.moveRight = (rgt / len) * clampLen;
    } else {
      this.moveForward = 0;
      this.moveRight = 0;
    }

    if (this.keys['ShiftLeft'] || this.keys['ShiftRight']) {
      this.isSprinting = this.moveForward > 0.1;
    }
  }

  consumeAimDelta() {
    const delta = { x: this.aimDeltaX, y: this.aimDeltaY };
    this.aimDeltaX = 0;
    this.aimDeltaY = 0;
    return delta;
  }

  consumeCameraToggle() {
    const toggle = this.cameraToggleRequested;
    this.cameraToggleRequested = false;
    return toggle;
  }
}
