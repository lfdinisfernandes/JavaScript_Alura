console.log(`Trabalhado com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);
const idadeComprador = 15;
const estaAcompanhada = true;



console.log("Destinos possiveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //remoendo intem
} else {
    //Apessoa e menor de idade
    if (estaAcompanhada) {
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(1, 1); //remoendo intem

    } else {
        console.log("Não é maior de Idade e não posso vender")
    }
}


console.log(listaDeDestinos);