angular.module("PremiumMeat").controller('contactController', function($scope, $stateParams) {

		console.log($stateParams.onderwerp);
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