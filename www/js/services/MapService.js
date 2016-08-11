angular.module('starter')

.factory('MapService', function($cordovaGeolocation) {
  var map;
  var o = {};

  o.getCurrentLocation = function() {
    var options = {timeout: 10000, enableHighAccuracy: true};
    return $cordovaGeolocation.getCurrentPosition(options);
  };

  o.draw = function(position, users) {
    var currentPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: currentPos,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //mark current pos
    google.maps.event.addListenerOnce(map, 'idle', function() {
      currentPositionMarker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        map: map,
        animation: google.maps.Animation.DROP,
        position: currentPos
      });
    });

    //Mark users
    /*fn:Map - does something similar to a foreach, but capable of mapping object properties to another from an array*/
    var userMarkers = users.map(function(user) {
      return new google.maps.Marker({
        position: new google.maps.LatLng(user.lat, user.lng),
        map: map
      });
    });

    return map;
  };

  return o;
});

  