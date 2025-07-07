
/*Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y
 muestre todos los múltiplos de ese número entre 1 y 100. 
 Utiliza un ciclo for para resolverlo.
*/
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número entero positivo: "));   
if (numero <= 0) {
    console.log("Por favor, ingrese un número entero positivo.");
}   
else {
    console.log(`Los múltiplos de ${numero} entre 1 y 100 son:`);
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) { // Verifica si i es un múltiplo de numero
            console.log(i); // Imprime el múltiplo
        }
    }
}