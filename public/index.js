// CONSTANTS
const BLOCK_SIZE = 10;
const Y_MAX = 21;
const X_MAX = 31;
const SPEED = 100;

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

// INITIALIZATION
let block = {
  x: 15,
  y: 10  
}

draw()

// GAME
hold.add('up', SPEED, () => {
  if (block.y - 1 >= 0) {
    block.y -= 1;
    draw();
  }
})

hold.add('left', SPEED, () => {
  if (block.x - 1 >= 0) {
    block.x -= 1;
    draw();
  }
})

hold.add('down', SPEED, () => {
  if (block.y + 1 < Y_MAX) {
    block.y += 1;
    draw();
  }
})

hold.add('right', SPEED, () => {
  if (block.x + 1 < X_MAX) {
    block.x += 1;
    draw();
  }
})

function draw() {
  ctx.clearRect(0, 0, X_MAX, Y_MAX);
  ctx.fillStyle = '#e49e00';
  ctx.fillRect(block.x, block.y, 1, 1);
}