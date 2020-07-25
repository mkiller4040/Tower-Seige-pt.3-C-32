const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var score = 0;
var bgColor;
var celestialBody;

function setup()
{
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(400,300,200,20);
    stand2 = new Ground(800,200,200,20);
    ground = new Ground(0,395,2000,20)
    box1 = new Box(360,255,35,45);
    box2 = new Box(395,255,35,45);
    box3 = new Box(430,255,35,45);
    box4 = new Box(378,210,35,45);
    box5 = new Box(413,210,35,45);
    box6 = new Box(396,165,35,45);
    box7 = new Box(760,155,35,45);
    box8 = new Box(795,155,35,45);
    box9 = new Box(830,155,35,45);
    box10 = new Box(778,110,35,45);
    box11 = new Box(813,110,35,45);
    box12 = new Box(796,57,35,45);

    var ball_options = 
    {
      'isStatic':false,
      'density':2.0
    }

    fill("red");    
    ball = Bodies.circle(200,300,20,ball_options);
    World.add(world,ball);
    
    catapult = new Catapult(ball, {x : 100, y : 275});
}

function draw()
{

  getBackgroundImg();

  if(bgColor)
  {
  background(bgColor);
  Engine.update(engine);

  fill("black");
  text("Use the mouse, by dragging and releasing, to launch the shadow ball towards the blocks and make them become shadow blocks.", 10, 30)
  text("SCORE : " + score, 900, 30);

  stand1.display();
  stand2.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  catapult.display();

  ellipseMode(RADIUS);
  fill("black");
  ellipse(ball.position.x,ball.position.y,20);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  }
}

function mouseDragged()
{
  Matter.Body.setPosition(ball, {x : mouseX, y : mouseY})
}

function mouseReleased()
{
  catapult.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
    catapult.attach(ball);
  }  
}

async function getBackgroundImg()
{
  var timeZoneinfo = await fetch("http://worldclockapi.com/api/json/cst/now");
  var timeZoneinfoJSON = await timeZoneinfo.json();
  var datetime = timeZoneinfoJSON.currentDateTime;
  var hour = datetime.slice(11,13);

  if(hour >= 05 && hour <= 19)
  {
    bg = "lightblue";
  } 
  else 
  {
    bg = "darkblue";
  }

  bgColor = bg;
}