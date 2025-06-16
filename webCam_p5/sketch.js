let capture;

function setup() {
  createCanvas(1000, 1000);
  capture = createCapture (VIDEO, {flipped: true});
  capture.size (400, 400);
  capture.hide ();
}

function draw() {
  background(220);
  translate (width/2, height/2);
  image (capture, windowWidth*5, windowHeight*5 , 400,  800);
}
