
/*Ejercicio 3: ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo. 
El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
Usa un ciclo for para realizar la tarea.
*/
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número positivo: "));  
if (numero > 0) { // Verifica si el número es positivo
    for (let contar= 1; contar  <= numero; contar++) {  // Ciclo desde 1 hasta el número ingresado
        console.log("contando hasta: " + contar); // Imprime el valor actual del contador
    }        
} else { 
    console.log("El numero ingresado no es positivo"); // Mensaje si el número no es positivo
    } 