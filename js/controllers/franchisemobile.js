angular.module('PremiumMeat')
	.controller('franchiseMobileCtrl', function ($scope, $http) {

	$scope.status = {franchiseActive: false};

	$scope.franchisecollapse = function franchisecollapse () {
		$scope.status.franchiseActive = false;
	};
});

