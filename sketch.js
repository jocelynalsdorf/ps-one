function setup() {
  createCanvas(1140, 780);
  background(216,45,98);
}

function draw(){
  if (mouseIsPressed) {
    fill(178,0,45);
  } else {
    fill(255);
  }
  ellipse(mouseX,mouseY,80,80);
}
