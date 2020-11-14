var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet=createSprite(1000,200,50,20);
  bullet.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  bullet.shapeColor = "white"
  wall.shapeColor = "grey"
}



function draw() {
  background(0);  
  drawSprites();
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX = 0;
    var damage = 0.5 * speed * speed * weight/thickness * thickness * thickness
    if(damage > 10){
      bullet.shapeColor = "red"
    }
  if (damage < 10){
    bullet.shapeColor = "green"
  }
  }
}