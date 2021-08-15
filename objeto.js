//1
var qualquer = { }

//2
var pessoa =  {
    nome: "Diego",
    sobrenome: "Fernandes",
    idade: 39,
    altura: 1.76,
    peso: 80,
    andando: false,
    caminhouQnatosMetros: 0
}

//3
pessoa.fazerAniversario = function() {
    return  pessoa.idade++;
};



//4x = 2 y = 1 x += y
pessoa.andar = function(metros, x) {
    console.log(x)
    pessoa.caminhouQnatosMetros += metros;
    pessoa.andando = true;
    return metros;
}

//5
pessoa.parar = function(){
    pessoa.andando = false;
}

//6
pessoa.nomeCompleto = function(){
    var  nomeCompleto = pessoa.nome + " "+ pessoa.sobrenome;
    return "Olá! Meu nome é: " + nomeCompleto ;
}

//7
pessoa.mostrarIdade = function (){
    return "Olá, eu tenho: " + pessoa.idade + " anos!";
}

//8
pessoa.mostrarPeso = function() {
    return "Eu tenho: " + pessoa.peso + " Kg.";
}

//9
pessoa.mostrarAltura = function(){
    return "Minha altura é: " + pessoa.altura + " m";
}

pessoa.apresentacao = function() {
    var sexo = "o";
    var idades = 1;
    var metrosCaminhados = "metros";

    if (pessoa.sexo === "Masculino" ){
        return "o";
    }    

    if(pessoa.idades === 1){
        return "idade"
    }

    if(pessoa.metrosCaminhados === 1 ){
        return "metro"
    }

    
    return  pessoa.nomeCompleto() + ", tenho:" + pessoa.idade + " anos, e minha altura é: " 
    + pessoa.altura + ",eu tenho: " +
    pessoa.peso + " Kg." + "só hoje eu caminhei: " + pessoa.andar(11, 2) + " metros caminhados!"
    //+  + " " +  + ", " + "meu peso é: " + pessoa.peso + " e, só hoje já caminhei: " + pessoa.andar(110)+" " + metrosCaminhados
};
/* "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje,
    eu já caminhei [CAMINHOU QUANTOS METROS] metros!"*/


//10 Agora vamos brincar um pouco com o objeto criado:
/*console.log(pessoa.andando);
console.log(" ");
console.log(pessoa.andar(100));
console.log(pessoa.andar(500));
console.log(" ");
console.log(pessoa.andando);
*/
console.log(pessoa.apresentacao());


