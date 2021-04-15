//Declaring Alias name for Module
const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

//Declare the game Elemnts
var world,engine,box,ground;

function setup() {
  createCanvas(1200,400);
  // creating game Engine by using Engine module
engine= Engine.create();
// game world is equal to engine's world
world=engine.world;

bird=new Bird(100,100)
box1=new Box(742,320,70,70);
box2=new Box(742,220,70,70);
box3=new Box(942,320,70,70);
box4=new Box(942,220,70,70);
box5=new Box(842,120,70,70);
pig1= new Pig(842,320);
pig2= new Pig(842,220);
log1= new Log(842,230,300,20);
log2= new Log(842,120,300,20);

ground1=new Ground(600,380,1200,20);
}

function draw() {
  background(0); 
  Engine.update(engine) 
  ground1.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
log1.display();
log2.display();
 pig1.display();
 pig2.display();
 
 bird.display();
 text (mouseX,50,50);
 text (mouseY,50,60);
}