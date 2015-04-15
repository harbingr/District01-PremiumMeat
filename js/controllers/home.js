
var servicepath = "http://franchise.district01.be/api/";

var PremiumMeat = angular.module('PremiumMeat')

	.controller('HomeCtrl', function ($scope, $http) {


		$scope.myInterval = 8000;
		var slides = $scope.slides = [];
	  	$http.get(servicepath + 'promos/nl.json').then(function(res){
	  		$scope.slides = res.data;
	  		console.log($scope.slides[0].images)
	  	});

		var promos = $scope.promos = [];
		$http.get(servicepath + 'promos/nl.json').then(function(res){
			$scope.promos = res.data;
		});

		var posts = $scope.posts = [];
		$http.get(servicepath + 'articles/nl.json').then(function(res){
			$scope.posts = res.data;
		});

	});

