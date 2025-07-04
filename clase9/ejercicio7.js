/*Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.204629 */

const prompt = require('prompt-sync')();
let pesoKg = parseFloat(prompt("Ingrese su peso en kg:  "));
let pesoLibra = pesoKg * 2.20462 ; 
console.log(pesoKg + "kg son " + pesoLibra  + " libras.");

