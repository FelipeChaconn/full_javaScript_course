'use strict' 


//Obtener del DOM
let titulo = document.getElementById('tituloId');
//2. con el query selector es mas elegante obtener tags
let cajaDiv = document.querySelector('#cajaId');


//Setear texto al html
titulo.innerHTML = "Hola desde Java Script";

//set color a caja de texto
let caja = document.getElementById('cajaId');
caja.style.height = '120px';
caja.style.width = '300px';
caja.style.background = "blue";

//Set class
caja.className ='ClassCaja'

