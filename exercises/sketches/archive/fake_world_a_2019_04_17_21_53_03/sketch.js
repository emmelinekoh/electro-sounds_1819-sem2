var angle = 0;
var t = 0;
let bgFrom;
let bgTo;

function setup() {
	createCanvas(700, 450, WEBGL);
	angleMode(DEGREES);
	bgFrom = color(random(255), random(255), random(255), 80);
	bgTo = color(random(255), random(255), random(255), 80);
}

function draw() {

	drawBackground();
	assignLights();
	drawShapes();
}



function drawBackground() {
	
	let colorInterval = 120;
	
	if (frameCount % colorInterval == 0) {
		bgFrom = bgTo;
		bgTo = color(random(255), random(255), random(255),80);
	}
	
	let t = map(frameCount % colorInterval, 0, colorInterval, 0, 1);
	let col = lerpColor(bgFrom, bgTo, t)
	background(col, 80);
	
}



function assignLights() {
	directionalLight(255, 255, 255, 1, -0.8, -0.5);
}

function drawShapes() {
	push();
  ambientMaterial(255, 138, 225, 128);
  noStroke();
  // strokeWeight(0.1);
	translate(250, 0, -10);
  rotateX(angle*0.01);
  rotateY(angle*0.01);
  rotateZ(angle*0.01);
	sphere(65);
	pop();
  angle += 5
  
  push();
  strokeWeight(0.1)
  fill(200,123,20,234);
  translate(-width/2+225,height/2-145);
  rotateX(90);
  cylinder(50,500);
  pop();


	push();
	translate(-width/2+170,-height/2+85)
	for (let i=0; i<5; i++) {
		push();
    noStroke();
		translate(0, 0, -i*100);
		ambientMaterial(170,255,209);
    cone(40, 120);
		pop();
	}
	pop();

	push();
	translate(-width / 2 + 10, -height / 2 + 10);
	for (let z=0; z<50; z++) {
		for (let x=0; x<5; x++) {
			push();
			translate(x*25, 0, -z*10);
      normalMaterial();
			cone(7, 15);
			pop();
		}
	}
	pop();

	push();
	for (let a = 0; a < 5; a++) {
		for (let b = 0; b < 5; b++) {
			c = random(-width / 2, 0)
			d = random(-height / 3, 0)
			push();
			translate(a+c, b+d, 0);
      strokeWeight(0.1)
			specularMaterial(255,255,255,128);
			box(10);
			pop();
		}
	}
	pop();
  
  	push();
		translate(-width/2+50,-height/8)
  	rotate(180);
    noStroke();
		fill(128,125,0);
    cone(20, 200);
		pop();

}