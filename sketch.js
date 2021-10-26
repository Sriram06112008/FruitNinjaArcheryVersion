var backgroundImg;
var title, titleImg;
var playButton, playButtonImg;
var bow, bowImg;
var arrowImg;
var gameOver;
var score = 0;

var apple, banana, carrot, broccoli, virus;
var appleImg, bananaImg, carrotImg, broccoliImg, virusImg, gameOverImg; 
var arrowGrp, appleGrp, bananaGrp, carrotGrp, broccoliGrp, virusGrp;

var PLAY = 1;
var END = 0;
var gameState = 1;

function preload() {
  //Load all the Images
  backgroundImg       = loadImage("background.png");
  titleImg            = loadImage("title.png");
  playButtonImg       = loadImage("playButton.png");
  bowImg              = loadImage("bow.png");
  arrowImg            = loadImage("Arrow.png");
  appleImg            = loadImage("Apple.png");
  bananaImg           = loadImage("Banana.png");
  carrotImg           = loadImage("carrot.png");
  broccoliImg         = loadImage("broccoli.png");
  virusImg            = loadImage("virus.png");
  gameOverImg         = loadImage("GameOver.png");
}

function setup() {
  createCanvas(800,400);
  
  title = createSprite(400, 50, 20, 20);
  title.addImage(titleImg);
  title.visible = false;
  title.scale = 0.25;

  playButton = createSprite(400, 300, 20, 20);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.125;
  playButton.visible = false;

  bow = createSprite(70, 200, 20, 20);
  bow.addImage(bowImg);
  bow.scale = 0.125;
  bow.visible = false;

  gameOver = createSprite(400, 200, 20, 20);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;

  arrowGrp = createGroup();
  appleGrp = createGroup();
  bananaGrp = createGroup();
  carrotGrp = createGroup();
  broccoliGrp = createGroup();
  virusGrp = createGroup();

}

function draw() {
  background(backgroundImg);  

  if(gameState === PLAY){
    gameOver.visible = false;
    title.visible = true;
    startGame();
    spawnApple();
    spawnBanana();
    spawnCarrot();
    spawnBroccoli();
    spawnVirus(); 

  bow.y = World.mouseY;

  var select_fruit = Math.round(random(1,4));

  if (World.frameCount % 100 == 0) {
    if (select_fruit == 1) {
      spawnApple();
    } else if (select_fruit == 2) {
      spawnBanana();
    } else if (select_fruit == 3) {
      spawnCarrot();
    } else {
      spawnBroccoli();
    }
  }  

  if(keyDown("space")){
    spawnArrow();
  }


  if(appleGrp.isTouching(arrowGrp)){
    score++;
    appleGrp.destroyEach();
  }

  if(bananaGrp.isTouching(arrowGrp)){
    score++;
    bananaGrp.destroyEach();
  }
  if(carrotGrp.isTouching(arrowGrp)){
    score++;
    carrotGrp.destroyEach();
  }
  if(broccoliGrp.isTouching(arrowGrp)){
    score++;
    broccoliGrp.destroyEach();
  }

  if(virusGrp.isTouching(arrowGrp)){
    gameState = END;
  }
 
    
}

  if(gameState === END){
    score = 0;
    bow.visible = false;
    arrowGrp.destroyEach();
    appleGrp.destroyEach();
    bananaGrp.destroyEach();
    carrotGrp.destroyEach();
    broccoliGrp.destroyEach();
    virusGrp.destroyEach();
    gameOver.visible = true;
    playButton.visible = true;

    if(mousePressedOver(playButton)){
      gameState = PLAY;
    }

  }


  
  drawSprites();
  textSize(15);
  fill("black");
  text("Score = " + score, 10, 20);
}

function startGame() {
  //title.visible = false;
  playButton.visible = false;
  bow.visible = true;
}

function spawnArrow() {
  arrow = createSprite(70, 200, 20, 20);
  arrow.addImage(arrowImg);
  arrow.velocityX = 4;
  arrow.lifetime = 500;
  arrow.scale = 0.125;
  arrow.y = bow.y;
  arrowGrp.add(arrow);
}

function spawnApple () {
  
 if (World.frameCount % 150 === 0) {
  
  apple = createSprite(800, 390, 20, 20);
  apple.setCollider("circle", 0, 0, 40);
  apple.y = Math.round(random(10, 400));
  apple.addImage(appleImg);
  apple.velocityX = -5; 
  apple.lifetime = 150;
  apple.scale = 0.05;
  appleGrp.add(apple);
    
  }
}

function spawnBanana () {
  
  if (World.frameCount % 180 === 0) {
   
   banana = createSprite(800, 390, 20, 20);
   banana.setCollider("circle", 0, 0, 40);
   banana.y = Math.round(random(10, 400));
   banana.addImage(bananaImg);
   banana.velocityX = -5; 
   banana.lifetime = 150;
   banana.scale = 0.05;
   bananaGrp.add(banana);
     
   }
 }

 function spawnCarrot() {
  
  if (World.frameCount % 165 === 0) {
   
   carrot = createSprite(800, 390, 20, 20);
   carrot.setCollider("circle", 0, 0, 40);
   carrot.y = Math.round(random(10, 400));
   carrot.addImage(carrotImg);
   carrot.velocityX = -5; 
   carrot.lifetime = 150;
   carrot.scale = 0.05;
   carrotGrp.add(carrot);
     
   }
 }

 function spawnBroccoli () {
  
  if (World.frameCount % 120 === 0) {
   
   broccoli = createSprite(800, 390, 20, 20);
   broccoli.setCollider("circle", 0, 0, 40);
   broccoli.y = Math.round(random(10, 400));
   broccoli.addImage(broccoliImg);
   broccoli.velocityX = -5; 
   broccoli.lifetime = 150;
   broccoli.scale = 0.05;
   broccoliGrp.add(broccoli);
     
   }
 }

 function spawnVirus () {
  
  if (World.frameCount % 130 === 0) {
   
   var virus = createSprite(800, Math.round(random(10, 400)));
   virus.setCollider("circle", 0, 0, 20);
   virus.addImage(virusImg);
   virus.velocityX = -5; 
   virus.scale = 0.05;
   virusGrp.add(virus);
     
   }
 }