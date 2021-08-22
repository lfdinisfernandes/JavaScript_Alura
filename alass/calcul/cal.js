(function(win, doc){
    'use strinct';
    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[daa-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    
    
    Array.prototype.forEach.call($buttonsNumbers, function(button){
        button.addEventListener('click', handleClickNumber, false );
    })
    $buttonCE.addEventListener('click', handleClickCE, false);

    function handleClickNumber(event){
        $visor.value += this.value;
    }
    function handleClickCE(event) {
        $visor.value = 0;
    }
})(window, document);