

/*●	Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números 
continuamente hasta que el usuario ingrese un número negativo. 
Luego, imprime la suma de todos los números ingresados.*/

// objetivo:
//pedir al usuario que ingrese numeros, hasta que ingrese uno negativo.
//Sumar todo los números ingresados (menos el negativo).
//imprimir la suma final.
const prompt = require(`prompt-sync`) ();
let suma = 0;
let numero = parseInt(prompt("ingrese un número (negativo para terminar:"));

while (numero >=0){
    suma += numero;
    numero = parseInt(prompt("ingrese otro número (negativo para terminar:"));
}

console.log("la suma de todos los números ingesados es: " + suma) ;

