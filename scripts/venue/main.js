$(document).ready(function() {
	
	
	var s = Snap("svg");

	Snap.load("../assets/svg/venue-cut.svg", function(frag) {
		var g = frag.selectAll("g");
		var tones = frag.select("#tones");
		var rings = frag.select("#rings");
		var sections = frag.select("#sections");
		var webSection = sections.selectAll("#webSection path");
		var appSection = sections.selectAll("#appSection path");
		var dbSection = sections.selectAll("#dbSection path");

		function initPerform(element, index, array) {
			var c = element.getTotalLength();

			var starSpin = function () {
			    logoStar.attr({rotation: 0}).animate({rotation: 360}, 5000, starSpin);
			}

			var speed = function() {
				var num = Math.floor(Math.random()*10);
				switch (num) {
					case 0 : 
						return 10000;
					case 1 :
						return 20000;
					case 2 :
						return 30000;
					case 3 :
						return 40000;
					case 4 :
						return 50000;
					case 5 :
						return 60000;
					case 6 :
						return 70000;
					case 7 :
						return 80000;
					case 8 :
						return 90000;
					case 9 :
						return 100000;
				}
			};

			var perform = function() {
				element.attr({
					"stroke-dasharray": c,
					"stroke-dashoffset": c,
					"stroke-width": "9px"
				})
				.animate({
					"stroke-dasharray": c*2,
					"stroke-offset": c
				}, speed(), perform);
			};

			element.attr({
				"stroke-dasharray": c,
				"stroke-dashoffset": c,
				"stroke-width": "9px"
			}, perform());

		}

		appSection.forEach(initPerform); 
		dbSection.forEach(initPerform); 
		webSection.forEach(initPerform); 


		rings.selectAll("path").attr({
			"opacity" : .5
		});

		s.append(rings);
		s.append(sections);
		s.append(tones);
		// s.append(g);
	});


	// var snap = Snap("#svg2");

	// if (snap) {
	// 	Snap.load("../assets/svg/isl-logo-2-edited.svg", function(frag) {
			

	// 		// SELECT
	// 		var shield = frag.select("#shield"),
	// 				type = frag.select("#type"),
	// 				charI = frag.select("#I"),
	// 				charS = {
	// 					"one"   : frag.select("#s1"),
	// 					"two"   : frag.select("#s2"),
	// 					"three" : frag.select("#s3")
	// 				},
	// 				charL = frag.select("#L");
	// 				lengths = {
	// 					"shield" : shield.getTotalLength(),
	// 					"i"  : charI.getTotalLength(),
	// 					"s1" : charS.one.getTotalLength(),
	// 					"s2" : charS.two.getTotalLength(),
	// 					"s3" : charS.three.getTotalLength(),
	// 					"l"  : charL.getTotalLength()
	// 				};

	// 		// ATTRIBUTE VARS
	// 		var strokewidth = 2,
	// 				strokecolor = "#00E0FF";

	// 		shield.attr({
	// 			"fill-opacity" 			: 0,
	// 			"stroke"						: strokecolor,
	// 			"stroke-width" 			: 5,
	// 			"stroke-dasharray" 	: lengths.shield*2,
	// 			"stroke-dashoffset" : lengths.shield
	// 		});
	// 		charI.attr({
	// 			"fill-opacity" 			: 0,
	// 			"stroke-width" 			: 2,
	// 			"stroke"						: strokecolor,
	// 			"stroke-dasharray" 	: lengths.i*2,
	// 			"stroke-dashoffset" : lengths.i
	// 		});
	// 		charS.one.attr({
	// 			"fill-opacity" 			: 0,
	// 			"stroke-width" 			: 2,
	// 			"stroke"						: strokecolor,
	// 			"stroke-dasharray" 	: lengths.s1*2,
	// 			"stroke-dashoffset" : lengths.s1
	// 		});
	// 		charS.two.attr({
	// 			"fill-opacity" 			: 0,
	// 			"stroke-width" 			: 2,
	// 			"stroke"						: strokecolor,
	// 			"stroke-dasharray" 	: lengths.s2*2,
	// 			"stroke-dashoffset" : lengths.s2
	// 		});
	// 		charS.three.attr({
	// 			"fill-opacity" 			: 0,
	// 			"stroke-width" 			: 2,
	// 			"stroke"						: strokecolor,
	// 			"stroke-dasharray" 	: lengths.s3*2,
	// 			"stroke-dashoffset" : lengths.s3
	// 		});
	// 		charL.attr({
	// 			"fill-opacity" 			: 0,
	// 			"stroke-width" 			: 2,
	// 			"stroke"						: strokecolor,
	// 			"stroke-dasharray" 	: lengths.l*2,
	// 			"stroke-dashoffset" : lengths.l
	// 		});
			
	// 		var dur = 2000;
	// 		var easing = mina.easeinout;

	// 		shield.hover(
	// 			//enter
	// 			function() {
	// 				shield.animate({
	// 					"fill-opacity" : 1,
	// 					"stroke-dasharray" 	: lengths.shield,
	// 					"stroke-dashoffset" : lengths.shield
	// 				}, dur, easing);
	// 				charI.animate({
	// 					"fill-opacity" : 1,
	// 					"stroke-dasharray" 	: lengths.i,
	// 					"stroke-dashoffset" : lengths.i
	// 				}, dur, easing);	
	// 				charS.one.animate({
	// 					"fill-opacity" : 1,
	// 					"stroke-dasharray" 	: lengths.s1,
	// 					"stroke-dashoffset" : lengths.s1
	// 				}, dur, easing);
	// 				charS.two.animate({
	// 					"fill-opacity" : 1,
	// 					"stroke-dasharray" 	: lengths.s2,
	// 					"stroke-dashoffset" : lengths.s2
	// 				}, dur, easing);	
	// 				charS.three.animate({
	// 					"fill-opacity" : 1,
	// 					"stroke-dasharray" 	: lengths.s3,
	// 					"stroke-dashoffset" : lengths.s3
	// 				}, dur, easing);
	// 				charL.animate({
	// 					"fill-opacity" : 1,
	// 					"stroke-dasharray" 	: lengths.l,
	// 					"stroke-dashoffset" : lengths.l
	// 				}, dur, easing);


	// 			},
	// 			//exit
	// 			function() {
	// 				shield.animate({
	// 					"fill-opacity" : 0,
	// 					"stroke-dasharray" 	: lengths.shield*2,
	// 					"stroke-dashoffset" : lengths.shield
	// 				}, dur, easing);
	// 				charI.animate({
	// 					"fill-opacity" : 0,
	// 					"stroke-dasharray" 	: lengths.i*2,
	// 					"stroke-dashoffset" : lengths.i
	// 				}, dur, easing);
	// 				charS.one.animate({
	// 					"fill-opacity" : 0,
	// 					"stroke-dasharray" 	: lengths.s1*2,
	// 					"stroke-dashoffset" : lengths.s1
	// 				}, dur, easing);
	// 				charS.two.animate({
	// 					"fill-opacity" : 0,
	// 					"stroke-dasharray" 	: lengths.s2*2,
	// 					"stroke-dashoffset" : lengths.s2
	// 				}, dur, easing);	
	// 				charS.three.animate({
	// 					"fill-opacity" : 0,
	// 					"stroke-dasharray" 	: lengths.s3*2,
	// 					"stroke-dashoffset" : lengths.s3
	// 				}, dur, easing);
	// 				charL.animate({
	// 					"fill-opacity" : 0,
	// 					"stroke-dasharray" 	: lengths.l*2,
	// 					"stroke-dashoffset" : lengths.l
	// 				}, dur, easing);
	// 			}
	// 		);
	// 		snap.append(shield);
	// 		snap.append(type);
	// 	});
	// }

	

});