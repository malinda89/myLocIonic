angular.module('starter')

.factory('UserInfoService', function($http) {

  var o = {};

  o.get = function() {
    return $http.get('users.json').then(function(res) {
      return res.data.users;
    });
  };

  return o;
});