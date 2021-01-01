var roadimage;
var player,player_img
var npc, npc_img;
function preload(){
roadimage = loadImage("motorcycle/rode5 - Copy.jpg");
player_img = loadImage("motorcycle/ai3.gif");
npc_img = loadImage("motorcycle/ai2.gif");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

 player = createSprite(800, 600, 50, 50);
 player.addImage(player_img);
 player.scale = 0.5;
 
 npc = createSprite(500, 600, 50, 50);
 npc.addImage(npc_img);
 npc.scale = 0.7;

}

function draw() {
  background(roadimage);  
  if(keyWentDown("W") || keyWentDown("UP_ARROW") ){
    player.velocityY = -3;
  }
  if(keyWentUp("W") || keyWentDown("UP_ARROW") ){
    player.velocityY =0;
  }
  drawSprites();
}