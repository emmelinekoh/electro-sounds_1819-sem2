/** ---------------------------------------------
 * Initialize Elements
 *  ---------------------------------------------
 */

function initBackground() {

  bgFrom = color(0, 0, 0);
  bgTo = color(random(255), random(255), random(255), 80);

}

function initStarfield() {

  for (let i = 0; i < numStars; i++) {
    stars[i] = new Star(random(-width, width), random(-height, height), random(100, 1000));
  }

}

function initBoxes() {

  boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(new Box(
      random(-200,200),
      random(random(-200,20), 200),
      random(-200, 200)))
  }

}

function initRiver() {

  smooth();
  blank = createGraphics(5,5);
  blank.background(255,0,0);

}

/** ---------------------------------------------
 * Draw Elements
 *  ---------------------------------------------
 */

function drawStarfield() {

  stars.forEach((el) => {
    el.update();
    el.show();
  });

}

function drawMoon() {

  let spectrum = fft.analyze();

  push();
  ambientMaterial(220,20,60);
  noStroke();
  translate(400, 0, -10);
  rotateX(angle * 0.01);
  rotateY(angle * 0.01);
  rotateZ(angle * 0.01);
  sphere(spectrum[30]);
  pop();
  angle += PI / 180 * 5

}

function drawLog() {

  let spectrum = fft.analyze();
  let level = amp.getLevel();
  vol = map(level,0,255,0,200)

  push();
  stroke(0);
  strokeWeight(0.1)
  ambientMaterial(166,128,100, 234);
  translate(-windowWidth / 2 + 225, windowHeight / 2 - 145);
  rotateX(PI/2 *frameCount*0.01)
  cylinder(50, 500);
  pop();

}

function drawTrees() {

  let spectrum = fft.analyze();
  let level = amp.getLevel();
  push();
  translate(-windowWidth / 2 + 170, -windowHeight / 2 + 85)

  for (let i = 0; i < 5; i++) {
    push();
    noStroke();
    translate(random(spectrum[0]), random(spectrum[0]), -i * 100);
    ambientMaterial(34,139,34);
    cone(40, 120);
    pop();
  }
  pop();

}


function drawGrass() {

  let spectrum = fft.analyze();
  let grassspd = map(spectrum[34], 0, 255, 10, 500);

  push();
  translate(-windowWidth / 2 - 300, -windowHeight / 2 + 10);
  for (let z = 0; z < 50; z++) {
    for (let x = 0; x < 30; x++) {
      push();
      translate(random(x * grassspd/10), random(grassspd/2), -z*10);
      normalMaterial();
      cone(7, 15);
      pop();
    }
  }
  pop();

  push();
  translate(windowWidth/2 + 200, -windowHeight/2 + 10);
  for (let z = 0; z < 50; z++) {
    for (let x = 0; x < 6; x++) {
      push();
      translate(-x * 5 * random(25), random(25), -z * random(10));
      normalMaterial();
      cone(7, 15);
      pop();
    }
  }
  pop();

}

function drawBoxes() {

  noStroke();
  push();
  translate(-150, 0);
  rotateY(frameCount * 0.01)
  boxes.forEach(el => {
    el.draw();
  });
  pop();

}

function drawRiver() {

  let tubeRes = 10;
  let tubeX = [];
  let tubeY = [];
  let angle = TWO_PI / (tubeRes - 1);

  for (let i = 0; i < tubeRes; i++) {
    tubeX[i] = cos(angle * i);
    tubeY[i] = sin(angle * i);
  }

  translate(50,-230);
  noStroke();

  rotateY(frameCount*0.001);

  let xzScale = sin(frameCount*0.01)*100;
  let yScale = 10;

  texture(blank);
  for (let y = -10; y < 70; y++) {

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < tubeRes; i++) {
      let x = tubeX[i] * xzScale;
      let z = tubeY[i] * xzScale;

      ambientMaterial(20,123,142);
      vertex(x - sin(y + 1) * 20, (y+1) * yScale, z);
      fill(0,0,255);
      vertex((x) - sin(y) * 20, (y) * yScale, z);
      fill(255);
      vertex((x + 1) - sin(y + 1) * 20, (y + 1) * yScale, z);
      fill(0,255,0);
      vertex((x+1) - sin(y) * 20, (y) * yScale, z, 1,1);
    }

    endShape();
    translate(random(0.5), random(0.5), random(0.5));
  }

}
