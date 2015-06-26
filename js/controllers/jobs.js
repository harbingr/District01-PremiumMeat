
var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('JobsCtrl', function ($scope, $http) {

	$scope.oneAtATime = true;

	$scope.job = { selected: undefined };

	$scope.jobs = [];
	$http.get(servicepath + 'jobs/nl.json').then(function(res){
		$scope.jobs = res.data;
	});

	$scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});