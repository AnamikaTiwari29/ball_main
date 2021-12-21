
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);
	leftSide = new Dustbin(522,600,20,120);
	bottom = new Dustbin(610,660,160,20);
	rightSide = new Dustbin(690,620,20,120)
	
	Engine.run(engine);
  
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  Engine.update(engine);
  circle(ball.position.x,ball.position.y,20);
  ground.display();
  bottom.display();
  leftSide.display();
  rightSide.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0 , y:0},{x:19 , y:-15})
	}
}


