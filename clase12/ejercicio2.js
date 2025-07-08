/*jercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. 
Si la contraseña es incorrecta, debe volver a pedirla hasta que 
el usuario ingrese la correcta.
 La contraseña correcta es "1234".*/
 const prompt = require(`prompt-sync`) ();
 let contraseña ;
 do {
    contraseña = prompt("ingresá la contraseña : ");
 } while (contraseña !== "1234");
  console.log("¡contraseña correcta! Acceso concedido.");
  // declaro la variable contraseña sin valor al principio.
  //entra el Do, pide que ingrese una contraseña, 
  //si es incorrecta vuelve a pedirla
  //cuando pongo "1234", sale del bucle y
  // muestra el mensaje de acceso.