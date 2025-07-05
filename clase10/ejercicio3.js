//1. Crea una constante llamada EDAD_MINIMA y otra llamada 
//EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18 
//y 99 respectivamente. 
//2. Pide al usuario que ingrese su edad. 
//3. Usa “parseInt” para convertir la entrada del usuario a un número 
//entero. 
//4. Valida si la edad ingresada está dentro del rango permitido y 
//muestra un mensaje adecuado. 
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
const prompt = require(`prompt-sync`)({ sigint: true });
let edad = parseInt(prompt("ingrese su edad: ")) ;
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA)  {
    console.log(`tu edad es ${edad} y podes participar`);
} else {
    console.log(`tu edad es ${edad} y no podes participar`);
}