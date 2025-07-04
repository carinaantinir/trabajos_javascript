/*Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre*/

const prompt = require('prompt-sync')();
let nombre = prompt("Ingrese su nombre: ").toLowerCase();   
let miNombre = "carina"; 
if (nombre === "carina") {
    console.log("¡Hola, carina! Tu nombre es igual al mío");
}   else {
    console.log("tu nombre no es igual al mio");
}