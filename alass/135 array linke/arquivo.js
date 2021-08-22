(function(){
    'use strict';

    function myFunction(){
    var result = Array.prototype.reduce.call( arguments, function(acumulated,
    actual, index) {
        return acumulated + actual;
    });
    console.log(result);
    
    
    
    }
    myFunction(1,2,3,4,5,7,8,9)

})();






/*
(function(){
    'use strict';


    ----------a mesma coisa----------    
    function myFunction(){
    var result = Array.prototype.reduce.call( arguments, function(acumulated, actual, index) {
        return acumulated + actual;
    });
    console.log(result);
    
    arr.reduce(function(acumulated, actual){
        return acumulated + actual;
    })
    
    }
    myFunction(1,2,3,4,5,7,8,9)
    ------------.apply[]----------
    function myFunction(){
    Array.prototype.forEach.apply( arguments, [function(item, index) {
        console.log(item);
    }]);
    
    
    }
    myFunction(1,2,3,4,5,7,8,9)

    ------------.call-------------
    function myFunction(){
    Array.prototype.forEach.call( arguments, function(item, index) {
        console.log(item);
    });
    
    
    }
    myFunction(1,2,3,4,5,7,8,9)
    --------------------
    for( var i = 0;i < arguments.length; i++ ) {
        console.log(arguments[i]);
    }
    
    
    }
    myFunction(1,2,3,4,5,6,7,8,9)
    --------------------
    function myFunction(){
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item, index){
            console.log( this[index] );
        }, arguments);
    }
    myFunction(1,2,3,4,5,6,7,8,9)
    --------------------

    function myFunction(){
        var arr = [1, 2, 3, 4];
// forEach ele percorre todo o meu arry [1,2,3,4] e ele passa pro paramento da função 
        arr.forEach(function(item){
            console.log( item );
        });
    }
    myFunction();
})();
*/


/*
Array.prototype.forEach.call(function(arg){
    console.log(arg) 
})
*/