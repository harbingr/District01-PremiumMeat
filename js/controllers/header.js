angular.module('PremiumMeat')
.controller('HeaderCtrl', function ($scope, $http) {
	$scope.status = {navActive: false};
	$scope.collapse = function collapse(){
		$scope.status.navActive = false;
	};
});

