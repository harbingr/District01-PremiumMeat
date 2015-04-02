var PremiumMeat = angular.module('PremiumMeat', [
	"ui.router",
	"ui.bootstrap",
	"ngScrollTo"
	])

.config(function($stateProvider, $urlRouterProvider) {

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
});
