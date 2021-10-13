let myHue = chroma('pink').darken().rgb();

let myGradient = chroma.scale(['blue', 'orange']);
console.log(myHue);
console.log(myGradient(1).rgb());

function setup() {
	createCanvas(400, 300);
}

function draw() {
	background(myHue);

	noStroke();

	let g = sin(frameCount/60);
	for(let i = 0; i<width; i+= 10) {
		ellipse(i, height/2 + sin(frameCount/30 + i/ width*TAU)*100, 50, 50);
	fill(myGradient(i/width).rgb());
	ellipse(i, height/2, 50, 50);
}

	fill(myGradient(mouseX/ width).rgb());
	ellipse(mouseX, mouseY, 50);
}