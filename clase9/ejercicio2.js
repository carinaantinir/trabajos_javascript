//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
//valores numéricos de tu elección. Pide al usuario que ingrese un 
//número y verifica si está dentro del rango definido por las constantes

const prompt = require('prompt-sync')();
let RANGO_MINIMO = 1;
let RANGO_MAXIMO = 10;
let numero = parseFloat(prompt("Ingrese un número: "));
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
     console.log('el numero esta dentro del rango');
} else {
     console.log('el numero esta fuera del rango');
    } 
    


