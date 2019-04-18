
function drawBackground() {

  let colorInterval = 150;
  if (frameCount % colorInterval == 0) {
    bgFrom = bgTo;
  }

  let t = map(frameCount % colorInterval, 0, colorInterval, 0, 1);
  let col = lerpColor(bgFrom, bgTo, t)
  background(col, 150);

}
