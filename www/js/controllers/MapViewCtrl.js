angular.module('starter')

.controller('MapViewCtrl', function($scope, MapService) {
	
  var currentPosSuccess = function(position) {
    $scope.map = MapService.drawCurrentPos(position);
  };

  var currentPosError = function(error) {
    console.log("Could not get location");
  };

  ionic.Platform.ready(function() {
    MapService.getCurrentLocation().then(currentPosSuccess, currentPosError);
  });
});
