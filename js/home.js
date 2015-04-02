//angular.module("PremiumMeat", ["ngScrollTo"]);
//angular.module('PremiumMeat', ['ui.bootstrap']);

var servicepath = "http://franchise.district01.be/api/";
angular.module('PremiumMeat').controller('CarouselCtrl', function ($scope, $http) {
	$scope.myInterval = 8000;
	$scope.slides = [];

  	$http.get(servicepath + 'promos/nl.json').then(function(res){
  		$scope.slides = res.data;
/*
		for (var i = 0; i < res.data.slides.length; i++) {
			var slide = {
				image: res.data.slides[i].images.slider,
				title: res.data.slides[i].title,
				text: res.data.slides[i].description
			};
			$scope.slides.push(slide);
		};
*/
	});


/*
  	$http.get('services/homepage-slider.json').then(function(res){
		for (var i = 0; i < res.data.slides.length; i++) {
			var slide = {
				image: res.data.slides[i].images[0].slider,
				title: res.data.slides[i].title,
				text: res.data.slides[i].description
			};
			$scope.slides.push(slide);
		};
	});
*/
});

angular.module('PremiumMeat').controller('PromoCtrl', function($scope, $http) {
	var promos = $scope.promos = [];
	$http.get(servicepath + 'promos/nl.json').then(function(res){
		$scope.promos = res.data;
	});
});

angular.module('PremiumMeat').controller('BlogpostCtrl', function($scope, $http) {
	var posts = $scope.posts = [];
	$http.get(servicepath + 'articles/nl.json').then(function(res){
		$scope.posts = res.data;
	});
});




