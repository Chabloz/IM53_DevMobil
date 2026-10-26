import Circle from "./class/Circle.js";
import Vector2 from "./class/Vector2.js";
import Keyboard from "./class/Keyboard.js";
import CircleInFlatTorus from "./class/CircleInFlatTorus.js";
import Tweens from "./class/Tweens.js";

const keyboard = new Keyboard();
const tweensManager = new Tweens();

// tweensManager.create({dur: 2000, from: 0, to: 360, animate: val => {
//   c1.position.x = val;
// }});
tweensManager.create({dur: 2000, from: 0, to: 360, animate: val => {
  c1.color = `hsl(${val} 50 100)`;
  console.log(c1.color);
}});
tweensManager.create({ease: 'bounceOut', loop: true, yoyo: true,  dur: 500, from: 100, to: 300, animate: val => {
  c1.radius = val;
}});


const TAU = 2 * Math.PI;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const c1 = new CircleInFlatTorus({
  position: new Vector2(),
  radius: 100,
  color: 'hsl(0, 95%, 50%)',
  velocity: Vector2.fromAngle(TAU/8, 0)
});


function tickUpdate(dt) {
  c1.update(dt, ctx.canvas.height);
  tweensManager.update(dt);
}

function tickRender(t) {
  ctx.canvas.width = ctx.canvas.clientWidth;
  ctx.canvas.height = ctx.canvas.clientHeight;
  c1.draw(ctx);
}

MainLoop.setSimulationTimestep(1000/240);
MainLoop
  .setUpdate(tickUpdate)
  .setDraw(tickRender)
  .start();

  const pointers = new Map();

canvas.addEventListener('pointerdown', (event) => {
  pointers.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY,
  });
});

window.addEventListener('pointermove', (event) => {
  const pointer = pointers.get(event.pointerId);
  if (!pointer) return;
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

window.addEventListener('pointerup', (event) => {
  pointers.delete(event.pointerId);
});