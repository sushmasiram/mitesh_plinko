const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground;

var particles = [];
var plinkos = [];


function setup() {
  createCanvas(480,800);
  
 
  myengine = Engine.create();
  myworld = myengine.world;
  
   

  ground  = new Ground(249,690,495,8)

  division1 = new Ground(1,583,8,220);
  division2 = new Ground(82,583,8,220);
  division3 = new Ground(162,583,8,220);
  division4 = new Ground(242,583,8,220);
  division5 = new Ground(322,583,8,220);
  division6 = new Ground(402,583,8,220);
  division7 = new Ground(480,583,8,220);

}

function draw() {
  Engine.update(myengine)
  background(255,255,255);  

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));    
  } 
  console.log(particles.length)
   for(var i = 0; i<particles.length; i++){
      particles[i].display()
   }


   for(var j = 40; j <= width; j=j+50){
      plinkos.push(new Plinko(j,75,10));
   }

   for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j,175,10));
 }

    for(var i = 0; i<plinkos.length; i++){
      plinkos[i].display()
    }


  ground.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()

  
}