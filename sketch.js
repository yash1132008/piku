var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=width; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
  for (var k = 0; k <=width; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var k = 0; k <=width; k = k + 320) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var k = 0; k <=width; k = k + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
  for (var k = 0; k <=width; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

 
  for (var k = 0; k <=width; k = k + 560) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
  for (var k = 0; k <=width; k = k + 640) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
  for (var k = 0; k <=width; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
  for (var k = 0; k <=width; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }



  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
for ( var j = 25; j <=width-20; j=j+50){
  plinkos.push(new Plinko(j,275));
}
  
  //create 4th row of plinko objects
for(var j = 0; j <=width-30; j=j+50){
  plinkos.push(new Plinko(j,375));
}

  
/*  for(var j = 80; j <=width; j=j+50){
    particles.push(new Particles(j,80));
 }

*/
  
    
}
 


function draw() {
  
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

 

  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  /*if(frameCount%60===0){
      particles.push(new particles(random(width/2-30,width/2+30),10,10));
      score ++ ;
    }*/

    if(frameCount%60===0){
       particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
        score++; 
      }

 

  //display the paricles 
  for (var j = 0; j < particles.length; j++) {
   particles[j].display();   
 }

  for (var k = 0; k < particles.length; k++) {
    divisions[k].display();
  }
 

}
