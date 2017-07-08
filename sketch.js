function setup() {
  createCanvas(1140, 780);
  background(216,45,98);
}

function draw(){
  if (mouseIsPressed) {
    fill(178,0,45);
    stroke(56,219,230);
  } else {
    fill(255);
    stroke(56,219,230);
  }
  ellipse(mouseX,mouseY,80,80);
}
