console.log(`Trabalhado com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //remoendo intem
// } else {
//     //Apessoa e menor de idade
//     if (estaAcompanhada) {
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1, 1); //remoendo intem

//     } else {
//         console.log("Não é maior de Idade e não posso vender")
//     }
//}

if (
    idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(1, 1); //remoendo intem
} else {
    console.log("Não é maior de Idade e não posso vender")
}
console.log("embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!")
} else {
    console.log("Voce não pode embarcar")
}



console.log(listaDeDestinos);