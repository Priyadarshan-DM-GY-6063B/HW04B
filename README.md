# Sol LeWitt – Wall Drawing #397, 1983 (Recreation)

## About the Artwork

## Objective

The goal of this project is to recreate the elements of Sol LeWitt’s **Wall Drawing #397** using p5.js. This version includes a square and a circle with randomly adjusted sizes and borders, which reflects the original drawing’s minimalist yet complex design. The use of `for()` loops and `random()` ensures that each time the drawing is generated, it will have unique characteristics based on randomized parameters.

## Features

- **Shapes**: A red square and blue circle on two backgrounds.
- **Randomization**: The size of the shapes and their border thickness are randomized, making each execution of the program yield a unique output.
- **p5.js Implementation**: The code utilizes the `for()` loop and `random()` functions to generate the shapes and make the drawing dynamic.

## Code Explanation

- **`setup()` Function**: The main logic for creating the shapes is written in the `setup()` function. It generates a red square on a blue background for the left side and a blue circle on a red background for the right side of the canvas.
  
- **For Loops**: The `for()` loop is used to generate shapes. Although `numShapes` is set to `1`, the loop structure allows flexibility in case more shapes need to be added in the future.

- **Randomization**: The size of the shapes (`squareSize` and `circleSize`) and their border thickness are randomized each time the sketch runs.

