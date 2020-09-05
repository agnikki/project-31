const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(0,0,0);
  Engine.update(engine); 
  if(frameCount%60===0) {
    particles.push(new Particle(random(100,400),10,10));
  }
  

for(var k =0; k<=480; k=k+80)
{
  divisions.push(new Division(k,650,10,divisionHeight));
}

for(var j = 40; j<=innerWidth; j=j+50)
{
  plinkos.push(new Plinko(j,75,10));
}

for(var j= 15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175,10));
}
for(var j = 40; j<=innerWidth; j=j+50)
{
  plinkos.push(new Plinko(j,275,10));
}
for(var j= 15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,375,10));
}

for(var j=0;j<particles.length; j++) {
  particles[j].display();
}
for(var j=0;j<plinkos.length; j++) {
  plinkos[j].display();
}
for(var k=0;k < divisions.length; k++){
  divisions[k].display();
}
}
