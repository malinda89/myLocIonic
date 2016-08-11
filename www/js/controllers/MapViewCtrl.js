angular.module('starter')

.controller('MapViewCtrl', function($scope, MapService, UserInfoService) {
	
  var currentPosSuccess = function(position) {
    UserInfoService.get().then(function(users) {
      $scope.map = MapService.draw(position, users);
    });
  };

  var currentPosError = function(error) {
    console.log("Could not get location");
  };

  ionic.Platform.ready(function() {
    MapService.getCurrentLocation().then(currentPosSuccess, currentPosError);
  });
});
