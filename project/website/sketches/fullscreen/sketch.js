var angle = 0;
var t = 0;
let bgFrom;
let bgTo;
let boxes;
var cols, rows;
var scl = 20;

// camera
var angle = 0.0;
var speed = 0.05;
var scalar = 30;

// audio reactive
let amp;
let mic, fft;

// starfield
let numStars = 400;
let stars = [];

// river
let blank;

// FFT STUFF
let speedturn;
let jitter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  resetPosition();
  camera();
  dir = 0;
  noCursor();

  initBackground();
  initBoxes();
  initStarfield();
  initRiver();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8, 64);
  fft.setInput(mic);
  amp = new p5.Amplitude();

}

function draw() {

  keyPressNum()
  orbitControl();

  drawBackground();
  drawStarfield();

  assignLights();

  drawMoon();
  drawLog();
  drawTrees();
  drawGrass();
  drawBoxes();
  drawRiver();


}

function assignLights() {

  directionalLight(255, 255, 255, 1, -0.8, -0.5);

}

function moveCamera() {

  let spectrum = fft.analyze();
  speedturn = map(spectrum[30], 0, 255, 0.002, 0.05);
  jitter = map(spectrum[30], 0, 255, 0, 70);
  console.log(speedturn);
  translate(random(jitter), random(jitter), random(jitter));
  rotateY(PI/2*frameCount*speedturn);
  camera(0+(800*sin(frameCount*0.05)), 0, (height/2.0) / tan(PI*30.0 / 180.0)-300, 0, 0, 0, 0, 1, 0);

}

function moveCamera2() {

  let spectrum = fft.analyze();
  speedturn = map(spectrum[30], 0, 255, 0.002, 0.05);
  jitter = map(spectrum[30], 0, 255, 0, 70);
  console.log(speedturn);
  translate(random(jitter), random(jitter), random(jitter));
  rotateZ(PI/8*frameCount*speedturn/5);
  camera(0+(800*sin(frameCount*0.05)), 0, (height/2.0) / tan(PI*30.0 / 180.0)-300, 0, 0, 0, 0, 1, 0);

}

function moveCamera3() {

  let spectrum = fft.analyze();
  speedturn = map(spectrum[30], 0, 255, 0.002, 0.05);
  jitter = map(spectrum[30], 0, 255, 0, 70);
  console.log(speedturn);
  translate(random(jitter), random(jitter), random(jitter));
  rotateX(PI/8*frameCount*speedturn/5);
  camera(0+(800*sin(frameCount*0.05)), 0, (height/2.0) / tan(PI*30.0 / 180.0)-300, 0, 0, 0, 0, 1, 0);

}

function moveCamera4() {

  let spectrum = fft.analyze();
  speedturn = map(spectrum[30], 0, 255, 0.002, 0.05);
  jitter = map(spectrum[30], 0, 255, 0, 70);
  console.log(speedturn);
  translate(random(jitter), random(jitter), random(jitter));
  rotateX(PI*frameCount*speedturn);
  camera(0+(800*sin(frameCount*0.05)), 0, (height/2.0) / tan(PI*30.0 / 180.0)-300, 0, 0, 0, 0, 1, 0);

}

function resetPosition(){
  camera(0, 0, 0,0, 0, 0, 0, 1, 0);

}

function keyPressed() {

  if (key === 'f' || key === 'F') {
    enterFullscreen();
  } else if (key === 'r' || key === 'R'){
    camera();
  }

}

function keyPressNum() {

   if (key === '1'){
    moveCamera();
  } else if (key === '2'){
    moveCamera2();
  } else if (key === '3'){
    moveCamera3();
  } else if (key === '4'){
    moveCamera4();
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

function touchStarted() {

  getAudioContext().resume()

}
