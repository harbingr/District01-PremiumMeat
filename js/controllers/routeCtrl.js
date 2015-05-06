var servicepath = "http://franchise.district01.be/api/";
var PremiumMeat = angular.module('PremiumMeat')

	.controller('routeCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.currentPage = $location.path();
		console.log($scope.currentPage)
	}]);



