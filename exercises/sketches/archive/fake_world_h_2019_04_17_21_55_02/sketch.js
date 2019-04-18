var angle = 0;
var t = 0;
let bgFrom;
let bgTo;
let boxes;
var cols, rows;
var scl = 20;

// starfield
let numStars = 400;
let stars = [];

// river b
let blank;

let amp;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  initBackground();
  initBoxes();
  initStarfield();
  initRiverB();
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8, 64);
  fft.setInput(mic);
  amp = new p5.Amplitude();

}

function draw() {

  drawBackground();
  drawStarfield();
  assignLights();
  drawMoon();
  drawLog();
  drawTrees();
  drawGrass();
  drawBoxes();
  //drawRiver();
  drawRiverB();
  moveCamera();

}

function assignLights() {
  directionalLight(255, 255, 255, 1, -0.8, -0.5);

}

let verticalVal = 0;
let horizontalVal = 0;

function moveCamera() {

  camera(0, 0, (height / 2.0) / tan(PI / 6) + sin(frameCount * 0.01), horizontalVal, verticalVal, 0, 0, 1, 0);
}


function keyPressed() {
  if (key === 'f' || key === 'F') {
    enterFullscreen();
  }
  if (keyCode === UP_ARROW) {
    verticalVal += 10.1;
  } else if (keyCode === DOWN_ARROW) {
    verticalVal -= 10.1;
  } else if (keyCode === LEFT_ARROW) {
    horizontalVal += 10.1;
  } else if (keyCode === RIGHT_ARROW) {
    horizontalVal -= 10.1;
  }
}

/* enter fullscreen-mode via
 * https://editor.p5js.org/kjhollentoo/sketches/H199a0c-x
 */
function enterFullscreen() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
  event.preventDefault();
}