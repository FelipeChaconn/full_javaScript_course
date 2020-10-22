'use strict'

//forma objeto
let nombres = ["Felipe","Monica", "Dario","Melany"];
let paises = new Array("Alemania", "Costa Rica", "Espana");

//JSON
let pelicula = {
    titulo: 'Hombres de negro',
    actores: ['Felipe','Dario','Juan Pablo'],
    year: '2001'
}

/** 
 * RECORRER ARRAYS
 * 1.For
 * 2.Foreach
*3.For in
*/
document.write(`<ol>`)
//1.
for(let i=0;paises.length> i;i++){
document.writeln(`<li>Pais con nombre ${paises[i]}</li>`);
}
document.write('</br>');


//2.
nombres.forEach((nombre,indice,array)=> {
    document.write(`<li>Pais con nombre ${nombre} | ${indice} | ${array}</li>`);
})
document.write('</br>');

//Asi se agrega elementos a la lista
paises.push("Escocia");


//.3
for (let pais in paises) {
    document.writeln(`<li>Pais con nombre ${paises[pais]}</li>`);
}
document.write(`</ol>`);


//Elimina el ultimo de la lista
paises.pop();

//Convertir todo el array en un string
let paises_string = paises.join();

//Converitr todo el string a un array
let cadena = "texto1,texto2,texto3,texto4";
let new_array = cadena.split(',');


//Orderar el array
paises.sort();

//al reves
paises.reverse();


//BUSQUEDAS EN ARRAYS
//1. DEvuelve undefined o el valor
let find =nombres.find((nombre) => nombre == "Felipe");
console.log('el resultado es',find);

//2. Buscar en arreglos de  numeros valores con respecto algun < > = y retorna true o false
let edades = [12,22,28,12,24,12,28,21,21,19,21];
let findBySome =edades.some((edad) => edad >= 21);
console.log('Hay valores mayor o igual a 21?',findBySome);