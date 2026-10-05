import Circle from "./class/Circle.js";
import Vector2 from "./class/Vector2.js";

const TAU = 2 * Math.PI;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;

let lastTime = 0;

const c1 = new Circle({
  velocity: Vector2.fromAngle(TAU/8, 0.2)
});


function tickRendering(t) {
  requestAnimationFrame(tickRendering);
  const deltaTime = t - lastTime;
  lastTime = t;

  ctx.canvas.width = ctx.canvas.clientWidth;
  ctx.canvas.height = ctx.canvas.clientHeight;

  c1.update(deltaTime);
  c1.draw(ctx);
}

requestAnimationFrame(tickRendering)
