angular.module('PremiumMeat', ['ui.bootstrap']);
angular.module('PremiumMeat').controller('CollapseCtrl', function ($scope, $window) {
	$scope.isCollapsed = false;
	$window.collapsed = false;

	console.log("in controller");
});

// Enquire configuration
var enquireQuery= "screen and (max-width:480px)";
var enquireQueryHandler = {
	setup: function () {
		//$scope.isCollapsed = false;

		console.log("in enquire");

		$window.collapsed = false;
		angular.element(document.querySelector('[ng-controller="CollapseCtrl"]')).scope().isCollapsed=false;
	},
	match: function () {
		//$scope.isCollapsed = true;
		$window.collapsed = true;
		angular.element(document.querySelector('[ng-controller="CollapseCtrl"]')).scope().isCollapsed=true;
	},
	unmatch: function () {
		//$scope.isCollapsed = false;
		$window.collapsed = false;
		angular.element(document.querySelector('[ng-controller="CollapseCtrl"]')).scope().isCollapsed=false;
	}
};

//enquire.register(enquireQuery, enquireQueryHandler, true);
