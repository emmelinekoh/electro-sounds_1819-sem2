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
		
		let spectrum = fft.analyze();
		let bxsz = map(spectrum[30], 0, 255, 2, 30);
		let bxspd = map(spectrum[30], 0, 255, 0.005, 0.8);
		let spdp = map(spectrum[40], 0, 255, 0, 20);
  	push();
    let y = sin(frameCount*this.speed)*10;
    translate(this.x, this.y +y, this.z);
    ambientMaterial(this.col);

		if(this.type === 0) {
			rotateY(PI/2*frameCount*bxspd);
			rotateX(PI/2*frameCount*bxspd/2);
			translate(random(spdp*2), random(spdp*0.5), random(spdp));
      box(bxsz);
    } else if(this.type === 1){
			translate(random(spdp), random(spdp), random(spdp));
      sphere(6);
    }
    pop();
  }

}
