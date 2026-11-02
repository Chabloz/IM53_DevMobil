export default class Keyboard {
  keyPressed = new Set();

  constructor() {
    // this.onKeyPressed = this.onKeyPressed.bind(this);
    window.addEventListener('keydown', e => this.onKeyPressed(e));
    window.addEventListener('keyup', e => this.onKeyUp(e));
  }

  onKeyPressed(e) {
    this.keyPressed.add(e.code);
  }

  onKeyUp(e) {
    this.keyPressed.delete(e.code);
  }

  isKeyDown(code) {
    return this.keyPressed.has(code);
  }

}