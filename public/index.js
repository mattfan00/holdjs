console.log('hi');


// CONSTANTS
const BLOCK_SIZE = 10;
const Y_MAX = 20;
const X_MAX = 30;
const SPEED = 100;

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

// INITIALIZATION
let block = {
  x: 15,
  y: 9  
}

draw()

// GAME
hold.add('w', SPEED, () => {
  if (block.y - 1 >= 0) {
    block.y -= 1;
    draw();
  }
})

hold.add('a', SPEED, () => {
  if (block.x - 1 >= 0) {
    block.x -= 1;
    draw();
  }
})

hold.add('s', SPEED, () => {
  if (block.y + 1 < Y_MAX) {
    block.y += 1;
    draw();
  }
})

hold.add('d', SPEED, () => {
  if (block.x + 1 < X_MAX) {
    block.x += 1;
    draw();
  }
})

function draw() {
  ctx.clearRect(0, 0, X_MAX, Y_MAX);
  ctx.fillStyle = '#777';
  ctx.fillRect(block.x, block.y, 1, 1);
}