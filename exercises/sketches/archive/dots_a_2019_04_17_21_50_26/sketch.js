function setup() {
  createCanvas(400, 400);
  background (255);
  fill (0);
  noStroke ();
  emmeline();
}

function emmeline() {
  for (let i=0; i<1000; i++) {
  let x = random(0, width)
	let y = randomGaussian(height/2, 50)
  ellipse(x, y, 2, 2)
  }
}

function mousePressed() {
  emmeline();
}