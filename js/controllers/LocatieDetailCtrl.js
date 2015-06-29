angular.module('PremiumMeat').controller('LocatieDetailCtrl', function ($scope, $window, locatiedetail, $stateParams, $http) {
	$scope.locatieDetail = locatiedetail; //naam resolve
	$scope.locatieParams = $stateParams; //stateparams op scope

	$scope.franchises = [];
	$scope.language = "nl";

	var servicepath = "http://franchise.district01.be/api/";
	$http.get(servicepath + 'franchises/' + $scope.language + '.json').then(function(res){
		$scope.franchises = res.data;
		$scope.selectedImg = {};
	});

	$scope.locatieCenter = {};
	$scope.locatieCenter.latitude = $scope.locatieParams.locatieLat;
	$scope.locatieCenter.longitude = $scope.locatieParams.locatieLong;
	$scope.locatieCenter.zoom = 9;

	/*case: pass by reference. You're returning a single instance of an object that is assigned to center and marker. Angular databinding updates that single instance when center changes, which also changes your marker position.

	you store a reference to the object and return that reference to be used by nggm. nggm watches that object and triggers angular databinding on changes, so it behaves like angular users expects*/

	console.log($scope.locatieCenter);
});