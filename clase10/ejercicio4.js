//Declaración de Variables: 
//1. Declara una variable llamada verdadero y asígnale un dato 
//de tipo booleano (true o false). 
//2. Declara una variable llamada texto y asígnale un string de tu 
//elección (puedes usar cualquier mensaje que prefieras). 
//3. Declara una variable llamada numero y asígnale un dato 
//numérico (puedes usar cualquier número entero o decimal). 
//4. Declara una variable llamada nada y asígnale un valor que 
//represente la ausencia de valor en JavaScript. 
let verdadero = true ;
let texto = "Hola, este es tu mensaje de hoy" ;
let numero = 42 ;
let nada = null ;

// Operaciones y Validaciones: 
//1. Realiza una operación matemática usando la variable 
//número, por ejemplo, suma o resta con otro número de tu 
//elección. 
//2. Concatena el “string” de la variable texto con otro mensaje 
//adicional. 
//3. Verifica si la variable “verdadero” es true o false y muestra un 
//mensaje diferente según el resultado. 
//4. Implementa una condición para verificar si la variable nada 
//es null y muestra un mensaje si es así.//
let suma = numero + 10 ; 
console.log("El resultado de la suma es: " + suma) ;

let mensajeCompleto = texto + " y, hoy vas a brillar" ;
console.log(mensajeCompleto);

if (verdadero) {
    console.log("la variable verdadera es true") ;
} else {
    console.log("la variable verdadera es falsa") ;
}
if (nada === null) {
    console.log("es verdad, la variable nada significa null") ;
    }