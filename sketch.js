var backImg;
var database
var balloon, balloonImg1, balloonImg2;
var height;

function preload()
{
  backImg = loadImage("Hot Air Balloon-01.png");
  balloonImg1 = loadAnimation("Hot Air Balloon-04.png");
  balloonImg2 = loadAnimation("Hot Air Baloon-02.png","Hot Air Baloon-02.png","Hot Air Baloon-02.png",
  "Hot Air Baloon-03.png","Hot Air Baloon-03.png","Hot Air Baloon-03.png",
  "Hot Air Baloon-04.png","Hot Air Baloon-04.png","Hot Air Baloon-04.png",)
}

function setup()
{
  database = firebase.database();

  createCanvas(1500,700);

  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("airBalloon",balloonImg1);
  balloon.scale = 0.5;

  var balloonheight = database.ref('balloon/height');
  balloonheight.on("value",readHeight, showError);
  textSize(20);
}

function draw()
{
  background(backImg);

  if(keyDown(LEFT_ARROW))
  {
    updateheight(-10,0);
    balloon.addAnimation("airBalloon",balloonImg2);
  }

  else if (keyDown(RIGHT_ARROW))
  {
    updateheight(10,0);
    balloon.addAnimation("airBalloon",balloonImg2);

  }
  
  else if(keyDown(UP_ARROW))
  {
    updateheight(0,-10);
    balloon.addAnimation("airBalloon",balloonImg2);
    balloon.scale= balloon.scale+0.005;
  }

  else if(keyDown(DOWN_ARROW))
  {
    updateheight(0,+10);
    balloon.addAnimation("airBalloon",balloonImg2)
    balloon.scale= balloon.scale+0.005;
  }

  drawSprites();

  fill("purple");
  stroke("white");
  textSize(25);
  text("Use the arrows to control the Hot Air Balloon!",40,40);
}

function updateheight(x,y)
{
  database.ref('balloon/height').set(
    {
      'x': height.x+x,
      'y': height.y+y
    }
  )
}

function readHeight()
{
  height = data.val();
  console.log(height.x);
  balloon.x = height.x;
  balloon.y = height.y
}

function showError()
{
  console.log("Error in writing to the databse");
}