let yOffset = 0; // Offset for the wave

function setup() {
  createCanvas(200, 800);
}

function draw() {
  background(0); // Clear the canvas on every frame
  
  stroke(255);
  noFill();
  
  beginShape();
  strokeWeight(1)
  for (let y = 0; y <= height; y++) { // Loop vertically
    let x = width / 2 + sin(yOffset + y * 0.05) * 2; // Calculate x using sine wave
    vertex(x, y); // Add vertex point
  }
  endShape();
  beginShape();
  for (let y = 0; y <= height; y++) { // Loop vertically
    let x = width / 2 + 5 + cos(yOffset + y * 0.03) * 3; // Calculate x using sine wave
    vertex(x, y); // Add vertex point
  }
  endShape();

  yOffset += 0.02; // Increment the wave offset to animate
}