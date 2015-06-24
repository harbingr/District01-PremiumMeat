
var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('JobsCtrl', function ($scope, $http) {

	$scope.oneAtATime = true;
	$scope.job = { selected: undefined };
	console.log($scope.oneAtATime);

	$scope.jobs = [];
	$http.get(servicepath + 'jobs/nl.json').then(function(res){
		$scope.jobs = res.data;
	});
});