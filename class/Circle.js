import Vector2 from "./Vector2.js";
const TAU = Math.PI * 2;

export default class Circle {

  constructor({
    pos = new Vector2(),
    radius = 100,
    color = "hsl(180,50,100)",
    velocity = new Vector2()
  } = {}) {
    this.pos = pos;
    this.color = color;
    this.velocity = velocity;
    this.radius = radius;
  }

  update(deltaTime) {
      this.pos.x += 1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, TAU);
    ctx.fill();
    ctx.closePath();
  }

}