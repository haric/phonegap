// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
function onSuccess(position) {
    var mapDiv = document.getElementById('map');
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(lat, lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(mapDiv,
                              mapOptions);
    
    
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Options: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });