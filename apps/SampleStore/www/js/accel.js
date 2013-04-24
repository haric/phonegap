var watchId;
var startWatchButton = document.getElementById("startWatch");
var accelerationPlaceHolder = document.getElementById("accelReading");

//
function onSuccess(acceleration) {
    var element = document.getElementById('accelReading');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
    'Acceleration Y: ' + acceleration.y + '<br />' +
    'Acceleration Z: ' + acceleration.z + '<br />' +
    'Timestamp: '      + acceleration.timestamp + '<br />';
}

// onError: Failed to get the acceleration
//
function onError() {
    alert('onError!');
}

startWatchButton.addEventListener("click", function() {
                   var options = { frequency: 3000 };  // Update every 3 seconds

                   watchId = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
});