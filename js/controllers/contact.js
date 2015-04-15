angular.module("PremiumMeat").controller('contactController', function($scope) {
	$scope.submitForm = function(isValid) {
		if (isValid) {
			alert('our form is amazing');
		}
	};
});