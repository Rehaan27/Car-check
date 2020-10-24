var car, wall, speed, weight, deformation;
function setup() {
  createCanvas(800,400);
 car = createSprite(70, 200, 20, 20);
 car.shapeColor = 255;
 wall = createSprite(700, 200, 30, 200);
 weight = Math.round(random(400, 1500));
 speed = Math.round(random(55,90));
 car.velocityX = speed;
 
}

function draw() {
background(0); 
  textSize(20);
  text("Speed:"+speed,350,100);
  text("Weight:"+weight,350,300);
  
car.depth = wall.depth+1

  if(wall.isTouching(car)) { 
    deformation = weight*speed*speed/22500;
    car.velocityX = 0;
  }

  if(deformation<80){
    car.shapeColor = "green";
    car.velocityX = 0;
    }
  
    if(deformation>80 && deformation<180){
      car.shapeColor="yellow";
      car.velocityX = 0;
    }
  
    if(deformation>180){
      car.shapeColor="red";
      car.velocityX = 0;
    }
  

  drawSprites();
}