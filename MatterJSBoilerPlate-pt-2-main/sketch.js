//const nunca muda
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2, blockrodando1, blockrodando2, blockrodando3;

function preload()
{
	
}

function setup() 
{
createCanvas(800, 700);


engine = Engine.create();
world = engine.world;

// nome da var = new nome_da_classe()
block1 = new Rodinhas(10, 10, 10, 10);
block2 = new Rodinhas(20, 20, 10, 10);
blockrodando1 = new Rodinhas(30, 10, 10, 10);
blockrodando2 = new Rodinhas(40, 10, 10, 10);
blockrodando3 = new Rodinhas(50, 10, 10, 10);
Engine.run(engine);
  
}


function draw() 
{
rectMode(CENTER);
background(0);

Engine.update(engine);

blockrodando1.display();
blockrodando2.display();
blockrodando3.display();
block1.display();
block2.display();

drawSprites();
 
}



