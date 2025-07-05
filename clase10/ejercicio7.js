

/*Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores 
iniciales y luego intercambia sus valores. Muestra los valores antes y 
después del intercambio en la consola. 
Para intercambiar valores puedes usar varios métodos(usando una 
variable temporal, aritmética o asignación simultanea), eres libre de 
elegir el que desees, eso si, investiga sobre el que usaras. */
let a =  10;
let b = 15;
console.log(`Antes del intercambio: a = ${a}, b = ${b}`);

//metodo ussando una variable temporal 

// Guardamos el valor de a en una variable temporal
let temp = a; 
// Asignamos el valor de b a a
a = b;  
// Asignamos el valor de la variable temporal a b
b = temp;   
console.log(`Después del intercambio: a = ${a}, b = ${b}`);