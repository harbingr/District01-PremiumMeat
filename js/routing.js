var PremiumMeat = angular.module('PremiumMeat', [
	"ui.router",
	"ui.bootstrap",
	"ngScrollTo"
	])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $provide) {

$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: "/",
			controller: "HomeCtrl",
			templateUrl: "view/home.html"
		})
		.state('menu', {
			url: "/menu",
			controller: "MenuCtrl",
			templateUrl: "view/menu.html"
		})
		.state('locaties', {
			url: "/locaties",
			controller: "FranchisesCtrl",
			templateUrl: "view/locaties.html"
		})
			.state('locatie', {
				url: "/locaties/:locationName",
				controller: function($scope, $stateParams){
					$scope.ID = parseInt($stateParams.locationName);
				},
				templateUrl: "view/locatie.html"
			})

		.state('jobs', {
			url: "/jobs",
			controller: "JobsCtrl",
			templateUrl: "view/jobs.html"
		})

		.state('franchise', {
			url: "/franchise",
			controller: "FranchisesCtrl",
			templateUrl: "view/franchise.html"
		})
			.state('franchise.kontich', {
				url: "/kontich",
				templateUrl: "view/franchise.kontich.html",
			})
			.state('franchise.brussel', {
				url: "/brussel",
				templateUrl: "view/franchise.brussel.html",
			})
			.state('franchise.gent', {
				url: "/gent",
				templateUrl: "view/franchise.gent.html",
			})
			.state('franchise.boechout', {
				url: "/boechout",
				templateUrl: "view/franchise.boechout.html",
			})
			.state('franchise.brugge', {
				url: "/brugge",
				templateUrl: "view/franchise.brugge.html",
			})
			.state('franchise.luik', {
				url: "/boechout",
				templateUrl: "view/franchise.luik.html",
			})
});
