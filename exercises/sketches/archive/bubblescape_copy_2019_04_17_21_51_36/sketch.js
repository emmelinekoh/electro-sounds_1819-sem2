// code by Andreas Schlegel

data = [];

function setup() {
  createCanvas(400, 400, WEBGL);
  for(let i=0;i<100;i++) {
  	data.push({
    x: random(-400,400),
    y: random(-400,400),
    h: random(100),
    w: random(50)
    });
  }
  noStroke();
}

function draw() {
  background(0);
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);
	translate(mouseX, mouseY,(frameCount%200)*2.0);
  rotateX(-0.4)
  specularMaterial(250);
  // fill(255);
  for(let i=0;i<100;i++) {
    d = data[i];
    push()
    translate(d.x,-d.h/2,d.y);
    rotateY(frameCount*0.0001*i)
  	//box(d.w,d.h,20);
    sphere(d.w,6,3)
    pop()
  }
}

