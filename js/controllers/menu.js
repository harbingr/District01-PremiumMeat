angular.module('PremiumMeat').controller('MenuCtrl', function($scope, $http) {
  var menu = $scope.menu = [];
  $http.get('http://franchise.district01.be/api/menus/nl.json')
       .then(function(res){
          $scope.menu = res.data;
        });
});

/*
var descriptionString = '["Mozarella","Pepperoni","Cheese","Beef","Ketchup"]';

var cleanBracketsLeft = descriptionString.replace(/\[/g, '');
var cleanBracketsRight = cleanBracketsLeft.replace(/\]/g, '');
var cleanQuotes = cleanBracketsRight.replace(/\"/g, '');
var cleanComma = cleanQuotes.replace(/\,/g, ' ');

console.log(cleanComma);
*/