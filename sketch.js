var poles,poles2,poles3,poles4,poles5,poles6,polesGroup,poles1Group,poles2Group,poles3Group,poles4Group,poles5Group;

var bird

var play=1;
var end=0;
var gamestate=play;

var gameover,game_png,restart,reset_img;

var score;

function preload(){
  game_png=loadImage("gameOver.png");
  reset_img=loadImage("restart.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  gameover=createSprite(width/2,height/2-50,50,50);
  gameover.addImage(game_png);
  gameover.visible=false;
  
  restart=createSprite(width/2,height/2,50,50);
  restart.addImage(reset_img);
  restart.visible=false;
  restart.scale=0.5;
  
  bird=createSprite(250,250,20,20);
  bird.visible=true;
  
  edges=createEdgeSprites();
  
  polesGroup=createGroup();
  poles1Group=createGroup();
  poles2Group=createGroup();
  poles3Group=createGroup();
  poles4Group=createGroup();
  poles5Group=createGroup();
  
  score=0;
  
}
  

function draw() {
  background("lightblue");
  
  textSize(20)
  text("Score: "+score,width-100,height/2-250);
  
  if (gamestate===play){
  bird.y=bird.y+5;
    
    if (frameCount%25===0){
    score=score+1;
  }
  
  if (touches.length>0 || keyDown("space")){
    bird.y=bird.y-10;
    touches=[];
  }
    
    var rand=Math.round(random(1,3))
    switch (rand){
      case 1:spawnpoles();
  spawnpoles2();
        break;
        case 2:spawnpoles3();
        spawnpoles4();
        break;
        case 3:spawnpoles5();
        spawnpoles6();
        break;
    }
    if (bird.isTouching(edges[2]) || bird.isTouching(edges[3])){
      gamestate=end;
    }
     if (polesGroup.isTouching(bird)){
      gamestate=end;
    }
    if (poles1Group.isTouching(bird) || poles2Group.isTouching(bird) || poles3Group.isTouching(bird) || poles4Group.isTouching(bird) || poles5Group.isTouching(bird)){
      gamestate=end;
    }
     
  }
  if (gamestate===end){
    gameover.visible=true;
    restart.visible=true;
    bird.visible=false;
    
    if (mousePressedOver(restart)){
    reset();
    }
    
  }
  drawSprites();
}

function spawnpoles(){
  if (frameCount%20===0){
    poles=createSprite(width+10,10,20,height-50);
    poles.velocityX=-9;
    poles.lifetime=200;
    polesGroup.add(poles);
  }
}
function spawnpoles2(){
  if (frameCount%20===0){
  poles2=createSprite(width+10,height,20,300);
  poles2.velocityX=-9;
  poles2.lifetime=200;  
  poles1Group.add(poles2);
  }
  
}
function spawnpoles3(){
  if (frameCount%20===0){
  poles3=createSprite(width+10,height,20,height-70);
  poles3.velocityX=-9;
  poles3.lifetime=200;  
  poles2Group.add(poles3);
  }
  
}
function spawnpoles4(){
  if (frameCount%20===0){
  poles4=createSprite(width+10,100,20,200);
  poles4.velocityX=-9;
  poles4.lifetime=200;  
  poles3Group.add(poles4);
  }
  
}
function spawnpoles5(){
  if (frameCount%20===0){
  poles5=createSprite(width+10,100,20,200);
  poles5.velocityX=-9;
  poles5.lifetime=200;  
  poles4Group.add(poles5);
  }
  
}
function spawnpoles6(){
if (frameCount%20===0){
  poles6=createSprite(width+10,height,20,height+50);
  poles6.velocityX=-9;
  poles6.lifetime=200;
  poles5Group.add(poles6);
}
  
}
function reset(){
  gamestate=play
  gameover.visible=false;
  restart.visible=false;
  bird.visible=true;
  bird.x=250;
  bird.y=250;
  score=0;
}