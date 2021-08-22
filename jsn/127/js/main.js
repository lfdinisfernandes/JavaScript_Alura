(function() {
    'use strict'

    function myFunction(a, b, c){
        console.log( this.lastName);
    }

    var obj = { 
    lastName: 'Luiz Felipe'    
    };

    myFunction.call(obj, 1, 2, 3);

})();
