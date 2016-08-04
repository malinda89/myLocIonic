angular.module('starter')

.factory('MapService', function($cordovaGeolocation) {
  var map;
  var o = {};

  o.getCurrentLocation = function() {
    var options = {timeout: 10000, enableHighAccuracy: true};
    return $cordovaGeolocation.getCurrentPosition(options);
  };

  o.drawCurrentPos = function(position) {
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    return map;
  };

  return o;
});

  