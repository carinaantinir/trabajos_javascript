//Ejercicio 2 – Usando las variables:  
//Escribe un programa que pida al usuario que ingrese su nombre, su 
//edad y su peso, y luego muestre un mensaje personalizado que incluya 
//toda esta información. 
//Desglosando el ejercicio deberás: 
//1. Pide al usuario que ingrese su nombre. 
//2. Pide al usuario que ingrese su edad. 
//3. Pide al usuario que ingrese su peso. 
//4. Muestra un mensaje personalizado que incluya el nombre, la edad 
//y el peso del usuario.
// Importa el módulo prompt-sync para poder leer la entrada del usuario
//  instalarlo primero con `npm install prompt-sync`

const prompt = require(`prompt-sync`)({sigint: true});
let nombre = prompt("ingrese su nombre: ") ; 
let edad = parseInt(prompt("ingrese su edad: ")); 
let peso = parseFloat(prompt("ingrese su peso: ")); 
// Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario
console.log(`Hola ${nombre}, tienes ${edad} años y pesas ${peso} kg.`);