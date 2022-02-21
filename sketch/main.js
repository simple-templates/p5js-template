// This example is from the official p5js examples:
// https://p5js.org/examples/interaction-kaleidoscope.html

// Symmetry corresponding to the number of reflections. Change the number for different number of reflections
let symmetry = 6;

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function setup() {
	createCanvas(self.innerWidth, self.innerHeight-32);
	angleMode(DEGREES);
	background(255);

	// Creating the clear screen button
	clearButton = createButton("clear");
	clearButton.mousePressed(clearScreen);

	// Creating the button for Full Screen
	fullscreenButton = createButton("Full Screen");
	fullscreenButton.mousePressed(screenFull);

	// Setting up the slider for the thickness of the brush
	brushSizeSlider = createButton("Brush Size Slider");
	sizeSlider = createSlider(1, 32, 4, 0.1);
}

// Clear Screen function
function clearScreen() {
	background(255);
}

// Full Screen Function
function screenFull() {
	let fs = fullscreen();
	fullscreen(!fs);
}

function draw() {
	translate(width / 2, height / 2);

	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
		let mx = mouseX - width / 2;
		let my = mouseY - height / 2;
		let pmx = pmouseX - width / 2;
		let pmy = pmouseY - height / 2;

		if (mouseIsPressed) {
			for (let i = 0; i < symmetry; i++) {
				rotate(angle);
				let sw = sizeSlider.value();
				strokeWeight(sw);
				line(mx, my, pmx, pmy);
				push();
				scale(1, -1);
				line(mx, my, pmx, pmy);
				pop();
			}
		}
	}
}
