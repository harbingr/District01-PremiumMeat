
var servicepath = "http://franchise.district01.be/api/";

var PremiumMeat = angular.module('PremiumMeat')

	.controller('HomeCtrl', function ($scope, $http) {

		$scope.activeslide = {};
		$scope.changeActiveSlide =  function changeActiveSlide(i){
			$scope.activeslide = i;
			console.log($scope.activeslide);
		};

		$scope.myInterval = 8000;
		var slides = $scope.slides = [];
		$http.get(servicepath + 'promos/nl.json').then(function(res){
			$scope.slides = res.data;
		});

		var posts = $scope.posts = [];
		$http.get(servicepath + 'articles/nl.json').then(function(res){
			$scope.posts = res.data;
		});

	});

