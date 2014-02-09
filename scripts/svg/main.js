$(document).ready(function() {
	
	var s = Snap("#svg");

	function lightOn() {
		this.attr({
			fill: "#ff0000"
		});
	}

	function lightOff() {
		this.attr({
			fill: "#ffff00"
		});
	}


	Snap.load("../assets/svg/robot-test.svg", function(frag) {
		var g = frag.select("g");
		g.select("#light-group").hover(lightOn, lightOff);
			// .animate({
			// 	fill
			// } 200);
		g.select("#light-2").hover(lightOn, lightOff);
		g.select("#light-3").hover(lightOn, lightOff);
		// g.select("#light-2").hover(lightOn('#00ffff'), lightOff('#00ffff'));
		// g.select("#light-3").hover(lightOn('#00ff00'), lightOff('#00ff00'));
		
		g.drag();

		s.append(g);
	});

});