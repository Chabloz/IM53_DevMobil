import Circle from "./Circle.js";

export default class CircleInFlatTorus extends Circle {

  update(dt, height) {
    super.update(dt);
    if (this.position.y - this.radius > height) {
      this.position.y = 0 - this.radius;
    } else if (this.position.y + this.radius < 0) {
      this.position.y = height + this.radius;
    }
  }

}