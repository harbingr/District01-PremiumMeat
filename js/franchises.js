
var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('TabsCtrl', function ($scope, $window, $http) {
	$scope.franchises = [];
	$http.get(servicepath + 'franchises/nl.json').then(function(res){
		$scope.franchises = res.data;
	});
	console.log($scope.franchises);
});
