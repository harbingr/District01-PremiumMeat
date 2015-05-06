var PremiumMeat = angular.module('PremiumMeat', [
	"ui.router",
	"ui.bootstrap",
	"ngScrollTo",
	"ngAnimate",
	'pascalprecht.translate',
	'ngCookies'
	//"angular-google-analytics"
	])

.run(function($rootScope, $state){
		$rootScope.$state = $state;

		 $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                // Check if a rule is present
                if (!toState.data || !angular.isFunction(toState.data.rule)) {
                    return;
                }
                // if a rule is present we should first wait till the authentication was resolved
                // after that, execute the rule
                var test = function test() {
                    var result = toState.data.rule();
                    if ((result && result.toState) || (result && result.message)) {
                        event.preventDefault();
                        if (result.toState) {
                            $state.go(result.toState, result.params);
                        }
                    }
                };
                test();
            });
	})

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $provide, $translateProvider) {
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
	$translateProvider.translations('nl', {
		HEADLINE: 'Laatste Blogposts',
		QUOTE: 'De kwaliteit meten we met de glimlach van de klant',
		LOCATIES: 'Locaties',
		SOLLICITEER: 'Solliciteer voor deze job!',
		FRANCHISEHEAD: "Franchise beginnen?",
		FRANCHISEFUTURE: "Een mooie toekomst lacht u toe!",
		FRANCHISEWHY: "Waarom zou je?",
		FRANCHISECONTACT: "Neem contact op!"
	})
	.translations('en', {
		HEADLINE: 'Latest Blogposts',
		QUOTE: 'We measure the quality by the smile of the customer',
		LOCATIES: 'Locations',
		SOLLICITEER: 'Apply to this job!',
		FRANCHISEHEAD: "Start a Franchise?",
		FRANCHISEFUTURE: "A bright future smiles at you!",
		FRANCHISEWHY: "Why would you?",
		FRANCHISECONTACT: "Contact us!"
	});

	$translateProvider.preferredLanguage('en');
	//$translateProvider.rememberLanguage(true);
	//$translateProvider.useCookieStorage();

	$urlRouterProvider.otherwise("/");

	$stateProvider
			.state('home', {
				url: "/",
				data: {
					rule: function($cookieStore) {
			                        if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'home'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };
			                }
				},
				controller: "HomeCtrl",
				templateUrl: "view/home.html"
			})
			.state('menu', {
				url: "/menu",
				data: {
					rule: function($cookieStore) {
			                        if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'menu'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };
			                }
				},
				controller: "MenuCtrl",
				templateUrl: "view/menu.html"
			})
			.state('locaties', {
				url: "/locaties",
				data: {
					rule: function($cookieStore) {
			                        if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'locaties'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };
			                }
				},
				controller: "FranchisesCtrl",
				templateUrl: "view/locaties.html"
			})
				.state('locatie', {
					url: "/locaties/:locationName",
					data: {
					rule: function($cookieStore) {
			                        if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'locatie'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };
			                }
				},
					controller: "FranchisesCtrl",
					templateUrl: "view/locatie.html"
				})

			.state('jobs', {
				url: "/jobs",
				data: {
					rule: function($cookieStore) {
			                        if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'jobs'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };
			                }
				},
				controller: "JobsCtrl",
				templateUrl: "view/jobs.html"
			})

			.state('franchise', {
				url: "/franchise",
				data: {
					rule: function($cookieStore) {
			                        if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'franchise'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };
			                }
				},
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
				data: {
					rule: function($cookieStore) {
			                        if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'contact'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };
			                }
				},
				controller: "contactController",
				templateUrl: "view/contact.html"
			})

			.state('language', {
				url: "/language",
				controller: "languageCtrl",
				templateUrl: "view/language.html"
			})
	});


