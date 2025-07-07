
/*Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. 
Escribe un programa que le pida al usuario un número y determine si es par o impar. 
Muestra un mensaje explicativo indicando qué significa cada caso.*/

const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número: "));

if (numero % 2 === 0) { // Verifica si el número es par (se divide *2, sin resto)
    console.log("El número ingresado es par."); 
 } else { 
console.log("El número ingresado es impar."); // Si tiene resto al dividirse, entonces es impar
 } 