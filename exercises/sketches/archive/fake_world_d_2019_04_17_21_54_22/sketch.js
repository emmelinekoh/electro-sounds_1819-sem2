var angle = 0;
var t = 0;
let bgFrom;
let bgTo;
let boxes;
var cols, rows;
var scl = 20;

function setup() {
  createCanvas(700, 450, WEBGL);
  
  bgFrom = color(random(255), random(255), random(255), 80);
  bgTo = color(random(255), random(255), random(255), 80);
  
    boxes = new Array();
  for(let i=0;i<15;i++) {
  	boxes.push(new Box(random(-100,100), 
                       random(-100,100), 
                       random(-100,100)))
    
}

  
}

function draw() {

  drawBackground();
  assignLights();
  drawMoon();
  drawSun();
  drawTrees();
  drawGrass();
  // drawMeteors();
  drawBoxes();
  drawRiver();
  moveCamera();
  
}



function drawBackground() {

  let colorInterval = 120;
  if (frameCount % colorInterval == 0) {
    bgFrom = bgTo;
    bgTo = color(random(255), random(255), random(255), 80);
  }

  let t = map(frameCount % colorInterval, 0, colorInterval, 0, 1);
  let col = lerpColor(bgFrom, bgTo, t)
  background(col, 80);

}

function assignLights() {
  directionalLight(255, 255, 255, 1, -0.8, -0.5);
  
}

function drawMoon() {
  
  push();
  ambientMaterial(255, 138, 225, 128);
  noStroke();
  translate(250, 0, -10);
  rotateX(angle * 0.01);
  rotateY(angle * 0.01);
  rotateZ(angle * 0.01);
  sphere(65);
  pop();
  angle += PI/180 *5
  
}

function drawSun() {
  push();
  stroke(0);
  strokeWeight(0.1)
  fill(200, 123, 20, 234);
  translate(-width / 2 + 225, height / 2 - 145);
  rotateX(PI/2);
  cylinder(50, 500);
  pop();
  
  push();
  translate(-width / 2 + 50, -height / 8)
  rotate(PI);
  noStroke();
  fill(128, 125, 0);
  cone(20, 200);
  pop();

}
  
function drawTrees() {
  
  push();
  translate(-width / 2 + 170, -height / 2 + 85)
  for (let i = 0; i < 5; i++) {
    push();
    noStroke();
    translate(0, 0, -i * 100);
    ambientMaterial(170, 255, 209);
    cone(40, 120);
    pop();
  }
  pop();
  
}
  
function drawGrass() {

  push();
  translate(-width / 2 + 10, -height / 2 + 10);
  for (let z = 0; z < 50; z++) {
    for (let x = 0; x < 5; x++) {
      push();
      translate(x * 25, 0, -z * 10);
      normalMaterial();
      cone(7, 15);
      pop();
    }
  }
  pop();
  
}
  
// function drawMeteors() {

//   push();
//   for (let a = 0; a < 5; a++) {
//     for (let b = 0; b < 5; b++) {
//       c = random(-width / 2, 0)
//       d = random(-height / 3, 0)
//       push();
//       translate(a + c, b + d, 0);
//       strokeWeight(0.1)
//       specularMaterial(255, 255, 255, 128);
//       box(10);
//       pop();
//     }
//   }
//   pop();

// }

function drawBoxes() {
  // background(frameCount%255);
  noStroke();
  translate(-150,0);
  push();
  rotateY(frameCount*0.01)
  boxes.forEach(el => {
  	el.draw();
  });
  pop();
  // camera(0, 0,-400 + sin(frameCount * 0.1) * 100, 0, 0, 0, 0, -1, -0.25);
}

class Box {
	constructor(theX, theY, theZ) {
  	this.x = theX;
    this.y = theY;
    this.z = theZ;
    this.speed = random(0.01, 0.1);
    this.type = random(0,1) < 0.5 ? 0:1;
    this.col = color(random(255),random(255),random(255));
  }
  
  draw() {
  	push();
    let y = sin(frameCount*this.speed)*10;
    translate(this.x, this.y +y, this.z);
    ambientMaterial(this.col);
    if(this.type === 0) {
      box(10);
    } else if(this.type === 1){
      sphere(6);
    }
    pop();
  }
}

function drawRiver() {
  push();
  strokeWeight(5);
  stroke(0);
  noFill();
  translate(width/2,height/2);
  rotateY(PI / 3);
   for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {

      vertex(x * scl, y * scl);
      vertex(x * scl, (y + 1) * scl);
    }
    endShape();
   }

  pop();
}

function moveCamera() {
  camera(0, 0, (height/2.0) / tan(PI/6) + sin(frameCount*0.01), 0, 0, 0, 0, 1, 0);

  
}