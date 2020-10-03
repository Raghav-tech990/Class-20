
var frect,mrect

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
frect=createSprite(500,300,60,30)
frect.shapeColor="blue"
frect.debug=true
mrect=createSprite(100,20,100,40)
mrect.shapeColor="orange"
mrect.debug=true
}

function draw() {
  background(255,255,255);
  
  
mrect.y=mouseY
mrect.x=mouseX

if(mrect.x-frect.x<= mrect.width/2+frect.width/2 &&
  frect.x-mrect.x<= mrect.width/2+frect.width/2 &&
  mrect.y-frect.y<= mrect.width/2+frect.width/2 &&
  frect.y-mrect.y<= mrect.width/2+frect.width/2){
mrect.shapeColor="red"
frect.shapeColor="red"
}

else{
  mrect.shapeColor="green"
  frect.shapeColor="green"
  
}




  drawSprites();
}