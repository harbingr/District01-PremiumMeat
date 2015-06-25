var PremiumMeat = angular.module('PremiumMeat', [
	"ui.router",
	"ui.bootstrap",
	"ngScrollTo",
	"ngAnimate",
	'pascalprecht.translate',
	'ngCookies',
	'uiGmapgoogle-maps'
	//"angular-google-analytics"
	])

.run(function($rootScope, $window, $state, $cookieStore, $translate, $location){

		var store = $translate.storage();
			if(angular.equals(store, {})){
				$location.path('/language');
			}
			else {
				$location.path('/home');
			}

		$rootScope.$state = $state;

		 $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			//console.log("state change");
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
	$translateProvider.translations('nl', {
		HEADLINE: 'Laatste Blogposts',
		QUOTE: ' "De kwaliteit meten we met de glimlach van de klant" ',
		QUOTESUB: 'Lees het volledige',
		QUOTELINK: ' Interview met CEO M. Verlinde',
		LOCATIES: 'Locaties',
		LOCATIEBEZOEK: 'Bezoek',
		SOLLICITEER: 'Solliciteer voor deze job!',
		FRANCHISEHEAD: "Franchise beginnen?",
		FRANCHISEFUTURE: "Een mooie toekomst lacht u toe!",
		FRANCHISEWHY: "Waarom zou je?",
		FRANCHISECONTACT: "Neem contact op!",
		CONTACTNAAM: "Naam",
		CONTACTNAAMFEEDBACK: "Gelieve een geldige naam in te vullen",
		CONTACTEMAILFEEDBACK: "Gelieve een geldig email aders in te vullen",
		CONTACTTELEFOON: "Telefoon",
		CONTACTBERICHT: "Uw bericht",
		CONTACTVRAAG: "Vraag",
		CONTACTJOB: "Sollicitatie",
		CONTACTSUBMIT: "Formulier versturen",
		CONTACTSENT: "Uw bericht werd verstuurd, we beantwoorden zo snel mogelijk uw vraag."
	})
	.translations('en', {
		HEADLINE: 'Latest Blogposts',
		QUOTE: ' "We measure the quality by the smile of the customer" ',
		QUOTESUB: 'Read the full',
		QUOTELINK: 'Interview with CEO M. Verlinde',
		LOCATIES: 'Locations',
		LOCATIEBEZOEK: 'Visit',
		SOLLICITEER: 'Apply to this job!',
		FRANCHISEHEAD: "Start a Franchise?",
		FRANCHISEFUTURE: "A bright future smiles at you!",
		FRANCHISEWHY: "Why would you?",
		FRANCHISECONTACT: "Contact us!",
		CONTACTNAAM: "Name",
		CONTACTNAAMFEEDBACK: "Please fill in a correct name",
		CONTACTEMAILFEEDBACK: "Please fill in a correct e-mail adress",
		CONTACTTELEFOON: "Telephone",
		CONTACTBERICHT: "Your message",
		CONTACTVRAAG: "Question",
		CONTACTJOB: "Appllication",
		CONTACTSUBMIT: "Send form",
		CONTACTSENT: "Your message was sent, we will answer your question as soon as possible."
	});

	$translateProvider.preferredLanguage('nl');
	$translateProvider.useCookieStorage();
	$translateProvider.useLocalStorage();

	$urlRouterProvider.otherwise("/");

	$stateProvider
			.state('home', {
				url: "/",
				data: {
					rule: function($cookieStore) {
			                        /*if ($cookieStore.get('translateCookieStorage')){
			                        	  	return {
			                        	  		toState: 'home'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };*/
			                }
				},
				controller: "HomeCtrl",
				templateUrl: "view/home.html"
			})
			.state('menu', {
				url: "/menu",
				data: {
					rule: function($cookieStore) {
			                        /*if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'menu'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };*/
			                }
				},
				controller: "MenuCtrl",
				templateUrl: "view/menu.html"
			})
			.state('locaties', {
				url: "/locaties",
				data: {rule: function($cookieStore) {} },
				controller: "FranchisesCtrl",
				templateUrl: "view/locaties.html"
			})
			.state('locatiedetail', {
				params: {
						locatieID: {value : "1"},
						locatieName: {value : "Stad"},
						locatieDescr: {value : "Beschrijving"},
						locatieLat: {value: 51.2},
						locatieLong: {value : 4.4}
					},
					url: "/:locatieName",
					controller: "LocatieDetailCtrl",
					templateUrl: "view/locatie.html",
					resolve: {
						locatiedetail:
							function ($stateParams, $http){
								var url ="http://franchise.district01.be/api/franchises/" + $stateParams.locatieID + "/nl.json";
								return $http.get(url).then(function(res){
									return res.data;
								});
							}
					}
			})
			.state('franchise', {
				url: "/franchise",
				data: {rule: function($cookieStore) {}},
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

			.state('jobs', {
				url: "/jobs",
				data: {
					rule: function($cookieStore) {
			                }
				},
				controller: "JobsCtrl",
				templateUrl: "view/jobs.html"
			})

			.state('contact', {
				params:{
					onderwerp: "vraag",
				},
				url: "/contact?onderwerp",
				data: {
					rule: function($cookieStore) {
			                        /*if ($cookieStore.get('languageCookie')) {
			                        	  	return {
			                        	  		toState: 'contact'
			                        	  	}
						}
			                        	// language button set localstorage
			                        	// if localstorage set
			                         else return {
			                                toState: 'language',
			                                toParams: {}
			                        };*/
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




