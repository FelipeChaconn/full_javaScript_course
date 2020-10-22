'use strict'
//Comprobar ver si el navegador es compatible
if(typeof(Storage)!==undefined){
    //Si esta disponible
}

//Guardar datos 
localStorage.setItem('key','value');

//Recuperar elemento
localStorage.getItem('key ');

//Guardar objetos
let usuarios = [
    {id:'01',
    nombre:"Daniel",
    apellido:"perez",
    sexo:"masc"},
    {id:'02',
        nombre:"Carlos",
        apellido:"Rojas",
        sexo:"masc"}];

usuarios.forEach(element => {
    let contador = 0;
   while (contador<=usuarios.length) {
    localStorage.setItem(`usuario ${element.id}`,JSON.stringify(element));
    contador ++;
   }
    });

//Eliminar datos
localStorage.removeItem('key');


//Eliminar todo
localStorage.clear();




