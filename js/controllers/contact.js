angular.module("PremiumMeat").controller('contactController', function($scope) {
	$scope.submitForm = function(isValid) {
		$scope.hideForm = false;
		if (isValid) {
			if ($scope.userForm.name.$valid == true) {
				$scope.hideForm = true;
			};
		};
	};
});