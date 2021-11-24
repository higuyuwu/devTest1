
var player,ded,playerRunning

var cloud1,cloud2,cloudsGroup

var potato,badPotato,badCat

var floor, invisableFloor

function preload(){
playerRunning = loadAnimation("playerrunnig1png.png","playerwalking1png.png")
potato = loadImage("potato.png")
badPotato = loadImage("badpotato.png")
player = loadImage("playerstart.png")
ded = loadImage("dedpng.png")
badCat = loadImage("badcat.png")
cloud1 = loadImage("CLOUD1.png")
cloud2 = loadImage("CLOUD2.png")
floor =  loadImage("ZELDAFLOOR.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = createSprite(50,height-70,20,50);
  
  
  player.addAnimation("running",playerRunning);
  player.addAnimation("ded", ded);
  player.setCollider('circle',0,0,350)
  player.scale = 0.08

}

function draw() {

  }
  
  
  drawSprites();


function spawnClouds() {
  
}

function spawnObstacles() {
  
}
