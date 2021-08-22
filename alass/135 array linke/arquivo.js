(function(){
    'use strict';

    function myFunction(){
        var arr = [1, 2, 3, 4];
        arr.forEach(function(item){
            console.log( item );
        });
    }
    myFunction();
})();
// forEach ele percorre todo o meu arry [1,2,3,4] e ele passa pro paramento da função 


/*
Array.prototype.forEach.call(function(arg){
    console.log(arg) 
})
*/