'use strict';

var container = document.querySelector('.container');

function onResize() {
    console.log('FRAME-1 -> MAIN: Sending resize message');
    // Don't use star for production cases. Always use a specific target.
    // For development and demo star is "ok".
    window.parent.postMessage({
        type: 'resize',
        data: container.scrollHeight,
        from: 'frame-1'
    }, '*');
}

window.addEventListener('resize', onResize);
