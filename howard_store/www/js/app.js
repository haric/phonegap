function updateWidthAndHeight() {
    document.getElementById('widthDiv').innerHTML = 'width: ' + window.innerWidth + 'px';
    document.getElementById('heightDiv').innerHTML = 'height: ' + window.innerHeight + 'px';
}

document.addEventListener('orientationchange', updateWidthAndHeight, false);

