let numerosJogados = [1, 3, 2, 1];
let contador = 0;
let totalSoma = 0;

const somar = numerosJogados.reduce((numSomado, numAtual) => numSomado + numAtual, totalSoma);
let numeroJogadores = numerosJogados.length

for (let i = 1; i <= somar; i++) {
    contador += 1
    if (contador > numeroJogadores) {
        contador = 1
    }
}
console.log(contador)
