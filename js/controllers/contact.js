angular.module("PremiumMeat").controller('contactController', function($scope) {
		console.log("form val");
		//alert('form val alert');
	$scope.submitForm = function(isValid) {
		if (isValid) {
			alert('our form is amazing');
		};
	};
});