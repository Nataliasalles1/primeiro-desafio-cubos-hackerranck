let jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 1
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

const jogadores0 = jogadores.filter((jogador)=> jogador.jogada === 0)
const jogadores1 = jogadores.filter((jogador)=> jogador.jogada === 1)

if(jogadores0.length !== 1 && jogadores1.length !== 1){
console.log(`NINGUEM`)
    
}else{
    let vencedor;
    if(jogadores0.length === 1){
        vencedor = jogadores0
    }else{
        vencedor = jogadores1
    }

    console.log(vencedor[0].nome)
}