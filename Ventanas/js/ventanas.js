'use strict'

//Confirmaciones
let confirmado = confirm("Estas seguro");
if (confirmado) {
    document.write("Ha aceptado")
} else {
    document.write("Ha negado");
}

//Ingreso de datos
let age = 10;
let edad =prompt("Que edad tienes",age);
document.write(edad);
