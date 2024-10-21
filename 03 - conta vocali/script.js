/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/*
//standard function
function findVowels(word){
    const vowels=["a","e","i","o","u"]
    let totalVowels = 0
    for(let i=0; i< word.length;i++){
        for(let j=0; j<vowels.length;j++){
            if(vowels[j]===word[i]){
                totalVowels++
            }
        }
    }
    return totalVowels
}
*/

//arrow function
const findVowels = (word) =>{
    const vowels=["a","e","i","o","u"]
    let totalVowels = 0
    for(let i=0; i< word.length;i++){
        if (vowels.includes(word[i])){
            totalVowels++
        }
        /*
        for(let j=0; j<vowels.length;j++){
            if(vowels[j]===word[i]){
                totalVowels++
            }
        */
    }
    return totalVowels
}

// Invoca la funzione qui e stampa il risultato in console
const totalVowels = findVowels(word)
console.log(`Nella parola ${word} si trovano ${totalVowels} vocali`)



//Risultato atteso se si passa 'javascript': 3 (a, a, i)