function updateWidthAndHeight() {
    document.getElementById('widthDiv').innerHTML = 'width: ' + window.innerWidth + 'px';
    document.getElementById('heightDiv').innerHTML = 'height: ' + window.innerHeight + 'px';
}

function setupActionSheet(callback) {
    var actionSheet = window.plugins.actionSheet;
    var options = {
    title: 'Title',
    items: ['Foo', 'Bar']
    };
    
    // Basic with title
    actionSheet.create({title: 'Menu', items: ['New releases', 'My Cart']}, callback);

}

document.addEventListener('orientationchange', updateWidthAndHeight, false);

var button = document.getElementById("menubutton");
button.addEventListener('click', function(e) {
                        setupActionSheet( function (buttonValue, buttonIndex) {
                            console.log('Button Value: ' + buttonValue);
                            console.log('Button Index: ' + buttonIndex);
                        });
}, false);
