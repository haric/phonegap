var watchCId;
var startCWatchButton = document.getElementById("startCWatch");
var stopCWatchButton = document.getElementById("stopCWatch");
var headingPlaceHolder = document.getElementById("headingReading");

// Capture original position of the ball
var ball = document.getElementById("ballC");
var X = ball.offsetLeft;
var Y = ball.offetTop;

//
function onCSuccess(heading) {
    var element = document.getElementById('headingReading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
    var dx = 0, dy = 0;
    if ( (heading.magneticHeading > 0) && (heading.magneticHeading < 90) ) dx = 10;
    else if ( (heading.magneticHeading > 90) && (heading.magneticHeading < 180) ) dy = 10;
    else if ( (heading.magneticHeading > 180) && (heading.magneticHeading < 270) ) dx = -10;
    else dy = -10;
    
    X = Math.abs(X + dx);
    Y = Math.abs(Y + dy);
    var leftStyle = "left: " + X  + "px; ";
    var topStyle = "top: " + Y  + "px";
    ball.style.cssText = leftStyle + topStyle;
}

// onError: Failed to get the acceleration
//
function onCError() {
    alert('onError!');
}

startCWatchButton.addEventListener("click", function() {
                   var options = { frequency: 3000 };  // Update every 3 seconds

                   watchCId = navigator.compass.watchHeading(onCSuccess, onCError, options);
});

stopCWatchButton.addEventListener("click", function() {
                                 if (watchCId) {
                                 navigator.compass.clearWatch(watchCId);
                                 watchCId = null;
                                 }
                                  });