

/*Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin).
 El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
 incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre 
 el inicio y el fin. Si el número inicial es mayor que el final, 
 el programa debe mostrar un mensaje indicando que los valores son inválidos*/

const { parse } = require('path');

 //Si INICIO es MAYOR eue FIN, mostrar mensaje valores invalidos 
 //Si no, usar ciclo for para mostrar los Números pares entre INICIO y FIN (incluidos)
const prompt = require('prompt-sync')();
let inicio = parseInt(prompt("Ingrese el número de inicio: ")); 
let fin = parseInt(prompt("Ingrese el número de fin: "));
if (inicio > fin) { // Verifica si el inicio es mayor que el fin
    console.log("Valores inválidos: el número de inicio es  mayor que el número de fin.");
}
for (let i = inicio; i <= fin; i++) { // Ciclo desde inicio hasta fin
    if (i % 2 === 0) { // Verifica si el número es par
        console.log(i + " es par "); // Imprime el número par
    }
}   
// bucle FOR control de lineas
//operador % para detectar numeros parse

