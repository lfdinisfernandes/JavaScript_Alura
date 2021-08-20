//SEÇÃO 16: AULA #16 96 USE STRICT- DELETE - OBJETOS FUNÇÕES
(function() {
    'use strict'
    function myFunction( a, c, b){
        return a + b;
    }
    console.log(myFunction)
}) ();
/*
'use strict';
    var tetes = 2;
    var  obj = {
        prop1: 'prop1',
        prop2 : 'prop2',
        prop3: 'prop3'
    }
    console.log(obj)
*/


//SEÇÃO 16: AULA #16 95 USE STRICT - USO DO this === undefaned
/*
(function() {
    var obj = {
        prop1:{
            prop2:{
                prop3:{
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    };
    console.log(obj.prop1.prop2.prop3);
    with(obj.prop1.prop2.prop3) {
console.log(prop31, prop32, prop33);
    }
})();
//console.log(MyName);
*/

/* SEÇÃO 16: AULA #16 94 USE STRICT - USO DO WITH
'use strict';
    var MyName = 'Luiz felipe';
    console.log(MyName);
*/