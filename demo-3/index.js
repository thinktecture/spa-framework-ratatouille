'use strict';

var frames = {
    'frame-1': document.querySelector('#frame-1'),
    'frame-2': document.querySelector('#frame-2'),
    'frame-3': document.querySelector('#frame-3')
};

function onMessage(event) {
    // For production always check the full url here.
    // For this demo, we just check the port
    if (event.origin.indexOf(':7070') === -1) {
        return;
    }

    if (event.data.type === 'resize') {
        handleResizeMessage(event.data);
    }

    if (event.data.type === 'navigate') {
        handleNavigation(event.data);
    }
}

function handleResizeMessage(event) {
    var frame = frames[event.from];

    if (frame) {
        frame.style.height = event.data + 'px';
    }
}

function handleNavigation(event) {
    frames['frame-3'].contentWindow.postMessage(event, '*');
}

window.addEventListener('message', onMessage);
