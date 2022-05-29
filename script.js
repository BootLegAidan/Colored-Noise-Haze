var seed = "seed";
var resolution = 5;
var size = 250;
var positionChange = 250;
var morphChange = 50;
var colorChange = 0.5;

var tick = 0;
var simplex = new SimplexNoise(seed);
var c = document.getElementsByTagName("canvas")[0];
var ctx = c.getContext("2d");
c.width = size;
c.height = size;
var redToggle = document.getElementById("red");
var greenToggle = document.getElementById("green");
var blueToggle = document.getElementById("blue");

function draw() {
	tick++;
	for (i = 0; i < size; i += resolution) {
		for (j = 0; j < size; j += resolution) {
			value = simplex.noise3D(
				i / positionChange,
				j / positionChange,
				tick / morphChange
			);
			ctx.fillStyle = `rgb(${makeColor(1)},${makeColor(2)},${makeColor(3)})`;
			ctx.fillRect(i, j, resolution, resolution);
		}
	}
}

setInterval(draw, 100);
function makeColor(color) {
	if (color == 1) {
		if (!redToggle.checked) {
			return 0;
		}
	}
	if (color == 2) {
		if (!greenToggle.checked) {
			return 0;
		}
	}
	if (color == 3) {
		if (!blueToggle.checked) {
			return 0;
		}
	}
	return (
		Math.abs(
			simplex.noise3D(
				i / positionChange,
				j / positionChange,
				colorChange * color + tick / morphChange
			)
		) * 255
	);
}