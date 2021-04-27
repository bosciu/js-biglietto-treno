/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */
var inputKm = document.getElementById("input-km");
var inputEta = document.getElementById("input-eta");
var outputPrice = document.getElementById("root");

function calcoloBiglietto() {
    /* Richiesta numero km & età del passeggiero */
    var numeroKm = Number(inputKm.value);
    var etaPasseggero = Number(inputEta.value);
    var prezzo = 0.21;

    /* Calcolo prezzo del biglietto */
    var prezzoBiglietto = (numeroKm * prezzo).toFixed(2);

    /* Sconto*/
    if (etaPasseggero < 18) {
        var prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * (20 / 100))).toFixed(2);
    } else if (etaPasseggero > 65) {
        var prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * (40 / 100))).toFixed(2);
    }

    outputPrice.innerHTML = "Il prezzo totale è di € " + prezzoBiglietto;
}