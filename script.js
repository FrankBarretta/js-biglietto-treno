
let km = parseInt(prompt("Quanti kilometri desideri percorrere?"));

let etaPasseggero = parseInt(prompt("La tua età?"));

let prezzoBiglietto = km * 0.21;

if (etaPasseggero > 0 && etaPasseggero < 18) {
    let sconto = ((20 * prezzoBiglietto) / 100);
    prezzoBiglietto = (prezzoBiglietto - sconto).toFixed(2);
} else if (etaPasseggero >= 65) {
    let sconto = ((40 * prezzoBiglietto) / 100);
    prezzoBiglietto = (prezzoBiglietto - sconto).toFixed(2);
}

//let prezzoScontato = Math.round(prezzoBiglietto / 100);

let prezzoFinale = prezzoBiglietto.toFixed(2);

console.log(prezzoFinale);

alert("Il prezzo finale sarà di " + prezzoFinale + " euro");

