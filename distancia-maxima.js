let input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7";

const lines = input.trim().split("\n");
const n = parseInt(lines[0], 10);

const coordenadas = [];
for (let i = 1; i < lines.length; i++) {
    const coord = lines[i].split(" ");
    coordenadas.push({
        x: parseFloat(coord[0]),


        y: parseFloat(coord[1])
    });
}

let maxDistancia = 0;
for (let i = 0; i < n; i++) {


    for (let j = i + 1; j < n; j++) {
        const x1 = coordenadas[i].x;
        const y1 = coordenadas[i].y;
        const x2 = coordenadas[j].x;
        const y2 = coordenadas[j].y;

        const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        let max = Math.max(maxDistancia, distancia);
        maxDistancia = max
    }
}
console.log(maxDistancia.toFixed(15));


