/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/*
//standard function
function takeFirstLetter(array){
    let firstLetters=[]
    let name
    for(let i=0; i<array.length; i++){
        name=array[i]
        firstLetters.push(name[0])
    }
    return firstLetters
}
*/

//arrow function
const takeFirstLetter = (array) =>{
    let firstLetters=[]
    let name
    for(let i=0; i<array.length; i++){
        name=array[i]
        firstLetters.push(name[0])
    }
    return firstLetters
}

// Invoca la funzione qui e stampa il risultato in console

const firstLetters=takeFirstLetter(names)
console.log(firstLetters)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]