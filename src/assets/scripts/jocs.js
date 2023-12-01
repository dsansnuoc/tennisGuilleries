const canvas = document.getElementById("tennisCanvas");
const ctx = canvas.getContext("2d");

const paddleWidth = 10;
const paddleHeight = 60;
const ballSize = 10;

let paddle1Y = canvas.height / 2 - paddleHeight / 2;
let paddle2Y = canvas.height / 2 - paddleHeight / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;

function draw() {
  // Draw canvas
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw paddles
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, paddle1Y, paddleWidth, paddleHeight);
  ctx.fillRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight);

  // Draw ball
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();

  // Move ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Ball collision with walls
  if (ballY - ballSize < 0 || ballY + ballSize > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }

  // Ball collision with paddles
  if (
    (ballX - ballSize < paddleWidth &&
      ballY > paddle1Y &&
      ballY < paddle1Y + paddleHeight) ||
    (ballX + ballSize > canvas.width - paddleWidth &&
      ballY > paddle2Y &&
      ballY < paddle2Y + paddleHeight)
  ) {
    ballSpeedX = -ballSpeedX;
  }

  // AI for the right paddle (simple tracking)
  const paddle2YCenter = paddle2Y + paddleHeight / 2;
  if (paddle2YCenter < ballY - 35) {
    paddle2Y += 6;
  } else if (paddle2YCenter > ballY + 35) {
    paddle2Y -= 6;
  }
}

function update() {
  draw();
  requestAnimationFrame(update);
}

document.addEventListener("keydown", function (event) {
  // Player controls
  switch (event.key) {
    case "ArrowUp":
      if (paddle1Y > 0) {
        paddle1Y -= 20;
      }
      break;
    case "ArrowDown":
      if (paddle1Y + paddleHeight < canvas.height) {
        paddle1Y += 20;
      }
      break;
  }
});

update();
