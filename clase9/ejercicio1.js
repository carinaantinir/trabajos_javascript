//Declara dos variables numéricas numero1 y numero2. Pide al usuario 
//que ingrese dos números y muestra cuál es mayor o si son iguales. 
const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

if (numero1 > numero2) {
    console.log(numero1 + ' es mayor que: ' +  numero2); 
    //si el numero1 es mayor que numero2, muestra el mensaje con el numero1

} else if (numero1 < numero2) { 
    console.log(numero2 + ' es mayor que: ' + numero1); 
    //si el numero2 es mayor que numero1, muestra el mensaje con el numero2
} else {
    console.log('los numeros son iguales');
    //si ninguno es mayor ni menor, son iguales
}      