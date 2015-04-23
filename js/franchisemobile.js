enquire.register("screen and (max-width: 480px)", {

	match : function() {
		console.log("match")

		//MENU COLLAPSE
		var nav = document.getElementById("nav");
		if (nav.style.display != 'none' ) {nav.style.display = 'none';}
		nav.addEventListener(collapse);

		function collapse(){
			console.log("collapsed!");
			if (nav.style.display != 'none' ) {nav.style.display = 'none';}
		}

		//FRANCHISE VIEW
		$(".franchiseselectlist").addClass("franchiseslide");
		$( ".franchiseslide > a" ).click(function() {
			console.log("in fran click");
			$(".franchiseselectlist").css('display','none');
			$(".franchisecontent").css('visibility', 'visible');
			$(".viewback").css('visibility', 'visible');
		});

		$( ".viewback").click(function() {
			console.log("X click");
			$(".franchiseselectlist").css('display','block');
			$(".franchisecontent").css('visibility', 'hidden');
			$(".viewback").css('visibility', 'hidden');
		});

	},
	unmatch : function() {
		console.log("unmatch");

		var nav = document.getElementById("nav");
		if (nav.style.display = 'none' ) {nav.style.display = 'block';}
		nav.removeListener(collapse);

		$(".franchiseselectlist").removeClass("franchiseslide");
		$(".franchiseselectlist").css('display','block');
		$(".viewback").css('visibility', 'hidden');
	}
});

