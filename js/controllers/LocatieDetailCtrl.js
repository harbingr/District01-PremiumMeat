angular.module('PremiumMeat').controller('LocatieDetailCtrl', function ($scope, $window, locatiedetail, $stateParams) {
	$scope.locatieDetail = locatiedetail; //naam resolve
	$scope.locatieParams = $stateParams; //stateparams op scope

	$scope.locatieCenter = {};
	$scope.locatieCenter.latitude = $scope.locatieParams.locatieLat;
	$scope.locatieCenter.longitude = $scope.locatieParams.locatieLong;

});