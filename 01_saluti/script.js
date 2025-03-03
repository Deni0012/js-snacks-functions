/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
const greeting1 = userName => console.log(`Ciao ${userName}`);

function greeting2(userName) {
    const hello = "Ciao";
    return hello + " " + userName;
}



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario': // ciao Mario
