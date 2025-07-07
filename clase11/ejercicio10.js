/*Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora 
seleccione un número al azar entre 1 y 10. 
Luego, pide al usuario que adivine el número hasta 3 intentos. 
Si el usuario acierta en cualquiera de los intentos,
 muestra un mensaje de felicitación y detén los intentos restantes. 
 Si no acierta después de los 3 intentos, muestra el número secreto.
  Usa un for para resolver este ejercicio.*/
const prompt = require('prompt-sync')();
const numeroAzar = Math.floor(Math.random() * 10) + 1; //
// Genera un número al azar entre 1 y 10
let acerto = false; // Variable para verificar si el usuario ha acertado

for (let i = 1; i <=3; i++) {
    let intento = parseInt(prompt(`Intento ${i}: Adivina el número (entre 1 y 10): `));
    
    if (intento === numeroAzar) {
        console.log("¡Felicidades! Has adivinado el número.");
        acerto = true; // El usuario ha acertado
        break; // Sale del bucle si acierta

    } else if (i < 3)
        console.log(`incorrecto, te quedan ${ 3-i } intento/s.`);
        // Muestra cuántos intentos quedan
        if (i === 3) {
            console.log(`Lo siento, has agotado tus intentos.`);
        }
    }
 if (!acerto )
            console.log(`Lo siento, no has acertado!. El número era: ${numeroAzar}`);
    
