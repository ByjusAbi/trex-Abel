
var trex ,trex_running;
var suelo, imgsuelo;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  imgsuelo = loadAnimation("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(200,130,20,40);
  trex.addAnimation("trex", trex_running);
  trex.scale = 0.5;
  trex.x=50;
  
  suelo = createSprite(210, 160, 100, 20);
  suelo.addAnimation("imgsuelo", imgsuelo);

 
}

function draw(){

  background("white")



  if(keyDown("space")){
    trex.velocityY = -5;
  }

  trex.velocityY= trex.velocityY + 0.8;

  trex.collide(suelo);
  
  drawSprites();
}
