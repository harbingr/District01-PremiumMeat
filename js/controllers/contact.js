//http://codepen.io/manolof/blog/angularjs-todo-save-data-to-localstorage-or-to-txt-file-using-php

angular.module("PremiumMeat")

.factory('getContact', function ($http) {
	console.log("contact factory");
	return "factory return";
	//return $http.get('contact.txt').error(function(status){console.log(status)});
	var httpPost = function(){
		console.log("post function");
	}
})

.controller('contactController', function(
	$scope,
	getContact,
	$http,
	$stateParams,
	$window){

		$scope.mapd01 = { center: { latitude: 51.142057, longitude: 4.442918}, zoom: 10 };

		$scope.mapd01.marker = {
		      id: 0,
		      coords: {
		        latitude: 51.142057,
		        longitude: 4.442918
		      }
		};

		$scope.contactform = {};
		$scope.contactform.onderwerp = $stateParams.onderwerp;

	$scope.submitForm = function(isValid) {
		$scope.hideForm = false;
		if (isValid) {
			if ($scope.userForm.name.$valid == true) {
				$scope.hideForm = true;
			};
		};
		httpPost();
	};

	var httpPost = function() {

		$scope.contact = {};
		$scope.contact.name = $scope.name;
		$scope.contact.email = $scope.email;
		$scope.contact.telefoon = $scope.telefoon;
		$scope.contact.onderwerp = $scope.contactform.onderwerp;
		$scope.contact.bericht = $scope.bericht;

		$window.location = "mailto:robbert@harbingermultimedia.be?subject=" + $scope.contact.onderwerp + " van " + $scope.email + "&body="  + "Naam: " + $scope.name  + "      Bericht: " + $scope.bericht, '_blank';

		console.log("http post" + $scope.contact);
		$http.post('save.php', JSON.stringify($scope.contact))
			.error(function(status){console.log(status)}
		);
	};
});