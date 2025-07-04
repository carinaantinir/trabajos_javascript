/*Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI.*/

const prompt = require('prompt-sync')();
const PI = 3.14159;
let radio = parseFloat(prompt("ingrese el radio del circulo: "));
let area = PI * radio * radio;
let perimetro = 2 * PI * radio;
console.log("El area del circulo es:  " + area);
console.log("El perimetro del circulo es: " + perimetro); 