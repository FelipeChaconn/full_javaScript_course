'use strict'
//funcion con parametros
function parametros(param1,param2) {
    const resultado = param1+param2;

    return resultado
}

//Es la corrrecta estructura
function calculadora(){
resultadoMultiplicado = parametros+2;
    //es para que devuelva algo
    return  calculadora
 }


/* Parametros REST ...
Gracias a los tres puntos Agrupa todos los elementos en uno solo
*/

function listadoNumerosREST(...resto_de_frutas){

    return console.log(resto_de_frutas);
}
listadoNumerosREST('pera','sandia','papaya','Limon',5,6);


//puede mandarle como parametros una lista de X valores con los tres puntos hacemos como una integracion de los elementos con el resto 
//SPREAD Nos permite transformar un arrat en una lista de parametros es decir contrario lo que hace REST, desagrupa en multiples
let frutas = ["Banano","Aguacate","Tomate"]
let listadoFrutas=(["sandia","manzana","pera","Mango",...frutas]);
console.log('With spread',listadoFrutas);


//Sin el SPREAD
let listadoFrutasWITHOUTSPREAD=(["sandia","manzana","pera","Mango",frutas]);
console.log('With out spread',listadoFrutasWITHOUTSPREAD);


