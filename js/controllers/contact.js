angular.module("PremiumMeat").controller('contactController', function($scope, $stateParams) {

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
		saveContact();
	};

	$scope.saveContact = function() {

		console.log("save");
		$scope.contact.name = $scope.name;

		consonle.log($scope.name);
		consonle.log($scope.email);

		httpPost();
	}

	var httpPost = function() {
		$http.post('save.php', JSON.stringify($scope.contact))
			.error(function(status){console.log(status)}
		);
	};
});