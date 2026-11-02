import Vector2D from './Vector2D.js';

export default class Circle {

  constructor({position, radius, color, blurColor = color, velocity}) {
    if (!Vector2D.isVector2D(position)) throw new TypeError('Position must be a Vector2D instance');
    if (!Vector2D.isVector2D(velocity)) throw new TypeError('Velocity must be a Vector2D instance');

    this.radius = radius;
    this.position = position;
    this.color = color;
    this.blurColor = blurColor;
    this.velocity = velocity;
  }

  update(dt) {
    const deltaPosition = this.velocity.clone().multiply(dt);
    this.position.add(deltaPosition);
  }

  draw(ctx) {
    ctx.shadowBlur = this.radius;
    ctx.shadowColor = this.blurColor;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

}