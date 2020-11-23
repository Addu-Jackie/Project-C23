var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;


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
	

	packageSprite=createSprite(width/2, 80, 10,10,package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.4
	

	var package_options={
    isStatic:true
	  }

	helicopterSprite=createSprite(width/2, 200, 10,10,helicopter_options);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	var helicopter_options={
    isStatic:true
	 }

	groundSprite=createSprite(width/2, height-35, width,10,ground_options);
	groundSprite.shapeColor=color("red")

	var ground_options={
    isStatic:true
	}

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,ground);


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();


  Engine.run(engine);
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false);
    
  }
}



