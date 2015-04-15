var PremiumMeat = angular.module('PremiumMeat', [
	"ui.router",
	"ui.bootstrap",
	"ngScrollTo",
	"angular-google-analytics"
	])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $provide, AnalyticsProvider) {

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
			//https://alexfeinberg.wordpress.com/2014/03/08/dynamically-populating-angular-ui-router-states-from-a-service/
		.state('contact', {
			url: "/contact",
			//controller: "ContactCtrl",
			templateUrl: "view/contact.html"
		})
});
