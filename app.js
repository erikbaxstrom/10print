let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

const size = window.innerWidth;
const step = 15;
const dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = "square";
context.lineWidth = 1;

function draw(x, y, width, height) {
  const leftToRight = Math.random() >= 0.5;

  if (leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }
  context.stroke();
}

for (let x = 0; x < size; x += step) {
  for (let y = 0; y < size; y += step) {
    draw(x, y, step, step);
  }
}
