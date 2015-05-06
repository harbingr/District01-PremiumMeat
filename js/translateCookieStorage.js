
var PremiumMeat = angular.module('PremiumMeat')

.factory('$translateCookieStorage', $translateCookieStorageFactory);

  function $translateCookieStorageFactory($cookieStore) {
    'use strict';

    var $translateCookieStorage = {

      get: function (name) {
        return $cookieStore.get(name);
        console.log($cookieStore.get(name));
      },
      put: function (name, value) {
        $cookieStore.put(name, value);
      }
  };

  return $translateCookieStorage;
}

$translateCookieStorageFactory.displayName = '$translateCookieStorage';


