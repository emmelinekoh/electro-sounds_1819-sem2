var angle = 0;
var t = 0;

function setup() {
  createCanvas(700, 450, WEBGL);
  angleMode(DEGREES);
  //frameRate(5);
}

function draw() {
  background(random(255),random(255),random(255),80);
  directionalLight(255,0,0,1,-.75,0);
  push();
  ambientMaterial(0,0,255);
  // fill(135,123,86,125);
  // fill(random(255),random(255),random(255),random(255));
  translate(250,0,-10);
  // rotateX(angle*0.01);
  // rotateY(angle*0.01);
  // rotateZ(angle*0.01);
  sphere(60);
  
  angle += 5
  pop();
  
  push();
  fill(200,123,20,234);
  translate(-width/2+225,height/2-145);
  rotateX(90);
  cylinder(50,500);
  pop();
  
  push();
  translate(-width/2+150,-height/2+70)
  for (let i=0;i<5;i++) {
    push();
    translate(0,0,-i*50);
    // rotateY(angle*0.01);
    // angle += 5
    fill(50,123,20,255);
		cone(30,100);
    pop();
  }
  pop();
  
	push();
	translate(-width/2+10,-height/2+10);
	for (let z=0;z<50;z++) {
	for (let x=0;x<5;x++) {
	push();
	translate(x*25,0,-z*10);
	// fill(50,123,20,255);
    normalMaterial();
		cone(7,15);
	pop();
	}
	}
	pop();
  
	// push();
	// fill(255,0,12,255)
	// noStroke();
	// x = noise(t);
	// y = noise(t);
	// x = map(x,0,1,-width/2,0);
	// y = map(y,0,1,-height/3,height/3);
	// t += 0.05
	// translate(x,y,0)
	// sphere(4);
	// pop();

  push();
  for (let a=0;a<5;a++) {
    for (let b=0;b<5;b++) {
      c = random(-width/2,0)
      d = random(-height/3,0)
      push();
      translate(a+c,b+d,0);
      fill(255,0,255);
      box(5);
      pop();
    } 
  }
  pop();
  
  directionalLight(255,0,0,-1,0,0);
    
}