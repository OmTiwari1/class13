var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obs1, obs2, obs3, obs4, obs5,obs6
var cloud, cloudsGroup, cloudImage;
var score=0


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  obs1=loadImage("obstacle1.png")
  obs2=loadImage("obstacle2.png")
  obs3=loadImage("obstacle3.png")
  obs4=loadImage("obstacle4.png")
  obs5=loadImage("obstacle5.png")
  obs6=loadImage("obstacle6.png")
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("score:"+score,0,20)
  score=score+Math.round(frameCount/60)
  spawnObsticles()  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable

    cloud.lifetime = 134
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }

}

function spawnObsticles(){

  if(frameCount%70===0){
    var obsticle=createSprite(600,165,20,30)
    obsticle.scale=0.7
    obsticle.velocityX=-4
    var switch1=Math.round(random(1,6))
    switch(switch1){
      case 1: obsticle.addImage(obs1)
        break;
        case 2: obsticle.addImage(obs2)
        break;
        case 3: obsticle.addImage(obs3)
        break;
        case 4: obsticle.addImage(obs4)
        break;
        case 5: obsticle.addImage(obs5)
        break;
        case 6: obsticle.addImage(obs6)
        break;
        default:break
    }


  }

}

