/*var PremiumMeat = angular.module('PremiumMeat', ["ui.router"]);
PremiumMeat.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/index",
      templateUrl: "index.html"
    })
    .state('menu', {
      url: "/menu",
      templateUrl: "menu.html"
    })
    .state('locaties', {
      url: "/locaties",
      templateUrl: "locaties.html"
    })
    .state('jobs', {
      url: "/jobs",
      templateUrl: "jobs.html"
    })
});