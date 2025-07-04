/*Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso. */

const prompt = require('prompt-sync')();
let edad = parseInt(prompt ("ingrese su edad: "));
if (edad >= 18) {

    console.log(edad + ' años, eres mayor de edad.'); 
} else {
    console.log (edad + ' años, eres menor de edad.');
}