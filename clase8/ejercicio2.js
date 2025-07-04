// Ejercicio 2: Verificar si un número es positivo, negativo o cero
//uso de condicionales (if, else).
const prompt = require('prompt-sync')();
//1. Pida al usuario que ingrese un número.
let  numero = parseFloat(prompt("Ingrese un numero:));"))
//2. Verifique si el número es positivo, negativo o igual a cero.
if (numero > 0 ) {
    console.log(`èl numero ${numero} es positivo`); 
} else if (numero < 0) {
    console.log(`el numero ${numero} es negativo`);
} else if (numero === 0){
    console.log("el numero es 0");
    }
//3. Muestre un mensaje indicando cuál es el caso. 
//requisitos
//Utiliza una estructura de control de flujo (if, else if, else) para hacer las 
//verificaciones. 
// Usa parseFloat() para convertir la entrada del usuario a un número.//