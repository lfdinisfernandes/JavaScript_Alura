//1
var isTruthy = function (params) {
    return !!params;
}

//2 
/*
console.log( isTruthy(false) );
console.log( isTruthy(null) );
console.log( isTruthy(undefined)  );
console.log( isTruthy('') );
console.log( isTruthy(0) );
console.log( isTruthy(-0) );
console.log( isTruthy(NaN) );
*/

//3
/*
console.log( isTruthy(true) );
console.log( isTruthy("oi") );
console.log( isTruthy(12)  );
console.log( isTruthy('20') );
console.log( isTruthy(0.1) );
console.log( isTruthy(-0.10) );
console.log( isTruthy("oito") );
*/

//3
var carro = {
    marca: "fiat",
    modelo: "tipo",
    placa: "deb-1908",
    ano: 2020,
    cor: "vermelho",
    quantasPortas: 4,
    Assentos: 5,
    quantidadePessoa: 0
}

//4
carro.mudarCor = function (cor) {
     carro.cor = cor;
}

//5
carro.obterCor = function (cor) {
   return cor;  
}

carro.obterModelo = function () {
    return carro.modelo;  
 }

 carro.obterMarca = function () {
    
    return carro.marca;  
 }

 carro.obtermarcaModelo = function(){
   var x = "Esse carro é um: " + carro.obterMarca() + " " + carro.obterModelo();
    return x;  
}

carro.addPesoa = function (assentos) {
    var totalPessoas = carro.quantidadePessoa + assentos;
  
    if (carro.quantidadePessoa === carro.Assentos && totalPessoas >= carro.Assentos) {
      return 'O carro já está lotado!';
    }
  
    if (totalPessoas > carro.Assentos) {
      var quantasPessoasCabem =  carro.Assentos - carro.quantidadePessoa;
      var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';
     
      return 'Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + '!';
    }
  
    carro.quantidadePessoa += assentos;
  
    return 'Já temos ' + carro.quantidadePessoa +  ' pessoas no carro!';
  };


console.log(carro.addPesoa(2))