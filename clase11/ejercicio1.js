

//  Ejercicio 1: ¿Positivo, negativo o cero?
//Consigna:
//Vamos a trabajar con números y aprender a clasificarlos. 
// Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.
                          
const prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Ingrese un número: "));
if (numero > 0) { //el numero es mayor a 0
    console.log("El número ingresado es positivo.");
}
else if (numero < 0) { //el numero es menor a 0
    console.log("El número ingresado es negativo.");

} else { // si no es igual a las condiciones anteriores, el numero es 0
    console.log("El número ingresado es cero.");
}