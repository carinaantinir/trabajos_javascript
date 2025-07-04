//Ejercicio 5: Saludo personalizado 
//Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de texto y la función prompt()
//1. Solicite al usuario que ingrese su nombre. 
//2. Muestre un saludo personalizado usando el nombre ingresado.
//Utiliza prompt() para recibir el nombre del usuario.
//Muestra un mensaje utilizando concatenación de cadenas.
const prompt = require('prompt-sync')();
let nombre = prompt("ingrese su nombre:");
console.log(`hola ${nombre} gracias por venir`);