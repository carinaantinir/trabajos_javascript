/*Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres*/
/* pedir al usuario 3 numeros usando prompt 
convertir los inputs a numeros usando parseFloat
comparar los 3 numeros para determinar el mayor y mostrarlo en la consola */

const prompt = require('prompt-sync')();
let primerNumero = parseFloat(prompt("ingrese el primer numero: "));
let segundoNumero = parseFloat(prompt("ingrese el segundo numero: "));  
let tercerNumero = parseFloat(prompt("ingrese el tercer numero: "));

/*  verificar cual es el mayor de los numeros ingresados por el usuario.*/
//primer numero es el mayor
 if (primerNumero >= segundoNumero && primerNumero >= tercerNumero) {
console.log(primerNumero + ' es el mayor de los tres números ingresados.');
//segundo numero es mayor 
} else if (segundoNumero >= primerNumero && segundoNumero >= tercerNumero) {
    console.log(segundoNumero + ' es el mayor de los tres números ingresados.'); 
//tercer numero es mayor
} else {
    console.log(tercerNumero + ' es el mayor de los tres números ingresados.');
}  
