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

});