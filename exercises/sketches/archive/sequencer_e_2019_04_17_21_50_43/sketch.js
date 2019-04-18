let steps = []
let index = 0
//let t0;
let t0 = new Tone.MembraneSynth();
//var reverb = new Tone.JCReverb(0.4).connect(Tone.Master);
//var delay = new Tone.FeedbackDelay(0.01).connect(Tone.Master);

function setup() {
  createCanvas(600,600);
  noStroke();
  for (let i=0;i<8;i++) {
    steps[i] = i%3
  }
  console.log(steps);
//  let n = 10;
//  console.log('i can fit number 8', floor(n/8), 'times into number', n, 'and the remainder is', n%8);
//  t0 = new Tone.MembraneSynth().chain(reverb)
	t0.oscillator.type = 'sine';
//  t0.envelope.attack = 1.1;
//  t0.envelope.decay = 0.1;
//  t0.envelope.sustain = 0.1;
//  t0.envelope.release = 0.1;
  t0.toMaster();
}

function draw() {
  
  background(0,128,128);
  push();
  translate(100,200)
  for (let i=0;i<8;i++) {
    if(i==index) {
      fill(123,0,128,140);
    } else {
      fill(255);
    }
    rect(0,0,40,40);
    translate(50,0);
  }
  pop();
  
  if (frameCount % 16 === 0) {
  index = index + 1
  if(index == 8) {
    index = 0;
    newBeat();
 		}
    triggerSound(steps[index]);
  }
  
function newBeat() {
	for (let i=0;i<8;i++){
    steps [i] = floor(map(random(),0,1,1,5));
  }
}
    
  
function triggerSound(theIndex) {
  if(theIndex === 0) {
    t0.triggerAttackRelease('G4','4n');
	} else if (theIndex === 1) {
  	t0.triggerAttackRelease('F3','16n');
	}	else if (theIndex === 2) {
  	t0.triggerAttackRelease('C5','16n');
	}	else if (theIndex === 3) {
  	t0.triggerAttackRelease('B3','16n');
		}
	}
}