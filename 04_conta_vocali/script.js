/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(word) {
    let numberOfVowels = 0;
    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        const isVowels = letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u";
        if (isVowels) {
            numberOfVowels++;
        }
    }
    return numberOfVowels;
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)