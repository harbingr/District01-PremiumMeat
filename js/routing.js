var PremiumMeat = angular.module('PremiumMeat', [
	"ui.router",
	"ui.bootstrap",
	"ngScrollTo",
	"ngAnimate"
	//"angular-google-analytics"
	])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $provide) {

/*
	//Google analytics tracking ID: UA-61932007-1
	AnalyticsProvider.setAccount('UA-61932007-1');
	// automatic route tracking (default=true)
	AnalyticsProvider.trackPages(false);
	//Optional set domain (Use 'none' for testing on localhost)
	AnalyticsProvider.setDomainName('');
	//Use analytics.js instead of ga.js
	AnalyticsProvider.useAnalytics(true);
	// Ignore first page view.
	AnalyticsProvider.ignoreFirstPageLoad(true);
	AnalyticsProvider.useECommerce(false);
	AnalyticsProvider.useEnhancedLinkAttribution(true);
	AnalyticsProvider.setExperimentId('12345');
	//Set custom cookie parameters for analytics.js
	AnalyticsProvider.setCookieConfig({
	  cookieDomain: 'foo.example.com',
	  cookieName: 'myNewName',
	  cookieExpires: 20000
	});
	//Change the default page event name. This is useful for ui-router, which fires $stateChangeSuccess instead of $routeChangeSuccess
	AnalyticsProvider.setPageEvent('$stateChangeSuccess');
*/

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
				controller: "FranchisesCtrl",
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

			.state('franchise.detail', {
				params: {
					detailID: 1,
					detailName: "Kontich"
				},
				url: "/:detailName",
				controller: "FranchisesDetailCtrl",
				templateUrl: "view/franchise.detail.html",
				resolve: {
					franchisedetail:
						function ($stateParams, $http){
							var url ="http://franchise.district01.be/api/franchises/" + $stateParams.detailID + "/nl.json";
							return $http.get(url).then(function(res){
								return res.data;
							});
						}
				}
			})

		.state('contact', {
			params:{
				onderwerp: "vraag",
			},
			url: "/contact?onderwerp",
			controller: "contactController",
			templateUrl: "view/contact.html"

		})
});
