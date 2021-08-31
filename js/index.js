$(window).keyup(function (e) {
	if (e.which === 32) {
		var randomColor = "#000000".replace(/0/g, function () {
			return (~~(Math.random() * 16)).toString(16);
		});
		$("body").css("background-color", randomColor);
		$("h1").text(randomColor.toUpperCase());

		var r = parseInt(randomColor.substr(1, 2), 16);
		var g = parseInt(randomColor.substr(3, 2), 16);
		var b = parseInt(randomColor.substr(5, 2), 16);
		var light = rgbToHsl(r, g, b);
		// console.log(light);
		if (light * 100 <= 50) {
			$("h1").css("color", "white");
			$("span").css("color", "white");
			$("a").css("color", "white");
		} else {
			$("h1").css("color", "black");
			$("span").css("color", "black");
			$("a").css("color", "black");
		}
	}
});

$(document.body).ready(function () {
	$("h1").text("Press the spacebar");
});

function rgbToHsl(r, g, b) {
	(r /= 255), (g /= 255), (b /= 255);
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b);

	l = (max + min) / 2;

	return l;
}
