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
  background(255,255,255);
  Engine.update(engine); 
  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
  drawSprites();
}
for(var k =0; k<=innerWidth; k=k+80)
{
  divisionHeight.push(newDivision(k,height-division/2,10,divisionHeight));
}

for(var j = 40; j<=innerWidth; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for(var j= 15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j = 40; j<=innerWidth; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}
for(var j= 15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,375));
}

for(var j=0;j<particle.length; j++) {
  particle[j].display();
}
for(var k=0;k < division.length; k++){
  division[k].display();
}
 
