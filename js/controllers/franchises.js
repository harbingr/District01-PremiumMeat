//$scope.selectedTab

//https://alexfeinberg.wordpress.com/2014/03/08/dynamically-populating-angular-ui-router-states-from-a-service/

var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('FranchisesCtrl', function ($scope, $window, $http) {
	//, $stateParams
	$scope.franchises = [];
	$scope.selectedImg = {};

<<<<<<< HEAD
/*
	$scope.ImgFallback = function ImgFallback(fallback){
		if (fallback === "") {
			fallback =
		};
	}
*/

	//$scope.selectedImg = 'lorempixel.com/output/city-q-c-400-300-1.jpg';
=======
	$scope.ID = parseInt($stateParams.locationName);
>>>>>>> 7f1a5ac581b8e056183295f6aeb7f57f0994010f

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
