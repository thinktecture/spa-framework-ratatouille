'use strict';

function onMessage(event) {
    // For production always check the full url here.
    // For this demo, we just check the port
    if (event.origin.indexOf(':7070') === -1) {
        return;
    }

    if (event.data.type === 'navigate') {
        handleNavigate(event.data);
    }
}

var content = document.querySelector('#content');

function handleNavigate(event) {
    content.className = event.data;
}

window.addEventListener('message', onMessage);

var container = document.querySelector('.container');

function onResize() {
    // Don't use star for production cases. Always use a specific target.
    // For development and demo star is "ok".
    window.parent.postMessage({
        type: 'resize',
        data: container.scrollHeight,
        from: 'frame-3'
    }, '*');
}

window.addEventListener('resize', onResize);
