//Ejercicio 4: Determinar si un número es par o impar 
//operadores aritméticos y condicionales
//1. Solicite al usuario que ingrese un número entero. 
//2. Determine si el número es par o impar.
//3. Muestre un mensaje indicando si el número es par o impar.
// Utiliza el operador módulo (%) para comprobar si el número es divisible por 2. 
//Usa una estructura if-else para mostrar el mensaje adecuado.

//1. Solicite al usuario que ingrese un número entero.
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número entero: "));
if (numero % 2 === 0) { 
    console.log(`Elnumero ${numero} es par `)
} else { 
    console.log(`el numero ${numero} es impar`);
}