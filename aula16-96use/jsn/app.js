
//.length --conta quantas letras tem na strings
//console.log("luiz felipe".length);
/**/
var lu = new String('Luiz Felipe');
console.log(lu.length);
//11 letras

/*
console.log('luizfelipe'.charAt(5));
console.log('luizfelipe'[5]);
//e 'letra no arrays'  
*/
lu.indexOf('e')
//5 do começo para o fim pega a string
lu.lastIndexOf('e');
//9  de tras pra frente pega a string

(function() {
    'use strict';
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    }
    console.log(delete obj.prop1, obj);
    console.log('luiz felipe'.length)
}) ();