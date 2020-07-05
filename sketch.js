var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ball;
var dustbin1;
var dustbin2;
var slingshot;

function setup() {
	createCanvas(1000, 600);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(500,580,1000,10);
  ball = new Paper(100,200,50);
  dustbin1 = new Dustbin(870,400,10,350);
  dustbin2 = new Dustbin(605,400,10,350);
  
}  


function draw() {
  ellipseMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  
  
}



function keyPressed() {
  if (keyCode === UP_ARROW) {
     Body.applyForce(ball.body,ball.body.position,{x:550,y:-550});
     
   }
 }

