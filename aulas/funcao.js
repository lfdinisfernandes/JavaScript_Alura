/*function myFunction(){
    return [0, 1, 2, 3];
};
//console.log(myFunction()[1]);

function myfunction(){
    return {
        prosp1: 1,
        prosp2: "luiz",
        prosp3:  function (){
            
            return a= function () {
                
                return  function () { 
                   ;
                    return  function (){
                       
                        return  function(){
                          
                            return "Diego"
                        }
                    } 
                }
            };
        }
    };
};
//console.log(myfunction().prosp3()()()()())


var arr = [1, 2, 3];
function a (arg) {
    return arr[2];
}
function b1 (arg) {
    return arr[0, 1];
}
console.log(b1(arr))
*/
/*
function sum(){
    return 1 + 2;
}
console.log( sum());


var sum2 = function (){
 return 3 + 2;
}
console.log( sum2());


var sum3 = function otherSum(){
    return 5 + 8;
} 
console.log(sum3() );
console.log("");


(function (){
    console.log( 1 + 2 );
})();

//CONSVERSORE - SEM new (CONVERTEM O TIPO)

var  name = 'Luiz Felipe';
console.log(name.length)

//CONSTRUTORES
//TODO NEW RETORNA UM CLASE 
var  name = new String('Luiz Felipe');

console.log(name.valueOf()); //VOLTA O VALOR QUE EU ESTOU PASASANDO
console.log(name.length); //VOLTA A GUANTIDADE DE CARACTER


console.log(typeof 1);
console.log(typeof 'null');
console.log(typeof []);
console.log(typeof {});
console.log(typeof function(){});
console.log(typeof undefined);
console.log(typeof null);

todo
*/
var car = {
    brand:'vm',
    model: 'gol',
    year: 2013
}
for(var prop in car ) {
    console.log( prop );
}

