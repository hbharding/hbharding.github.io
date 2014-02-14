$(document).ready(function() {
	
	var s = Snap("#svg");
	Snap.load("../assets/svg/isl-logo-1.svg", function(frag) {	
		var logo  = frag.select("g"),
				paths = logo.selectAll("path");

		paths.attr({
			"stroke" : "#E1FF03",
			"fill": "#00FFA3",
			"fill-opacity": "0",
			"stroke-width" : 2,
			"stroke-dasharray" : 500,
			"stroke-dashoffset" : 500
		});

	  for (var i = 0; i < paths.length; i++) {
	  	var l = paths[i].getTotalLength();
	  	var path = paths[i];
	  	path.attr({
	  		"stroke-dasharray" : l*2,
	  		"stroke-dashoffset" : l
	  	});
	  	path.animate({
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
			// "background": "rgba(0,0,0,.8)"
		}, 2000);
	});


	/////////////////////////////////////////
	// svg 2
	/////////////////////////////////////////

	var snap = Snap("#svg2");

	if (snap) {
		Snap.load("../assets/svg/isl-logo-2-edited.svg", function(frag) {
			

			// SELECT
			var shield = frag.select("#shield"),
					type = frag.select("#type"),
					charI = frag.select("#I"),
					charS = {
						"one"   : frag.select("#s1"),
						"two"   : frag.select("#s2"),
						"three" : frag.select("#s3")
					},
					charL = frag.select("#L");
					lengths = {
						"shield" : shield.getTotalLength(),
						"i"  : charI.getTotalLength(),
						"s1" : charS.one.getTotalLength(),
						"s2" : charS.two.getTotalLength(),
						"s3" : charS.three.getTotalLength(),
						"l"  : charL.getTotalLength()
					};

			// ATTRIBUTE VARS
			var strokewidth = 2,
					strokecolor = "#00E0FF";

			shield.attr({
				"fill-opacity" 			: 0,
				"stroke"						: strokecolor,
				"stroke-width" 			: 5,
				"stroke-dasharray" 	: lengths.shield*2,
				"stroke-dashoffset" : lengths.shield
			});
			charI.attr({
				"fill-opacity" 			: 0,
				"stroke-width" 			: 2,
				"stroke"						: strokecolor,
				"stroke-dasharray" 	: lengths.i*2,
				"stroke-dashoffset" : lengths.i
			});
			charS.one.attr({
				"fill-opacity" 			: 0,
				"stroke-width" 			: 2,
				"stroke"						: strokecolor,
				"stroke-dasharray" 	: lengths.s1*2,
				"stroke-dashoffset" : lengths.s1
			});
			charS.two.attr({
				"fill-opacity" 			: 0,
				"stroke-width" 			: 2,
				"stroke"						: strokecolor,
				"stroke-dasharray" 	: lengths.s2*2,
				"stroke-dashoffset" : lengths.s2
			});
			charS.three.attr({
				"fill-opacity" 			: 0,
				"stroke-width" 			: 2,
				"stroke"						: strokecolor,
				"stroke-dasharray" 	: lengths.s3*2,
				"stroke-dashoffset" : lengths.s3
			});
			charL.attr({
				"fill-opacity" 			: 0,
				"stroke-width" 			: 2,
				"stroke"						: strokecolor,
				"stroke-dasharray" 	: lengths.l*2,
				"stroke-dashoffset" : lengths.l
			});
			
			var dur = 2000;
			var easing = mina.easeinout;

			shield.hover(
				//enter
				function() {
					shield.animate({
						"fill-opacity" : 1,
						"stroke-dasharray" 	: lengths.shield,
						"stroke-dashoffset" : lengths.shield
					}, dur, easing);
					charI.animate({
						"fill-opacity" : 1,
						"stroke-dasharray" 	: lengths.i,
						"stroke-dashoffset" : lengths.i
					}, dur, easing);	
					charS.one.animate({
						"fill-opacity" : 1,
						"stroke-dasharray" 	: lengths.s1,
						"stroke-dashoffset" : lengths.s1
					}, dur, easing);
					charS.two.animate({
						"fill-opacity" : 1,
						"stroke-dasharray" 	: lengths.s2,
						"stroke-dashoffset" : lengths.s2
					}, dur, easing);	
					charS.three.animate({
						"fill-opacity" : 1,
						"stroke-dasharray" 	: lengths.s3,
						"stroke-dashoffset" : lengths.s3
					}, dur, easing);
					charL.animate({
						"fill-opacity" : 1,
						"stroke-dasharray" 	: lengths.l,
						"stroke-dashoffset" : lengths.l
					}, dur, easing);


				},
				//exit
				function() {
					shield.animate({
						"fill-opacity" : 0,
						"stroke-dasharray" 	: lengths.shield*2,
						"stroke-dashoffset" : lengths.shield
					}, dur, easing);
					charI.animate({
						"fill-opacity" : 0,
						"stroke-dasharray" 	: lengths.i*2,
						"stroke-dashoffset" : lengths.i
					}, dur, easing);
					charS.one.animate({
						"fill-opacity" : 0,
						"stroke-dasharray" 	: lengths.s1*2,
						"stroke-dashoffset" : lengths.s1
					}, dur, easing);
					charS.two.animate({
						"fill-opacity" : 0,
						"stroke-dasharray" 	: lengths.s2*2,
						"stroke-dashoffset" : lengths.s2
					}, dur, easing);	
					charS.three.animate({
						"fill-opacity" : 0,
						"stroke-dasharray" 	: lengths.s3*2,
						"stroke-dashoffset" : lengths.s3
					}, dur, easing);
					charL.animate({
						"fill-opacity" : 0,
						"stroke-dasharray" 	: lengths.l*2,
						"stroke-dashoffset" : lengths.l
					}, dur, easing);
				}
			);
			snap.append(shield);
			snap.append(type);
		});
	}

	

});