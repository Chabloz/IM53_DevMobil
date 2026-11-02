export default class PointerAngle {

  constructor(reverse = true) {
    window.addEventListener('pointerdown', evt => this.onTouchStart(evt));
    window.addEventListener('pointermove', evt => this.onTouchMove(evt), {passive: false});
    window.addEventListener('pointerup', evt => this.onTouchEnd(evt));
    this.startX = 0;
    this.startY = 0;
    this.angle = false;
    this.reverse = reverse;
  }

  getAngle() {
    return this.angle;
  }

  onTouchStart(event) {
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }

  onTouchMove(event) {
    event.preventDefault();
    const endX = event.touches[0].clientX;
    const endY = event.touches[0].clientY;
    const diffX = endX - this.startX;
    const diffY = endY - this.startY;
    this.angle = Math.atan2(diffY, diffX);
    if (this.reverse) {
      this.angle = (this.angle + Math.PI) % (2 * Math.PI);
    };
  }

  onTouchEnd(event) {
    this.angle = false;
  }

}