console.log(`Trabalhando com Listas `);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestino.push(`Curitiba`); //Adicionar um intem na listem
console.log("Destinos possiveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestino);

listaDeDestino.splice(1, 1);
console.log(listaDeDestino);
console.log(listaDeDestino[1]); //assim imprime um elemento so da lista
console.log(listaDeDestino[1], listaDeDestino[0]); //assim imprime dois elementos