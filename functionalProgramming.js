/*

    // {} <3 function(){}

    // como vc usa objetos literais...
     
    var car = {
    brand: 'Chevrolet',
    model: 'Silverado'
    }
    

    //vc podecriar funções literais!
     
    function sum(x, y) {
        return x + y;
    }
     

    // Como vc atribui objetos à variàveis...
    // var obj = {};

    //voce pode atribuir funções:
    // var func = function func(){};




    funtion person(){
        return{
            name: 'luiz felipe',
        }
    }



    var nome = function v(){};
    function v(){};

    function person() {
        var info = {
            name: 'Luiz felipe',
            lastName: 'Dinis'
        };
        return info;
    }

    function person() {
        return {
            name: 'Luiz felipe',
            lastName: 'Dinis'
        };
        return info;
    }
-----------------------------------------------
    RETORNO DE FUNÇÕES{
        VC TAMBEM PODE RETORNAR FUNÇÕES!
        function adder (x){
             function addOther(y){
                 return x + y;
            }
            return addObther;
        }
    }



   

var senha = function v(a){
 return function c(b){
    if(a + b ==10){
            return true;
    }else{
            return false;
        };
    };
};
console.log(senha(8)(2))
-----------------------------------------------
FUNÇÕES
como você passa objrtos por parâmetros...

var car = {
    color: 'yllow'
};

function get(mycar){
    return mycar.color;
}
console.log(get(car))
-----------------------------------------------
VOCÊ TAMBEM PODE PASSAR FUNÇÕES POR PARÂMETRO!
function showOtherFunction(func){
    return func();
}

showOtheFunction(function(){
    return 'Funtional js Ninja!;
})
//'Functional js Ninja!'




fdsafdsa  fdsa jklç jklç2 


   indicador: ffffrtgbvc   ffffrtgbvc ==== jjjiuy

*/


 function chamadaFunção(m){
    return m()
} 
 function segunda(){
 return "oi"
}

function tercira(x,y){
    return x + y
}

console.log(chamadaFunção(segunda))
console.log(chamadaFunção(tercira)) 

