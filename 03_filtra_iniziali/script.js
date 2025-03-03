/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function searchInitials(names, filter) {
    const namesFiltered = [];
    const filterUpperCase = filter.toUpperCase();
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (name[0].toUpperCase() === filterUpperCase) {
            namesFiltered.push(name);
        }
    }
    return namesFiltered;
}

const searchInitialsHarrow = (names, filter) => {
    const namesFiltered = [];
    const filterUpperCase = filter.toUpperCase();
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (name[0].toUpperCase() === filterUpperCase) {
            namesFiltered.push(name);
        }
    }
    return namesFiltered;
}

function searchInitialsFilter(names, filter) {
    const filterUpperCase = filter.toUpperCase();
    return names.filter(name => name[0].toUpperCase() === filterUpperCase);
}



// Invoca la funzione qui e stampa il risultato in console
const namesWhitA = searchInitials(names, "a");
console.log(namesWhitA);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]