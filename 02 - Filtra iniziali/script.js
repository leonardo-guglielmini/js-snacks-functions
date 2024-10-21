/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/*
//standard function
function findFirstLetter(array, letter){
    let namesWithLetter=[]
    let name
    for(let i=0; i < array.length; i++)
    {
        name=array[i]
        if(letter===name[0])
        {
            namesWithLetter.push(name)
        }
    }
    return(namesWithLetter)
}
*/

//arrow function
const findFirstLetter = (array, letter) =>{
    let namesWithLetter=[]
    let name
    for(let i=0; i < array.length; i++)
    {
        name=array[i]
        if(letter===name[0])
        {
            namesWithLetter.push(name)
        }
    }
    return(namesWithLetter)
}



// Invoca la funzione qui e stampa il risultato in console
const letter=prompt("Inserisci una lettera: ")
const namesWithLetter = findFirstLetter(names, letter)
console.log(namesWithLetter)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]