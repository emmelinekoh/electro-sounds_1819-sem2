// code by Andreas Schlegel

function setup() {
  createCanvas(800, 400, WEBGL);
  //perspective(PI / 3.0, width / height, 0.001, 1000);
  smooth(8);
}

function draw() {
  background(240);
  
  push();
	for(let i=0;i<1000;i++) {
  	fill(25);
    rect(random(-2000,200),random(-2000,200),10,10)
    specularMaterial(200,0,0);
    // push();
    // translate(random(-2000,200),random(-2000,200),random(-2000,200));
    // box(10,10,110)
    // pop();
  }
  pop();
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(250);
  specularMaterial(200);
  //fill(255);
	//sphere(1000)
  
  ambientLight(50);
  directionalLight(55, 55, 55, 0.01,-0.0, 0.1);
  pointLight(255, 255, 255, locX, locY, 250);
	
  camera(500, 500,200 + sin(frameCount * 0.01) * 400, 0, 0, 0, 0, 1, 0);
  
  noStroke();
  push();
  translate(0, 0, -400);
  rotateZ(frameCount * 0.01)
  rotateX(frameCount * 0.02)
  specularMaterial(0, 255, 128);
  box(200);
  pop();
  
  push();
  translate(100, 100, -200);
  rotateZ(frameCount * 0.03)
  rotateX(frameCount * 0.01)
  specularMaterial(0, frameCount%255, 128);
  box(120);
  pop();
}