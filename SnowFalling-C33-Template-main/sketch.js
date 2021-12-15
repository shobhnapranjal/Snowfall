var bg
var fall=[]
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function preload(){
bg= loadImage("snow3.jpg")



}


function setup() {
  createCanvas(1800,800);
  engine = Engine.create();
  world = engine.world;
  

}

function draw() {
  background(bg); 
  Engine.update(engine);
  if(frameCount%2===0) 
  {
    fall.push(new snow(random(0,1800),0))
  }
  for(var i=0;i<fall.length;i++)
  {
    fall[i].display()
  }
  drawSprites();
}