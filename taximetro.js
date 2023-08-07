let min = 25;
let km = 11.5;

if (min <= 20 && km <= 10) {
    let valormin = min * 50;
    let valorkm = km * 70;
    console.log(valormin + valorkm)

} else if (min > 20 && km <= 10) {
    let valormin = (20 * 50 + ((min - 20) * 30))
    let valorkm = km * 70;
    console.log(valormin + valorkm)
} else if (min <= 20 && km > 10) {
    let valormin = min * 50;
    let valorkm = (10 * 70 + ((km - 10) * 50))
    console.log(valormin + valorkm)
} else {
    let valormin = (20 * 50 + ((min - 20) * 30))
    let valorkm = (10 * 70 + ((km - 10) * 50))
    console.log(valormin + valorkm)
}

