//$scope.selectedTab

//https://alexfeinberg.wordpress.com/2014/03/08/dynamically-populating-angular-ui-router-states-from-a-service/

var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('FranchisesCtrl', function ($scope, $window, $http) {

	$scope.franchises = [];
	$scope.selectedImg = {};
	//$scope.selectedImg = 'lorempixel.com/output/city-q-c-400-300-1.jpg';

	$http.get(servicepath + 'franchises/nl.json').then(function(res){
		$scope.franchises = res.data;

		//$scope.selectedImg = $scope.franchises[0].images[0].list;

		//console.log($scope.franchises[0].name);
		//console.log($scope.franchises[0].description);
		//console.log($scope.franchises[0].images[0].list);
		//console.log($scope.franchises[0].location[0].long);
		//console.log($scope.franchises[0].location[0].lat);
	});
});
