function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  pointLight(125, 125, 0, mouseX, mouseY, 123);
  specularMaterial(250, 0, 0);
  sphere(50, 64);
}