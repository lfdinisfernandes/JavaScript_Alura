(function() {
    'use strict';

    function on(element, event, callbak) {
        document.querySelector(element)
        .addEventListener(event, callbak, false);
    }

    on('[data-js="link"]', 'click', function(event) {
        event.preventDefault();
        alert('clicou no A');
    });

    on('[data-js="div"]', 'click', function(event) {
        alert('clicou na div');
    });
})();