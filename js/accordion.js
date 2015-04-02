
var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('AccordionCtrl', function ($scope, $http) {
	$scope.oneAtATime = true;
	$scope.jobs = [];
	$http.get(servicepath + 'jobs/nl.json').then(function(res){
		$scope.jobs = res.data;
		console.log($scope.jobs[0]);
		console.log($scope.jobs[0].title);
  });
  $scope.status = {
	isFirstOpen: true,
	isFirstDisabled: false
  };
});