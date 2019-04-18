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
  	push();
    let y = sin(frameCount*this.speed)*10;
    translate(this.x, this.y +y, this.z);
    ambientMaterial(this.col);
    if(this.type === 0) {
      box(10);
    } else if(this.type === 1){
      sphere(6);
    }
    pop();
  }
}