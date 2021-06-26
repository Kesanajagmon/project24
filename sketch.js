
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper;
var ground;
var dustbin , dustbin2,dustbin3;
var world,engine;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	//dustbin = createSprite(660,682,10,176);
	//dustbin2 = createSprite(778,682,10,176);
	//dustbin3 = createSprite(715,699,118,10);
	ground = createSprite(0,0,800,10);
	

	






	paper = new Dustbin4(100,100,100,100);

	ground = Bodies.rectangle(200, 100, 80, 10 , {isStatic:true} );
 	World.add(world, ground);



	
	dustbin = Bodies.rectangle(660,682,10,176);
	World.add(world,dustbin);
	dustbin2 = Bodies.rectangle(778,682,10,176);
	World.add(world,dustbin2);
	dustbin3 = Bodies.rectangle(715,699,118,10);
	World.add(world,dustbin3);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  paper.display();
  
  drawSprites();
  keyPressed();
  
 
}


function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	}
}
