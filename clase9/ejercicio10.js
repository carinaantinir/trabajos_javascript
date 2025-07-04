/*Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error.*/

const prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Ingrese un numero del 1 al 7: "));

if (numero === 1) {
    console.log("lunes");
} else if (numero === 2) {
   console.log("martes") 
} else if (numero === 3) {
    console.log("miercoles") 
} else if (numero === 4) {
    console.log("jueves") 
} else if (numero === 5) {
    console.log("viernes") 
} else if (numero === 6) {
    console.log("sabado")   
} else if (numero === 7) {
    console.log("domingo")   
} else {
    console.log("El numero no es valido. ");
}

