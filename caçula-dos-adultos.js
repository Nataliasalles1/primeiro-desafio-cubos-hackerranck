let lista = [12, 11, 17];
let maior18 = [];

for (let i = 0; i < lista.length; i++) {
    if(lista[i] >= 18){
        maior18.push(lista[i])
    }
}

if(maior18 == 0){
    console.log(`CRESCA E APARECA`)
}else{
    let menorEntreMaiores18 = Math.min(...maior18)
    console.log(menorEntreMaiores18)
}
