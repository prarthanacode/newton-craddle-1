
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(600,200,1200,20)
	pendilum=new bob(200,650)
	pendilum1=new bob(300,650)
	pendilum2=new bob(400,650)
	pendilum3=new bob(500,650)
	pendilum4=new bob(600,650)
	rope1=new rope(pendilum.body,{x:200,y:200})
	rope2=new rope(pendilum1.body,{x:300,y:200})
	rope3=new rope(pendilum2.body,{x:400,y:200})
	rope4=new rope(pendilum3.body,{x:500,y:200})
	rope5=new rope(pendilum4.body,{x:600,y:200})
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ground.display();
  pendilum.display();
  pendilum1.display();
  pendilum2.display();
  pendilum3.display();
  pendilum4.display();	

  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(pendilum.body,{x:mouseX,y:mouseY})
} 