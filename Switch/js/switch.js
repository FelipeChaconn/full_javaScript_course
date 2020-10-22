'use strict'

let edad = 3;
let mensaje;
//Con condicionales 
switch(true) {
    case (edad > 10):
        mensaje= "Eres mayor"
        break;
    case (edad < 10):
       mensaje = "Eres menor"
        break;

    default:
        edad = 0;
       mensaje= "Digita tu edad"
       break;
}
console.log(edad,mensaje);

// Recibiendo un valor en especifico
switch(edad) {
    case 12:
        mensaje= "Eres mayor"
        break;
    case 3:
       mensaje = "Eres menor"
        break;

    default:
        edad = 0;
       mensaje= "Digita tu edad"
       break
}
console.log(edad,mensaje);