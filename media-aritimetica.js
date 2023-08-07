let lista = [2, 3, 4]

let valorInicial = 0;
const somar = lista.reduce((numSomado, numAtual) => numSomado + numAtual, valorInicial)
let media = somar / lista.length
console.log(media)
