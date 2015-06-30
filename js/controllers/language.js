angular.module('PremiumMeat')

.controller('languageCtrl', function($translate, $scope, $cookies, $location, $state) {

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
    $cookies.lang = langKey;
    $state.go('home');
  };
});
