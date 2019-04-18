let boxes;

function setup() {
  createCanvas(400, 400, WEBGL);
  boxes = new Array();
  for(let i=0;i<40;i++) {
  	boxes.push(new Box(random(-100,100), 
                       random(-100,100), 
                       random(-100,100)))
  }
}

function draw() {
  background(frameCount%255);
  noStroke();
  assignLights();
  push();
  rotateY(frameCount*0.01)
  boxes.forEach(el => {
  	el.draw();
  });
  pop();
  camera(0, 0,-400 + sin(frameCount * 0.1) * 100, 0, 0, 0, 0, -1, -0.25);
}

function assignLights() {
	directionalLight(255, 255, 255, 1, -0.8, -0.5);
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
      sphere(10);
    }
    pop();
  }
}