enquire.register("screen and (max-width: 480px)", {

	match : function() {
		//FRANCHISE VIEW
		$(".franchiseselectlist").addClass("franchiseslide");
		$( ".franchiseslide > a" ).click(function() {
			console.log("in fran click");
			$(".franchiseselectlist").css('display','none');
			$(".franchisecontent").css('display', 'block');
			$(".franchisecontent").css('width', '100%');
			$(".viewback").css('visibility', 'visible');
		});

		$( ".viewback").click(function() {
			console.log("X click");
			$(".franchiseselectlist").css('display','block');
			$(".franchisecontent").css('display', 'none');
			$(".viewback").css('visibility', 'hidden');
		});

	},
	unmatch : function() {
		console.log("unmatch");

		$(".franchiseselectlist").removeClass("franchiseslide");
		$(".franchiseselectlist").css('display','block');
		$(".viewback").css('visibility', 'hidden');

	}
*/
});

