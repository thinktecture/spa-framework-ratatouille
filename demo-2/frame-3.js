'use strict';

function onMessage(event) {
    // For production always check the full url here.
    // For this demo, we just check the port
    if (event.origin.indexOf(':8080') === -1) {
        return;
    }

    console.log('FRAME-3: Received message');

    if (event.data.type === 'navigate') {
        handleNavigate(event.data);
    }
}

var content = document.querySelector('#content');

function handleNavigate(event) {
    content.className = event.data;
}

window.addEventListener('message', onMessage);
