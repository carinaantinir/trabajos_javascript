//Ejercicio 3: Suma de dos números ingresados por el usuario
//1. Pida al usuario que ingrese dos números.
//2. Sume ambos números. 
//3. Muestre el resultado de la suma.
//Utiliza prompt() para recibir los números.
//Utiliza parseFloat() para convertir las entradas a números. 
//Almacena los resultados en variables adecuadas y muestra el resultado
const prompt = require(`prompt-sync`)();
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: ")); 
let suma = numero1 + numero2;
console.log(`La suma de ${numero1} y ${numero2} es ${suma}`); 