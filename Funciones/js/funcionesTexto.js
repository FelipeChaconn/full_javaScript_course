'use strict'

//Transformacion de cadenas de texto
let numero = 444;
let txt = "Hola mundo saludos Hola                    ";
let txt2 = "HolaMundo2";
let txt3;
numero.toString();
//Mayusculas
txt.toUpperCase();
//Minusculas
txt.toLowerCase();
//longitud contar elementos.
txt.length;

//Concatenar
txt3 = `Hola ${txt} `;
txt.concat('ho;a');


//Buscar 
let busqueda = txt.indexOf("Hola");
let busquedaSearch = txt.search("Hola");
//El match busca y retorna un array con la posicion
let busquedaMatch = txt.match("Hola")
//Busca el ultimo si hubierna varias
let busquedaUltimo = txt.lastIndexOf("Hola");
//Busqueda por numero de caracteres desde el caracter 5 5 caracteres
let busquedaSub = txt.substr(5,5);
//Busca una sola letra
let busquedaChart = txt.charAt(12);
//Busqueda textos en especifico al inicio , devuelve true or false
let busquedaStarts = txt.startsWith("hola");
document.writeln(busquedaUltimo);
console.log(busquedaSub);
document.write(busqueda);


//Remplazar
let remplazo = txt.replace("Hola","Hola Remplazado");
console.log(remplazo);


//Separar a partir de la posicones
let separar = txt.slice(3,10);
console.log(separar);

//mete en un array las separaciones en este caso por espacio
let separarConSplit = txt.split(' ');
console.log(separarConSplit);


//Eliminar espacios
let eliminarEspaciosAlPrincipioYAlFinal = txt.trim();
console.log(eliminarEspaciosAlPrincipioYAlFinal);