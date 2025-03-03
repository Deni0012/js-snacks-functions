/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function lookForInitials(names) {
    const initials = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        initials.push(name[0]);
    }
    return initials;
}

const lookForInitialsHarrow = names => {
    const initials = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        initials.push(name[0]);
    }
    return initials;
}

function lookForInitialsMap(names) {
    return names.map(name => name[0]);
}


// Invoca la funzione qui e stampa il risultato in console

const namesInitialis = lookForInitials(names);
console.log(namesInitialis)

const namesInitialisHarrow = lookForInitialsHarrow(names);
console.log(namesInitialisHarrow)

const namesInitialisMap = lookForInitialsMap(names);
console.log(namesInitialisMap)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]