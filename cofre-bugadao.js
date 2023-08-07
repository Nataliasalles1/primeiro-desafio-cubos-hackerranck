const input = "cuboss\ncubojkdsvc";
const [senha, digitada] = input.trim().split("\n");

let senhaCont = 0;
for (let i = 0; i < digitada.length; i++) {
    if (digitada[i] === senha[senhaCont]) {
        senhaCont++;
    }
}

if (senhaCont === senha.length) {
    console.log("SIM");
} else {
    console.log("NAO");
}
