
var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('FranchisesCtrl', function ($scope, $window, $http, $stateParams) {
	$scope.franchises = [];

	$scope.status = {

	};

	$scope.ID = parseInt($stateParams.locationName);

	$http.get(servicepath + 'franchises/nl.json').then(function(res){
		$scope.franchises = res.data;
		$scope.selectedImg = {};
	});

	$scope.franchisemobiler = function(){
		$scope.status.franchiseActive = true;
	}

});
