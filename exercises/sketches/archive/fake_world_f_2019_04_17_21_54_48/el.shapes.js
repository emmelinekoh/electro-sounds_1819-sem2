/** ---------------------------------------------
 * Initialize Elements
 *  ---------------------------------------------
 */
function initBoxes() {
  boxes = [];
  for (let i = 0; i < 15; i++) {
    boxes.push(new Box(
      random(-100, 100),
      random(-100, 100),
      random(-100, 100)))

  }
}

function initBackground() {
  bgFrom = color(random(255), random(255), random(255), 80);
  bgTo = color(random(255), random(255), random(255), 80);
}

function initStarfield() {
  
  for (let i = 0; i < numStars; i++) {
    stars[i] = new Star(random(-width, width), random(-height, height), random(100, 1000));

  }
}

function initRiverB() {
  
  smooth();
  blank = createGraphics(5,5);
  blank.background(255,0,0);
  
}

/** ---------------------------------------------
 * Draw Elements
 *  ---------------------------------------------
 */

function drawStarfield() {
 // camera(sin(frameCount*0.01)*500,0,0,0,0,-400,0,1,0);
  stars.forEach((el) => {
    el.update();
    el.show();
  });
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
  angle += PI / 180 * 5

}

function drawLog() {
  
  push();
  stroke(0);
  strokeWeight(0.1)
  fill(200, 123, 20, 234);
  translate(-width / 2 + 225, height / 2 - 145);
  rotateX(PI / 2);
  cylinder(50, 500);
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
  
  push();
  translate(-140, -height/2 + 10);
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

function drawRiver() {
  push();
  strokeWeight(5);
  stroke(0);
  noFill();
  translate(width / 2, height / 2);
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

function drawRiverB() {
  
  let tubeRes = 40;
  let tubeX = [];
  let tubeY = [];
  let angle = TWO_PI / (tubeRes - 1);

  for (let i = 0; i < tubeRes; i++) {
    tubeX[i] = cos(angle * i);
    tubeY[i] = sin(angle * i);
  }
  
  translate(50,-100);
  noStroke();
  
  // rotateY(frameCount*0.001);
  // rotateX(frameCount*0.01);
    
  
  let xzScale = sin(frameCount*0.01)*100;
  let yScale = 10;
  
  
  texture(blank);
  for (let y = -10; y < 30; y++) {
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
  }
  
}


function drawBoxes() {
  // background(frameCount%255);
  noStroke();

  push();
  translate(-150, 0);
  rotateY(frameCount * 0.01)
  boxes.forEach(el => {
    el.draw();
  });
  pop();
  // camera(0, 0,-400 + sin(frameCount * 0.1) * 100, 0, 0, 0, 0, -1, -0.25);
}