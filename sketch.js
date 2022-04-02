var ball
function setup() {
  createCanvas(1350,550);
  ball = createSprite (60, 200, 10, 40)
}

function draw() 
{
  background(30);
  if (keyDown ("left")) {
    ball.x -= 5;
  }
  if (keyDown ("up")) {
    ball.y -= 5;
  }
  if (keyDown ("down")) {
    ball.y += 5;
  }
  if (keyDown ("right")) {
    ball.x += 5;
  }
drawSprites ()
}




