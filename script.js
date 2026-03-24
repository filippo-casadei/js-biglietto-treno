// prompt per chiedere i km da percorrere:
let quantiKm = parseInt ( prompt ("Quanti km devi percorrere?" ));

// prompt per chiedere l'età:
let quantiAnniHai = parseInt ( prompt ("Quanti anni hai?" ));


// costo di 1km che NON cambia:
const prezzoKm = 0.21;

// variabile per calcolare il prezzo del biglietto base:
let prezzoBase = prezzoKm * quantiKm;

// variabile per calcolare gli sconti:
if (quantiAnniHai < 18) {
    prezzoBase = prezzoBase - (prezzoBase * 0.20);
}
else if (quantiAnniHai >= 65) {
    prezzoBase = prezzoBase - (prezzoBase * 0.40);
}
else {
    prezzoBase = prezzoKm * quantiKm;
}


// per stampare il risultato: 
console.log(`Il prezzo del biglietto è: ${prezzoBase.toFixed(2)}`)

// per vedere il risultato a schermo:
alert(`Il prezzo del biglietto è: ${prezzoBase.toFixed(2)}`)



// CORREZIONE
// VALIDAZIONE E COERENZA DEI DATI: per  verificare che effettivamente venga inserito un numero
// nello spazio dell'età e che sia maggiore o uguale a 0.


// if (isNaN (quantiAnniHai) && >=0) {
//     console.error("Non hai inserito un numero");
// }
// else {
//     console.log(haiinserito un numero)
// }