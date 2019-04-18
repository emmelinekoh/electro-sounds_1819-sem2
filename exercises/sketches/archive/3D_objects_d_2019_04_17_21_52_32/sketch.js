let i;

function setup() {
  createCanvas(400, 400, WEBGL);
  let fov = PI/3;
  let cameraZ = (height/2.0) / tan((PI/3)/2.0);
	perspective(fov, float(width)/float(height), cameraZ/10.0, cameraZ*10.0);
}

function draw() {
  background(255);
  translate(-width/2,-height/2,0);
  // noStroke();
  
  strokeWeight(0.5);
  fill(255);
  
  push();
  
  for (let i=0; i<20; i++) {
  push();
  translate(width/3,height/3 + sin((frameCount+i*10) * 0.01)*100, -i*10)
  cone(40,50);
  pop();
  }
  
  translate(50,50,0);
  fill(125,209,123);
  
  cone(20,60,1);
  translate(100,100,-100);
  box();
  translate(200,200,-500);
  torus();
  pop();
  
  translate(width/2,height/2)
  sphere();
  
  
  rotateX(radians(45));
  
  camera()
}