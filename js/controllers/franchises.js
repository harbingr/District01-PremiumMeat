
var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('FranchisesCtrl', function ($scope, $window, $http, $stateParams) {

	$scope.franchises = [];
	$scope.status = {};

	$scope.language = "fr";
	$scope.map = { center: { latitude: 51.2, longitude: 4.4}, zoom: 10 };

	$scope.locatiemap = {};

	$scope.ID = parseInt($stateParams.locationName);

	$http.get(servicepath + 'franchises/' + $scope.language + '.json').then(function(res){
		$scope.franchises = res.data;
		$scope.selectedImg = {};
	});

	$scope.franchisemobiler = function(){
		$scope.status.franchiseActive = true;
	}

});
