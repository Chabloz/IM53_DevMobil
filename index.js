import Circle from "./class/Circle.js";
import Vector2 from "./class/Vector2.js";
import Keyboard from "./class/Keyboard.js";

const keyboard = new Keyboard();

const TAU = 2 * Math.PI;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const c1 = new Circle({
  position: new Vector2(),
  radius: 100,
  color: 'hsl(0, 95%, 50%)',
  velocity: Vector2.fromAngle(TAU/8, 0.1)
});


function tickUpdate(dt) {
  console.log(dt);
  c1.update(dt);
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