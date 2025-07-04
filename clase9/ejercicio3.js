/*Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas.*/

const prompt = require('prompt-sync')();
let booleano1 = prompt("Ingrese el primer valor booleano (true/false): ").toLowerCase();       
let booleano2 = prompt("Ingrese el segundo valor booleano (true/false): ").toLowerCase();  

let condicion1 = (booleano1 === "true");
let condicion2 = (booleano2 === "true");

console.log("/nresultados logicos");
console.log("Condición 1:", condicion1);
console.log("Condición 2:", condicion2);        
console.log("Condición 1 AND Condición 2:", condicion1 && condicion2);
console.log("Condición 1 OR Condición 2:", condicion1 || condicion2);   
console.log(`NOT Condición 1: ${!condicion1}`);
console.log(`NOT Condición 2: ${!condicion2}`);