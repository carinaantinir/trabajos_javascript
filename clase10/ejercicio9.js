/*Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de 
Masa Corporal (IMC). El IMC se calcula con la fórmula:  
Pide al usuario que ingrese su peso y su altura, y muestra el IMC 
calculado. 
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
Pista 2: La fórmula puede representarse asi: 
let imc = peso / (altura * altura); */

// Importamos el módulo prompt-sync para poder leer la entrada del usuario
const prompt = require(`prompt-sync`)({ sigint: true });

// Pedimos al usuario que ingrese su peso y altura
// Usamos parseFloat para asegurarnos de que los valores sean números decimales
let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));

// formula del IMC
let imc = peso / (altura * altura); 
console.log(`Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`); 
// toFixed(2) para mostrar dos decimales