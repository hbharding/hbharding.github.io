$(document).ready(function() {
	
	var s = Snap("#svg");

	function lightOn() {
		this.attr({
			opacity: 1
		});
	}

	function lightOff() {
		this.attr({
			opacity: 0
		});
	}

	Snap.load("../assets/svg/robot-test.svg", function(frag) {
		var g = frag.select("g");
		// g.select("#light-group").hover(lightOn, lightOff);
			// .animate({
			// 	fill
			// } 200);
		g.select("#red-light").hover(lightOn, lightOff);
		g.select("#yellow-light").hover(lightOn, lightOff);
		g.select("#green-light").hover(lightOn, lightOff);
		// g.select("#light-3").hover(lightOn, lightOff);
		// g.select("#light-2").hover(lightOn('#00ffff'), lightOff('#00ffff'));
		// g.select("#light-3").hover(lightOn('#00ff00'), lightOff('#00ff00'));
	
		s.append(g);
	});

});