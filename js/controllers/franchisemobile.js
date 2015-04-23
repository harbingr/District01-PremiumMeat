angular.module('PremiumMeat')
	.controller('franchiseMobileCtrl', function ($scope, $http) {

	$scope.status = {franchiseActive: false};

	$scope.franchisecollapse = function franchisecollapse () {
		console.log('fran mobile');
		$scope.status.franchiseActive = false;
		console.log($scope.status.franchiseActive);
	};
});

