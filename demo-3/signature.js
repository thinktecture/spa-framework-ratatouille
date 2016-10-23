'use strict';

var signaturePadElement = document.querySelector('#signature');
new SignaturePad(signaturePadElement);

var width = getParameterByName('width');
var height = getParameterByName('height');

document.body.style.height = height + 'px';
document.body.style.width = width + 'px';

signaturePadElement.setAttribute('width', width);
signaturePadElement.setAttribute('height', height);

function resizeCanvas() {
    var scaleFactor = window.devicePixelRatio;
    signaturePadElement.style.width = width + 'px';
    signaturePadElement.style.height = height + 'px';
    signaturePadElement.width = width * scaleFactor;
    signaturePadElement.height = height * scaleFactor;

    // Scale the drawing context
    signaturePadElement.getContext('2d').scale(scaleFactor, scaleFactor);
}

window.onresize = resizeCanvas;
resizeCanvas();

// http://stackoverflow.com/a/901144
function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
