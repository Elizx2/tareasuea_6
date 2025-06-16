let luces = 0;
let ondas = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0, 30);
  textSize(50);
  fill(255);
  text("Presiona Q o W", 40, 80);

  // --- Q: Estallido de líneas (impulso súbito) ---
  if (keyIsDown(81)) { // Q
    luces += 1;
    drawBurst(luces);
  } else {
    luces = 0;
  }

  // --- W: Oleaje emocional ---
  if (keyIsDown(87)) { // W
    ondas += 1;
    drawWave(ondas);
  } else {
    ondas = 0;
  }
}

function drawBurst(intensity) {
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < 360; i += 10) {
    let len = sin(frameCount * 5 + i * 10) * (100 + intensity * 2);
    stroke(random(255), random(255), random(255), 180);
    strokeWeight(2);
    line(0, 0, cos(i) * len, sin(i) * len);
  }
  pop();
}

function drawWave(intensity) {
  noFill();
  strokeWeight(3);
  translate(width / 2, height / 2);

  for (let r = 0; r < 200 + intensity; r += 10) {
    let offset = frameCount * 0.5 + r;
    let col = color(
      sin(offset * 0.1) * 127 + 128,
      sin(offset * 0.13 + 2) * 127 + 128,
      sin(offset * 0.15 + 4) * 127 + 128,
      150
    );
    stroke(col);
    beginShape();
    for (let angle = 0; angle < 360; angle += 10) {
      let rad = r + sin(angle * 3 + frameCount * 2) * 10;
      let x = cos(angle) * rad;
      let y = sin(angle) * rad;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

