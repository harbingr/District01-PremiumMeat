var servicepath = "https://franchise.district01.be/api/";
var PremiumMeat = angular.module('PremiumMeat')

	.controller('HomeCtrl', function ($scope, $http, $location, $cookieStore) {

		$scope.language = "nl";
		$scope.langcookie = $cookieStore.get('languageCookie');

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
		$http.get(servicepath + 'promos/' + $scope.language + '.json').then(function(res){
			$scope.slides = res.data;
		});

		var posts = $scope.posts = [];
		$http.get(servicepath + 'articles/' + $scope.language + '.json?callback=JSON_CALLBACK').
		  success(function(data, status, headers, config) {
			$scope.posts = data;
			console.log(status);
		  }).
		  error(function(data, status, headers, config) {
			console.log(status);
		  });

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


