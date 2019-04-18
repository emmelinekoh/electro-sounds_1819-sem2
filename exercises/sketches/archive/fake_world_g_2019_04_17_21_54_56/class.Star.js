class Star {
  constructor(theX,theY,theZ) {
    this.x = theX
    this.y = theY
    this.z = theZ
    this.a = 0;
    
  }
  
  update() {
    this.z -= 5;
    if(this.z< -400) {
      this.z = random(500,800);
      this.a = 0;
    }
    this.a += 4;
    this.a = min(this.a, 255);
  }
  
  show() {
    fill(255, this.a);
    noStroke();
    push();
    translate(this.x, this.y, -this.z);
    //ellipse(0,0,8,8);
    //box(20,20,100)
    sphere(3,24,16);
    pop();
    
  }
}