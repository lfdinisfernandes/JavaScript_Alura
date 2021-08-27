(function() {
    'use strict';

    var $a = document.querySelector('[data-js="link"]') //pra pegar o $a do html
    document.querySelector('[data-js="div"]')
    .addEventListener('click', function(evento){
        alert('clicou na div');
    }, false);

    $a.addEventListener('click', function(evento) {
        evento.preventDefault();
        alert('clicou no A');
    }, false); //vou atrelar um evento nele $a função de calbek

})();