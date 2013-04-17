function updateWidthAndHeight(){
    document.getElementById('widthDiv').innerHTMl ='width: ' + window.innerWidth + 'px';
    document.getElementById('heightDiv').innerHTMl ='height: ' + window.innerHeight + 'px';
}


document.addEventListener('orientationchange', updateWidthAndHeight, false);
