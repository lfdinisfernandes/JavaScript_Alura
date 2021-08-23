(function(win, doc){
    'use strinct';
    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    
    
    Array.prototype.forEach.call($buttonsNumbers, function(button){
        button.addEventListener('click', handleClickNumber, false );
    })
    Array.prototype.forEach.call($buttonsOperations, function(button) {
        button.addEventListener('click', handleClickOperation, false)
    })
    $buttonCE.addEventListener('click', handleClickCE, false);

    function handleClickNumber(){
        $visor.value += this.value;
    }
    function handleClickOperation(){
         if(isLastItemAnOperation()){
            $visor.value = $visor.value.slice(0,-1);
        }    
        $visor.value += this.value;
    }
    function handleClickCE() {
        $visor.value = 0;
    }
    function isLastItemAnOperation(){
        var operations = ['+','-','÷','x'];
        var lastItem = $visor.value.split('').pop();
        return operations.some(function(operator){
            return operator === lastItem;
        })
        console.log(lastItem);
    }
    
})(window, document);
/*?function isLastItemAnOperation(){
       
        var lastItem = $visor.value.split('').pop();
        console.log(lastItem);
    }*/