angular.module('PremiumMeat')

.controller('languageCtrl', function($translate, $scope, $cookieStore, $location) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
    $cookieStore.put('languageCookie', langKey);
    var cookie = $cookieStore.get('languageCookie');
    console.log(cookie);
    $location.path('/home')
  };

  	$scope.checkCookie = function ($cookies){
    		var cookie = $cookieStore.get('languageCookie');
    		console.log(cookie);
	}

  	$scope.deleteCookie = function ($cookies){
		$cookieStore.remove('languageCookie');
	}

});
