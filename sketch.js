//first slide of the game
var  titleIMG, startbuttonIMG, bgIMG
//second slide
var storyIMG
//third

//game
var gunIMG, cameraIMG, background1

var Gamestate = 0;
var START,PLAY,END

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	//first slide
	bgIMG = loadImage("yb.jpg");
	startbuttonIMG = loadImage("start.png");
	titleIMG = loadImage("title.png");
	
	//second slide
	storyIMG = loadImage("story.png");

	gunIMG = loadImage("gun.png");



}

function setup() {
	createCanvas(1700,900);


	engine = Engine.create();
	world = engine.world;

	
//first slide of the game
	bg = createSprite(800,550,500,800);
	bg.addImage(bgIMG);
	bg.scale = 0.5
	bg.visible = true;

	startbutton = createSprite(750,600,120,50);
	startbutton.addImage(startbuttonIMG);
	startbutton.scale = 0.5
	startbutton.visible = true;

	title = createSprite(850,180,50,50);
	title.addImage(titleIMG);
	title.scale = 0.5
	title.visible = true

	//second slide
	story = createSprite(700,450,1400,700);
	story.addImage(storyIMG);
	story.scale = 1.5;
	story.visible = false

	//game
	

	background1 = createSprite(1500,500,1700,800);
	background1.shapeColor = "blue";
	background1.scale = 50;
	background1.visible = false;

	gun = createSprite(950,500,50,50);
	gun.addImage(gunIMG);
//	gun.scale = 0.9;
	gun.visible = false;

	
	
	

	

	



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

if(Gamestate === "START"){
	startbutton.visible = true;
	bg.visible = true;
	title.visible = true;

	if(keyCode === RIGHT_ARROW){
		startbutton.visible = false;
		bg.visible = false;
		title.visible = false;
		story.visible = true;
		
	}
	if(keyCode === DOWN_ARROW){
		story.visible = false;
	}
}

if(Gamestate === PLAY){
	background = "blue";
	gun.visible = true;
	
}
 // startbutton.display();
  
  drawSprites();
  
 

}

