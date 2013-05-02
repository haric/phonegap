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
    google.maps.event.addListener(map, 'click', function(e) {
        placeMarker(e.latLng, map);
                        
    });
    
    
}

var pathConnected = [];
var p;

function placeMarker(position, map) {
    if (p) p.setMap(null);
    
    var populationOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: position,
    radius: 5000
    };
    c = new google.maps.Circle(populationOptions);
    pathConnected.push(position);
    
    p = new google.maps.Polygon({
                                     paths: pathConnected,
                                    strokeColor: '#FF0000',
                                    strokeOpacity: 0.8,
                                    strokeWeight: 3,
                                    fillColor: '#FF0000',
                                    fillOpacity: 0.35
    });
    
    p.setMap(map);

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