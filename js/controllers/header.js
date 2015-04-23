angular.module('PremiumMeat')
.controller('HeaderCtrl', function ($scope, $http) {
	$scope.status = {navActive: false};

	$scope.collapse = function collapse(){
		console.log('collapsing');
		$scope.status.navActive = false;
	};
});

