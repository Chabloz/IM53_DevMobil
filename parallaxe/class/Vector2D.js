export default class Vector2D {
  constructor({ x = 0, y = 0 } = {}) {
    this.x = x;
    this.y = y;
  }

  static isVector2D(value) {
    return value instanceof Vector2D;
  }

  static fromAngle(angle = 0, length = 1) {
    return new Vector2D({
      x: Math.cos(angle) * length,
      y: Math.sin(angle) * length,
    });
  }

  clone() {
    return new Vector2D({ x: this.x, y: this.y });
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  multiply(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  normalize() {
    const length = this.length();
    if (length > 0) {
      this.x /= length;
      this.y /= length;
    }
    return this;
  }

  length() {
    return Math.hypot(this.x, this.y);
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  setAngle(angle) {
    const length = this.length();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
    return this;
  }
}
