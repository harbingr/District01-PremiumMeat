angular.module('PremiumMeat', ['pascalprecht.translate'])
	.config(function($translateProvider) {

		$translateProvider.translations('nl', {
			HEADLINE: 'Laatste Blogposts',
			QUOTE: 'De kwaliteit meten we met de glimlach van de klant'
		})
		.translations('en', {
		    HEADLINE: 'Latest Blogposts',
		    QUOTE: 'We measure the quality by the smile of the customer'
		  });
		;

});