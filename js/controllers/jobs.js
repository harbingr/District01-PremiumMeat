
var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('JobsCtrl', function ($scope, $http) {

	$scope.job = { selected: undefined };

	$scope.jobs = [];
	$http.get(servicepath + 'jobs/nl.json').then(function(res){
		$scope.jobs = res.data;
	});

var skills = ["Strong interpersonal skills", "Problem solving & analytical thinking", "Great teamplayer", "Willing to learn"];

  $scope.jobskills = skills;

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});