let numShapes = 1; // Only one shape per side to maintain the layout
let shapeSizeMin = 160; // Minimum size of the shapes
let shapeSizeMax = 240; // Maximum size of the shapes
let borderThicknessMin = 10; // Minimum border thickness
let borderThicknessMax = 30; // Maximum border thickness

function setup() {
  createCanvas(600, 300); // Canvas size to accommodate the two shapes
  
  // Background colors for the left and right sides
  let red = color(255, 0, 0); // Red background
  let blue = color(0, 0, 255); // Blue background
  let yellow = color(255, 255, 0); // Yellow border color
  
  // Left side (Square with Yellow Border)
  for (let i = 0; i < numShapes; i++) {
    fill(red);
    noStroke();
    rect(0, 0, width / 2, height); // Red background on the left

    let squareSize = random(shapeSizeMin, shapeSizeMax); // Random square size
    let xPos = width / 4 - squareSize / 2; // Centered horizontally
    let yPos = height / 2 - squareSize / 2; // Centered vertically
    fill(blue); // Blue square
    noStroke();
    rect(xPos, yPos, squareSize, squareSize); // Draw the square

    let borderThickness = random(borderThicknessMin, borderThicknessMax); // Randomize border thickness
    stroke(yellow);
    strokeWeight(borderThickness);
    noFill();
    rect(xPos, yPos, squareSize, squareSize); // Draw the yellow border around the square
  }

  // Right side (Circle with Yellow Border)
  for (let i = 0; i < numShapes; i++) {
    fill(blue);
    noStroke();
    rect(width / 2, 0, width / 2, height); // Blue background on the right
  
    let circleSize = random(shapeSizeMin, shapeSizeMax); // Random circle size
    let xPosCircle = width * 3 / 4; // Centered horizontally on the right side
    let yPosCircle = height / 2; // Centered vertically on the right side
    fill(red); // Red circle
    noStroke();
    ellipse(xPosCircle, yPosCircle, circleSize, circleSize); // Draw the circle
    
    // Randomize border thickness for the circle
    let borderThickness = random(borderThicknessMin, borderThicknessMax);
    stroke(yellow);
    strokeWeight(borderThickness);
    noFill();
    ellipse(xPosCircle, yPosCircle, circleSize, circleSize); // Draw the yellow border around the circle
  }
}

function draw() {
  // The drawing happens entirely in setup, so draw remains empty
}
