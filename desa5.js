var q=[1, true, "Luiz", { a: 1 }, function () {}]

function L (array){
    return array;
}
//console.log(L(q)[1]);
function b (beta, alfa ){
   return beta[alfa];
}
//

var luiz = [1, 'ola', true,{a: 2}, function() {return "function() {}"}];

/*console.log(b(luiz,0));
console.log(b(luiz,1));
console.log(b(luiz,2));
console.log(b(luiz,3));
console.log(b(luiz,4)());*/

function boock (livro){
    var obj = {
        'JavaScript Ninja ': {
          paginas: 101,
          autor: 'Fernando ',
          editora: 'udemy'
        },
        'Function': {
          paginas: 225,
          autor: 'Fernando',
          editora: 'udemy'
        },
        'sou pecimo em portugues': {
          paginas: 50,
          autor: 'mulher',
          editora: 'Bookman'   
        },
        'F': {
            paginas: 225,
            autor: 'Fernando',
            editora: 'udemy'
        }
    }
    return !livro ? obj : obj[livro];
}
//console.log(boock())

function Chacara(casa){
    var minhacasa = {
        "diego":{
            profição: "programador",
            gostaFazer:"dog"
        },
        "Tatiane":{
            profição:" Mãe",
            gostaFazer: "???"
        },
        "Luiz Felipe": {
            profição: " Estuda programador",
            gostaFazer: "ouvir musica"
        },
        "Alice Helena":{
            profição: "Chorar",
            gostaFazer: "Mamar"
        }
    }
    return !casa ? minhacasa : minhacasa[casa]
}
var casa = "Alice Helena";
console.log('  ')
console.log(Chacara(casa))
console.log('  ')
console.log('Sou: ' + casa + ' gosto de ' + Chacara(casa).gostaFazer + ' quero Leite');
console.log('  ')