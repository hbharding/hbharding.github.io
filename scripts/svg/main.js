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

	Snap.load("../assets/svg/robot-test2.svg", function(frag) {
		
		var g = frag.select("g"),
				robot = g.select("#robot"),
				lights = {
					red    : g.select("#red-light"),
					yellow : g.select("#yellow-light"),
					green  : g.select("#green-light")
				},
				wire = g.select("#wire"),
				wireConfig = {
					from : wire.attr("d"),
					to : "M-220,48.188 c0,0,379.637,1.812,594.471,1.812s594.196-1.812,594.196-1.812"
				};

				// $("#svg").addEventListener('mouseenter', function() {
				// 	console.log("yay");
				// });

	wire.animate({ 'd' : wireConfig.to }, 500, mina.easeout);
					robot.animate({ 'transform' : 't0 -50'}, 500, mina.easeinout);

				console.log(robot);

				robot.mouseover(function() {
					wire.animate({ 'd' : wireConfig.to }, 500, mina.easeout);
					robot.animate({ 'transform' : 't0 -50'}, 500, mina.easeout);
				});

				robot.mouseout(function() {
					wire.animate({ 'd' : wireConfig.from }, 500, mina.easeout);
					robot.animate({ 'transform' : 't0 0'}, 500, mina.easeout);
				});

				// wire.animate({ 'path' : wireConfig.to }, 2000s);


		lights.red.hover(lightOn, lightOff);
		lights.yellow.hover(lightOn, lightOff);
		lights.green.hover(lightOn, lightOff);
		s.append(g);
	});

});