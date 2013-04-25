var watchId;
var startWatchButton = document.getElementById("startWatch");
var stopWatchButton = document.getElementById("stopWatch");
var accelerationPlaceHolder = document.getElementById("accelReading");

// Capture original position of the ball
var ball = document.getElementById("ball");
var X = ball.offsetLeft;
var Y = ball.offetTop;

//
function onSuccess(acceleration) {
    var element = document.getElementById('accelReading');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
    'Acceleration Y: ' + acceleration.y + '<br />' +
    'Acceleration Z: ' + acceleration.z + '<br />' +
    'Timestamp: '      + acceleration.timestamp + '<br />';
    X = Math.abs(X + 10 * acceleration.x);
    Y = Math.abs(Y + 10 * acceleration.y);
    var leftStyle = "left: " + X  + "px; ";
    var topStyle = "top: " + Y  + "px";
    ball.style.cssText = leftStyle + topStyle;
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

stopWatchButton.addEventListener("click", function() {
                                 if (watchID) {
                                 navigator.accelerometer.clearWatch(watchID);
                                 watchID = null;
                                 }
                                  });