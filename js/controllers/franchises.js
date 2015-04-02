
var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('FranchisesCtrl', function ($scope, $window, $http) {
	$scope.franchises = [];
	$http.get(servicepath + 'franchises/nl.json').then(function(res){
		$scope.franchises = res.data;
	});
});
