console.log('42');

const TAU = 2 * Math.PI;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;


console.log(canvas);
console.log(ctx);

let x = 0;
let y = 0;
let lastTime = 0;

function drawCircle() {
  ctx.beginPath();
  ctx.arc(x, y, 150, 0, TAU);
  ctx.stroke();
}


function tickRendering(t) {
  requestAnimationFrame(tickRendering);
  const deltaTime = t - lastTime;
  lastTime = t;

ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;

  x += 1 * deltaTime;
  drawCircle();
}

requestAnimationFrame(tickRendering)
