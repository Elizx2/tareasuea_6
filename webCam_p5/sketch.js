let capture;

function setup() {
  createCanvas(1000, 1000);
  capture = createCapture (VIDEO, {flipped: true});
  capture.size (400, 400);
  capture.hide ();
}

function draw() {
  background(220);
  imageMode(CENTER)
  image (capture, 0, 0);
}
