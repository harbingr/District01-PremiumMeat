angular.module("PremiumMeat").controller('contactController', function($scope, $stateParams) {

		$scope.map = { center: { latitude: 51.2, longitude: 4.4}, zoom: 10 };
		$scope.contactform = {};
		$scope.contactform.onderwerp = $stateParams.onderwerp;

	$scope.submitForm = function(isValid) {

		$scope.hideForm = false;

		if (isValid) {
			if ($scope.userForm.name.$valid == true) {
				$scope.hideForm = true;
			};
		};
	};
});