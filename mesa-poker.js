let min = 2;
let max = 10;
let valores = [0, 5, 6, 10, 11];
let valoresPermitido = [];

for (let i = 0; i < valores.length; i++) {
    if (valores[i] < min || valores[i] > max) {

    } else {
        valoresPermitido.push(valores[i])
    }

}
console.log(valoresPermitido)