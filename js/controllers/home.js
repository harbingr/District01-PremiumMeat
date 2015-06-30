var servicepath = "https://franchise.district01.be/api/";
var PremiumMeat = angular.module('PremiumMeat')

	.controller('HomeCtrl', function ($scope, $http, $location, $cookies) {

		var language = $cookies.lang;

		//eng api not available, to fr
		if (language === "en") {language="fr";};

		$scope.changeActiveSlide = function(i) {
			angular.forEach($scope.slides, function(slide) {
				slide.active = false; //Deactive all slides
				if(slide.id === i+1) {
					slide.active = true; //Activate clicked slide
				}
			});
		}

		$scope.myInterval = 8000;
		var slides = $scope.slides = [];
		$http.get(servicepath + 'promos/' + language + '.json').then(function(res){
			$scope.slides = res.data;
		});

		var posts = $scope.posts = [];
		$http.get(servicepath + 'articles/' + language + '.json?callback=JSON_CALLBACK').
		  success(function(data, status, headers, config) {
			$scope.posts = data;
			console.log(status);
		  }).
		  error(function(data, status, headers, config) {
			console.log(status);
		  });
		});


	PremiumMeat.directive('errSrc', function() {
	  return {
	    link: function(scope, element, attrs) {
	      element.bind('error', function() {
	        if (attrs.src != attrs.errSrc) {
	          attrs.$set('src', attrs.errSrc);
	        }
	      });
	    }
	  }
	});


