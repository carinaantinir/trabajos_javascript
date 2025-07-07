
/*Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y 
una operación matemática a realizar: suma, resta, 
multiplicación o división. Según la operación ingresada, 
el programa deberá calcular y mostrar el resultado. 
Si el usuario ingresa una operación inválida, 
el programa debe mostrar un mensaje de error. 
Usa switch para resolverlo*/
const prompt = require('prompt-sync')();
let num1 = parseFloat(prompt("Ingrese el primer número: "));    
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división): ");  
let resultado;
switch  (operacion .toLowerCase()) {
    case 'suma':
        resultado = num1 + num2;
        console.log(`El resultado de la suma es: ${resultado}`);
        break;
    case 'resta':
        resultado = num1 - num2;
        console.log(`El resultado de la resta es: ${resultado}`);
        break;
    case 'multiplicación':
        resultado = num1 * num2;
        console.log(`El resultado de la multiplicación es: ${resultado}`);
        break;
    case 'división':
        if (num2 !== 0) {
            resultado = num1 / num2;
            console.log(`El resultado de la división es: ${resultado}`);
        } else {
            console.log("Error: No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación inválida. Por favor, ingrese una operación válida.");
}

