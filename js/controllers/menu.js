angular.module('PremiumMeat').controller('MenuCtrl', function($scope, $http) {
  var menu = $scope.menu = [];
  $http.get('http://franchise.district01.be/api/menus/nl.json')
       .then(function(res){
          $scope.menu = res.data;
        });
});