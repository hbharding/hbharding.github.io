$(document).ready(function() {
	
	var s = Snap("#svg");

	Snap.load("../assets/svg/isl-logo.svg", function(frag) {
		
		var logo  = frag.select("g"),
				paths = logo.selectAll("path");

		paths.attr({
			"stroke" : "#E1FF03",
			// "stroke" : "#FF00F5",

			"fill": "#00FFA3",
			// "fill": "#ffffff",
			"fill-opacity": "0",
			// "stroke-opacity": 1,
			"stroke-width" : 2,
			"stroke-dasharray" : 500,
			"stroke-dashoffset" : 500
		});

	  for (var i = 0; i < paths.length; i++) {
	  	var l = paths[i].getTotalLength();
	  	var path = paths[i];
	  	path.attr({
	  		// "stroke-opacity" : 1,
	  		"stroke-dasharray" : l*2,
	  		"stroke-dashoffset" : l
	  	});
	  	path.animate({
	  		// "stroke-opacity" : 1,
	  		"stroke-dasharray" : l*2,
	  		"stroke-dashoffset" : l*2
	  	}, 4000)
	  	.animate({
	  		"fill-opacity" : 1
	  	}, 2000);

	  	// setTimeout(function(){
	  	// 	blah.animate({	
	  	// 	"fill-opacity" : 1
	  	// 	}, 4000);
	  	// }, 2000);
	  	
	  }
			
		s.append(logo);

		$("#container").css({
			"background": "rgba(0,0,0,.8)"
		}, 2000);

		


		// 		robot = g.select("#robot"),
		// 		lights = {
		// 			red    : g.select("#red-light"),
		// 			yellow : g.select("#yellow-light"),
		// 			green  : g.select("#green-light")
		// 		},
		// 		wire = g.select("#wire"),
		// 		wireConfig = {
		// 			from : wire.attr("d"),
		// 			to : "M-220,48.188 c0,0,379.637,1.812,594.471,1.812s594.196-1.812,594.196-1.812"
		// 		};


		// wire.animate({ 'd' : wireConfig.to }, 500, mina.easeout);
		// robot.animate({ 'transform' : 't0 -50'}, 500, mina.easeinout);
		
	});

});