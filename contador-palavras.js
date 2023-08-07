let texto = " Cuidado, pois usuarios  as       vezes  deixam espacos vazios  no fim do   texto sem     querer "
let textoFormatado = texto.trim();
let textoTrabalhado = textoFormatado.split(/\s+/);
console.log(textoTrabalhado)
let palavras = 0

for (let i = 0; i < textoTrabalhado.length; i++) {
    if (textoTrabalhado[i] !== "") {
        palavras += 1
    }
}
console.log(palavras)










