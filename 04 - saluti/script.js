/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

/*
//standard function
function addGreeting(name){
    const greeting="Ciao"
    const separator =" "
    const greetName = greeting + separator + name
    return greetName
}
*/

//arrow function
const addGreeting = (name) =>{
    const greeting="Ciao"
    const separator =" "
    const greetName = greeting + separator + name
    return greetName
}



// Invoca la funzione qui e stampa il risultato in console
const message=addGreeting(name)
console.log(message) 


//Risultato atteso se si passa 'Mario': // ciao Mario