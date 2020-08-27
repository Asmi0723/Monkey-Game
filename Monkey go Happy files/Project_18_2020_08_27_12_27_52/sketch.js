var bananaImage, obstacleImage, obstaclegroup, background, score, monkey, foodGroup;

function preload() {
  
  Background = loadImage("jungle.jpg");
  
  Monkey = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png",      "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png",    "Monkey_09.png", "Monkey_10.png");
  
  BananaImage = loadImage("banana.png");
  
  ObstacleImage = loadImage("stone.png");
  
}

function setup() {
  
  createCanvas(400, 400);
  
  background = createSprite(200, 200, 800, 400);
  
  background.addImage ("background1", Background);
  
  background.velocityX = -5;
  
  background.x = background.width/2;
  
  var ground = createSprite(200,380,400,20);
  
  ground.visible = false;
  
  var monkey = createSprite(200,380,20,50);
  
  monkey.addAnimation("monkeyrun", Monkey);
  
  bananaImage = createSprite();
  
  bananaImage.addImage("banana", BananaImage);
  
  obstacleImage = createSprite();
  
  obstacleImage.addImage("obs", ObstacleImage);
  
  obstacleGroup.add(obstacleImage);
  
  foodGroup.add(bananaImage);
  
}

function draw() {
  
  if (foodGroup.isTouching(monkey)){
    
    score = score+2;
      
      }
  
  switch(score){
      
    case 10 : monkey.scale = 0.12;
      break;
    case 20 : monkey.scale = 0.14;
      break;
    case 30 : monkey.scale = 0.16;
      break;
    case 40 : monkey.scale = 0.18;
      break;
    default : break;
      
  }
  
  if (obstacleGroup.isTouching(monkey)){
    
    monkey.scale = 0.2;
    
    score = 0;
      
      }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score, 300, 50);
  
  drawSprites();
  
}