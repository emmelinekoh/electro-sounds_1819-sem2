
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