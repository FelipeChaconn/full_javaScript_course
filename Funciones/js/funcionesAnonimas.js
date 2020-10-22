'use strict'

//Funciones Anonimas
//No tienen nombre y pueden guardarse en una variable se usan para callbacks
let pelicula = function(nombre,estrellas) {

    return `la pelicula se llama ${nombre} Y tiene ${estrellas} estrellas`;
};

//Callbacks 
//Son funciones anonimas  dentro de otra funcion se pasan por parametros
function sumame(num1,num2,sumaYmuestra,sumaPorDos) {
    let sumar = num1+num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar
};

sumame(5,7,function(dato){
    console.log(`La suma es , ${dato}`);
},
function(dato){
    console.log(`La suma por dos es:${dato*2}`);
});

//FUNCIONES DE FLECHA
//Son funciones que son declaradas en una misma linea en otras palabras se cambia la palabra function por una flecha no son adecuadas para ser utilizadas como métodos, además de que no pueden ser usadas como constructores.
(param1, param2,paramN) => { sentencias }
(param1, param2, paramN) => expresion;
// Equivalente a: () => { return expresion; } 

// Los paréntesis son opcionales cuando hay un solo parámetro: singleParam => { statements } 
(singleParam) => { sentencias }; singleParam => { sentencias }

// Una función sin parámetros requiere paréntesis: 
() => { sentencias };

//ejemplo
let sumar = (a,b) => {

    return a + b
    
    }