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

const countVowelsHarrow = word => {
    let numberOfVowels = 0;
    let vowels = [];
    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        const isA = letter === "a";
        const isE = letter === "e";
        const isI = letter === "i";
        const isO = letter === "o";
        const isU = letter === "u";
        const isVowels = isA || isE || isI || isO || isU;

        if (isVowels) {
            numberOfVowels++;
            vowels.push(letter);
        }
    }
    return [numberOfVowels, vowels];
}

function countVowelsIncludes(word) {
    let numberOfVowels = 0;
    let vowels = [];
    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        const isVowel = "aeiou".includes(letter);
        if (isVowel) {
            numberOfVowels++;
            vowels.push(letter);
        }
    }
    return [numberOfVowels, vowels];
}



// Invoca la funzione qui e stampa il risultato in console

const vowelsOfWord = countVowels(word);
console.log(vowelsOfWord)


const vowelsOfWordHarrow = countVowelsHarrow(word);
console.log(`Numero di vocali: ${vowelsOfWordHarrow[0]}`)
console.log(`Vocali: ${vowelsOfWordHarrow[1]}`)


const vowelsOfWordIncludes = countVowelsIncludes(word);
console.log(`Numero di vocali: ${vowelsOfWordIncludes[0]}`)
console.log(`Vocali: ${vowelsOfWordIncludes[1]}`)



//Risultato atteso se si passa 'javascript': 3 (a, a, i)