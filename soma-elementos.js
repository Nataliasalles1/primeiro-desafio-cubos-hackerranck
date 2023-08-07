let numeros = [1,2,3,4]

let valorInicial = 0;

const somar = numeros.reduce((numSomado, numAtual) => numSomado + numAtual, valorInicial)


console.log(somar)