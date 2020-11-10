var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var base, baseBody, side1, side1Body, side2, side2Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	baseSprite = createSprite(400, 650, 200, 20);
	baseSprite.shapeColor = "red";
	baseBody = Bodies.rectangle(400, 650 - 20, 200, 20);
	World.add(world, baseBody);

	side1 = createSprite(290, 610, 20, 100);
	side1.shapeColor = "red";
	side1Body = Bodies.rectangle(290, 610, 20, 100);
	World.add(world, side1Body);

	side2 = createSprite(510, 610, 20, 100);
	side2Body = Bodies.rectangle(510, 610, 20, 100);
	side2.shapeColor = "red";
	World.add(world, side2Body);

	Matter.Body.setStatic(baseBody, true);
	Matter.Body.setStatic(side1Body, true);
	Matter.Body.setStatic(side2Body, true);

	rectMode(CENTER);
	
	
	Engine.run(engine);
}


function draw() {
	
  
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  drawSprites(); 
  keyPressed();
  
}

function keyPressed() {
	
 if (keyDown("DOWN_ARROW")) {
	Matter.Body.setStatic(packageBody,false);
  }
}



