/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function pickHour() {
    const now = new Date();
    return now.getHours();
}

function greetingBasedOnTime(name, hour) {
    let greeting = "Buonasera";
    if (hour < 13) {
        greeting = "Buongiorno";
    } else if (hour < 17) {
        greeting = "Buon Pomeriggio";
    }
    return greeting + " " + name;
}



// Invoca la funzione qui e stampa il risultato in console
const hour = pickHour();
console.log(hour)
const greetingMario = greetingBasedOnTime(name, hour);
console.log(greetingMario)



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.