var movingRect,fixedRect;

function setup() {
  createCanvas(1200,1200);
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "yellow";
  fixedRect = createSprite(600, 600, 50, 80);
  fixedRect.shapeColor = "orange";
}

function draw() {
  background(255,255,255);  
  
  movingRect.x= mouseX;
  movingRect.y= mouseY;
  
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor="black";
    movingRect.shapeColor="black";
  }
  else{
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "yellow";
  }

  drawSprites();
}