/* 
(function(win, doc) {
    'use strict'

    var couter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer() {
        console.log('timer', couter++ );
       
        
    };
    temporizador = setInterval(timer, 1000);
   

    $button.addEventListener('click', function() {
        clearInterval(temporizador);
    }, false)
})(window, document);



//---------setTimeout
(function(win, doc) {
    'use strict'

    var couter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer() {
        console.log('timer', couter++ );
        if( couter > 20 )
        return;
        temporizador = setTimeout(timer, 1000);
    };
    timer();

    $button.addEventListener('click', function() {
        clearTimeout(temporizador);
    }, false)
    })(window, document);
*/