/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

/*
//standard function
function greetTime(name, time){
    const date = new Date
    const time = date.getHours()
    let greet = ""
    const separator = " "
    //console.log(time)
    if(time<=13){
        greet="Buongiorno"
    }else if(time<=17){
        greet="Buon pomeriggio"
    }else{
        greet="Buonasera"
    }
    const greetName=greet+separator+name

    return(greetName)
}
*/

//arrow function
const greetTime = (name/*, time*/) =>{
    const date = new Date
    const time = date.getHours()
    let greet = ""
    const separator = " "
    //console.log(time)
    if(time<=13){
        greet="Buongiorno"
    }else if(time<=17){
        greet="Buon pomeriggio"
    }else{
        greet="Buonasera"
    }
    const greetName=greet+separator+name

    return(greetName)
}

// Invoca la funzione qui e stampa il risultato in console
//const time=parseInt(prompt("Indica che ore sono: "))
const greetName=greetTime(name/*, time*/)
console.log(greetName)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.