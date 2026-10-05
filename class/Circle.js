import Vector2 from "./Vector2.js";
const TAU = Math.PI * 2;

export default class Circle {

  constructor({
    pos = new Vector2({x: 0, y: 0}),
    radius = 100,
    color = "hsl(0, 90%, 47%)",
    velocity = new Vector2()
  } = {}) {
    this.pos = pos;
    console.log(pos)
    this.color = color;
    this.velocity = velocity;
    this.radius = radius;
  }

  update(dt) {
    // todo
    this.radius += 1; // CHANGE THIS !
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, TAU);
    ctx.fill();
    ctx.closePath();
  }

}