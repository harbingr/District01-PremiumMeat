var breakpoints = {
    $mq_smaller: "screen and (max-width: 480px)",
    $mq_medium: "screen and (max-width: 768px)",
    $mq_large: "screen and (max-width: 1024px)",
    $mq_larger: "screen and (max-width: 1200px)"
};

angular.module('PremiumMeat', ['ui.bootstrap', 'angular-enquire-breakpoints']);
angular.module('PremiumMeat').controller('CollapseCtrl', function ($scope) {
	$scope.isCollapsed = false;
	$scope.$on(function() {});

		$scope.$on('setup', function(event) {
			$scope.isCollapsed = false;
		});

		$scope.$on('match', function(event, mq) {
			if (mq === '$mq_smaller')
				$scope.isCollapsed = true;
			});
		$scope.$on('unmatch', function(event, mq) {
		 	if (mq === '$mq_smaller') $scope.isCollapsed = false;
		});

});

