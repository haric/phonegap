function updateWidthAndHeight() {
    document.getElementById('widthDiv').innerHTML = 'width: ' + window.innerWidth + 'px';
    document.getElementById('heightDiv').innerHTML = 'height: ' + window.innerHeight + 'px';
}

function setupActionSheet(callback) {
    //var actionSheet = window.plugins.actionSheet;
    var options = {
    title: 'Title',
    items: ['Foo', 'Bar']
    };
    
    // Basic with title
    //if (actionSheet) actionSheet.create({title: 'Menu', items: ['New releases', 'My Cart']}, callback);
    //window.plugins.CodeScan.scan();

}

document.addEventListener('orientationchange', updateWidthAndHeight, false);

var button = document.getElementById("menubutton");
if (button) button.addEventListener('click', function(e) {
                        setupActionSheet( function (buttonValue, buttonIndex) {
                            console.log('Button Value: ' + buttonValue);
                            console.log('Button Index: ' + buttonIndex);
                        });
}, false);

if ($.mobile) {
    $.mobile.ajaxEnabled = false;
}

function onSuccess(imageURI) {
    var image = document.getElementById('banner');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

var cameraButton = document.getElementById("CameraButton");
if (cameraButton) cameraButton.addEventListener('click', function(e) {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,destinationType: Camera.DestinationType.DATA_URL}); 
});