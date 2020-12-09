const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,body,world;
var boxLine1,boxLine2,boxLine3;


function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,600,50,50);

	boxLine1=createSprite(600,600,200,20);
	boxLine1.shapeColor=color(250,1,3);0

	boxLine2=createSprite(500,540,20,140);
	boxLine2.shapeColor=color(250,1,3);

	boxLine3=createSprite(700,540,20,140);
	boxLine3.shapeColor=color(250,1,3);

	ground=createSprite(400,635,800,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display();



  

  

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x: 85,y:-85})
	}
  }

