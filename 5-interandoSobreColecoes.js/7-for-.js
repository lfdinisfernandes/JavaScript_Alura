console.log(`\n Trabalhado com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possiveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destinod Exite: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagen!!");
} else {
    console.log("Desculpa tivemos um erro!");
}

for (let cont = 0; contador < 3; cont++) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;

    }

}