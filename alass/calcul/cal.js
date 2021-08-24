(function(win, doc){
    'use strinct';
    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');
    
    Array.prototype.forEach.call($buttonsNumbers, function(button){
        button.addEventListener('click', handleClickNumber, false );
    })
    Array.prototype.forEach.call($buttonsOperations, function(button) {
        button.addEventListener('click', handleClickOperation, false)
    })
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);


    function handleClickNumber(){
        $visor.value += this.value;
    }
    function handleClickOperation(){
        $visor.value = removeLastIfIsAnOperator($visor.value);
        $visor.value += this.value;
    }
    function handleClickCE() {
        $visor.value = 0;
    }
    function isLastItemAnOperation(number){
        var operations = ['+','-','÷','x'];
        var lastItem = number.split('').pop();
        return operations.some(function(operator){
            return operator === lastItem;
        })
    };

    function removeLastIfIsAnOperator(number){
        if(isLastItemAnOperation(number)){
            return number.slice(0,-1);
        };
        return number;
    };

    function handleClickEqual(){
        $visor.value = removeLastIfIsAnOperator($visor.value);
        var allValues = $visor.value.match(/\d+[+x÷-]?/g)
        $visor.value =  resul = allValues.reduce(function(acumulado, atual){
            var firstValue = acumulado.slice(0,-1);
            var operator = acumulado.split('').pop();
            var lastValue = removeLastIfIsAnOperator(atual);
            var lastOperator = isLastItemAnOperation(atual) ? atual.split('').pop() : false;
            switch (operator) {
                case '+': 
                    return (Number(firstValue) + Number(lastValue)) + lastOperator;
                case '-':
                    return (Number(firstValue) - Number(lastValue)) + lastOperator;
                case 'x':
                    return (Number(firstValue) * Number(lastValue)) + lastOperator;
                case '÷':
                    return (Number(firstValue) / Number(lastValue)) + lastOperator;        
            
        
            }
        })
    };
    
})(window, document);





/*?function isLastItemAnOperation(){
       
        var lastItem = $visor.value.split('').pop();
        console.log(lastItem);
    }*/