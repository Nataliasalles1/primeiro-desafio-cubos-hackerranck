let precos = [200, 150, 50, 100];

let soma = 0  
if (precos.length >= 3){
const somar = precos.reduce((precoSomado, precoAtual) => precoSomado + precoAtual , soma);
let maiorValor = Math.min(...precos)
let valorFinal = somar - maiorValor * 0.50;
console.log(valorFinal)

}else{
    const somar = precos.reduce((precoSomado, precoAtual) => precoSomado + precoAtual , soma);
 console.log(somar)
}