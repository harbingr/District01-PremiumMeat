angular.module('PremiumMeat')

.controller('languageCtrl', function($translate, $scope, $cookieStore, $location) {

$scope.currentPage = $location.path() === "/language";
console.log($scope.currentPage)

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
    $cookieStore.put('languageCookie', langKey);
    var cookie = $cookieStore.get('languageCookie');
    console.log(cookie);
    $location.path('/home')
  };

  	$scope.checkCookie = function ($cookies){
      console.log("check koek");
    		var cookie = $cookieStore.get('languageCookie');
    		console.log(cookie);
	}

  	$scope.deleteCookie = function ($cookies){
      console.log("delete koek");
		$cookieStore.remove('languageCookie');
	}

});
