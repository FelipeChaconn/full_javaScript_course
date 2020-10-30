'use strict'
function getBoom() {
  //ver el tamaño de la ventana esto depende de si hacemos la ventana peque;a o no
  console.log("altura:", innerHeight, "ancho", innerWidth);

  //ver el tamaño de la pantalla
  console.log(
    "altura pantalla:",
    screen.height,
    "ancho pantalla:",
    screen.width
  );
}

//redirecionar 
function redirect(url){
    window.location.href = url;
}

//Abrir ventanas de navegador
function openWindow(url) {
    window.open(url,"","width=400,height=500");
}