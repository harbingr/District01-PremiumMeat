angular.module('PremiumMeat').controller('LocatieDetailCtrl', function ($scope, $window, locatiedetail, $stateParams) {

	$scope.locatieDetail = locatiedetail;

	console.log("state params frdetailctrl" + $stateParams);

	$scope.stateparams = $stateParams;

});