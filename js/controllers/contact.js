/*
http://codepen.io/manolof/blog/angularjs-todo-save-data-to-localstorage-or-to-txt-file-using-php
*/

angular.module('PremiumMeat', [])

.factory('httpserv', function ($http) {
	return $http.get('storage.txt').error(function(status){
		console.log(status)
	});
})

.controller('contactController', function ($scope, myhttpserv, $stateParams, $http) {

	httpserv.then(function(response){
		$scope.todos = (response.data !== null) ? response.data : [];
		var httpPost = function() {
			$http.post('save.php', JSON.stringify($scope.todos))
			.error(function(status){
				console.log(status)
			});
		$scope.contactform = {};
		$scope.contactform.onderwerp = $stateParams.onderwerp;

		$scope.mapd01 = {
			center: {
				atitude: 51.142057,
				longitude: 4.442918
			},
			zoom: 10
		};
		$scope.mapd01.marker = {
		      id: 0,
		      coords: {
		        latitude: 51.142057,
		        longitude: 4.442918
		      }
		};

		var httpPost = function() {
			$http.post('save.php', JSON.stringify($scope.todos)).error(function(status){console.log(status)});
		};

		$scope.submitForm = function(isValid) {

		$scope.hideForm = false;
		if (isValid) {
			if ($scope.userForm.name.$valid == true) {
				$scope.hideForm = true;
			};

		$scope.errors = [];
		$scope.msgs = [];

		$http.post('contact', {
			'name': $scope.name,
			'email': $scope.email,
			'phone': $scope.telefoon,
			'onderwerp': $scope.contactform.onderwerp,
			'message': $scope.bericht
		}
                    ).success(function(data, status, headers, config) {
                        if (data.msg != '')
                        {
                            $scope.msgs.push(data.msg);
                        }
                        else
                        {
                            $scope.errors.push(data.error);
                        }
                    }).error(function(data, status)
                    {
                        $scope.errors.push(status);
                    });
		};
	};
});


	};




