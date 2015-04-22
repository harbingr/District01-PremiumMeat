enquire.register("screen and (max-width: 480px)", {
	match : function() {
		console.log("match")
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
		});

	},
	unmatch : function() {
		console.log("unmatch");
		$(".franchiseslide").removeClass("franchiseslide");
		$(".viewback").css('visibility', 'hidden');
	}
});

