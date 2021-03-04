var backImg;
var database
var balloon, balloonImg;

function preload()
{
  backImg = loadImage("Hot Air Balloon-01.png");
  balloonImg = loadImage("Hot Air Balloon-04.png")
}

function setup()
{
  createCanvas(500,500);

  database = firebase.database();

  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImg);
  //balloon(balloonImg);
}

function draw()
{
  background(backImg);
  drawSprites();
}

function controlBalloon()
{
  if(keyDown(LEFT_ARROW))
  {
    balloon.x = balloon.x - 10;
  }

  else if (keyDown(RIGHT_ARROW))
  {
    balloon.x = balloon.x + 10;
  }
  
  else if(keyDown(UP_ARROW))
  {
    balloon.y = balloon.y - 10; 
  }

  else if(keyDown(DOWN_ARROW))
  {
    balloon.y = balloon.y + 10;
  }
}