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



/*
Array.prototype.forEach.call(function(arg){
    console.log(arg) 
})
*/