'use strict';

var container = document.querySelector('.container');

function onResize() {
    console.log('FRAME-2 -> MAIN: Sending resize message');
    // Don't use star for production cases. Always use a specific target.
    // For development and demo star is "ok".
    window.parent.postMessage({
        type: 'resize',
        data: container.scrollHeight,
        from: 'frame-2'
    }, '*');
}

window.addEventListener('resize', onResize);

function navigate(to) {
    console.log('FRAME-1 -> MAIN: Sending navigation message');
    window.parent.postMessage({
        type: 'navigate',
        data: to
    }, '*');
}

var items = document.querySelectorAll('.menu-item');
items[0].addEventListener('click', function () {
    navigate('home');
});
items[1].addEventListener('click', function () {
    navigate('contract-1');
});
items[2].addEventListener('click', function () {
    navigate('contract-2');
});
items[3].addEventListener('click', function () {
    navigate('todo');
});
