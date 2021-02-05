var fr;
var mr;

function setup() {
  createCanvas(800,400);
 fr = createSprite(400, 200, 50, 50);
 fr.shapeColor = "green";
 mr = createSprite(700, 300, 30, 30);
 mr.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  console.log(mr.y-fr.y);

  mr.y = World.mouseY;
  mr.x = World.mouseX;

  if(mr.x-fr.x<fr.width/2 + mr.width/2 && fr.x-mr.x<fr.width/2 + mr.width/2 && mr.y-fr.y<fr.width/2 + mr.height/2 && fr.y-mr.y<fr.width/2 + mr.height/2 ){
    fr.shapeColor = "red";
    mr.shapeColor = "red";
  }
  else{
    fr.shapeColor = "green";
    mr.shapeColor = "green"; 
  }

  drawSprites();
}