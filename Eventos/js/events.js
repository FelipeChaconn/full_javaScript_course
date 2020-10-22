'use strict'


function cambiarColorFondo() {
    let bg= boton1.style.background;
    if(bg=="green") {
        boton1.style.background="red";
    } else {
       boton1.style.background='green'
    }
    return true;
}


let boton1 = document.querySelector('#btn1');
let boton2 = document.querySelector('.text1');
let inputText = document.querySelector('#campo_nombre');

/**
*Eventos del MOUSE
*
 **/

//CLICK
boton1.addEventListener('click',()=>{
    cambiarColorFondo();
     //Utilizar this dentro de el metodo es lo mejor para hacer referencia y tener acceso a todo el objeyto sobre el cual aplicamos el evento(boton1)
     this.style.border = "10px solid black"
});

//Mouse Over
boton2.addEventListener('mouseover',function(){
    boton2.style.background="blue";
});

//Mouse Out
boton2.addEventListener('mouseout',()=>{
boton2.style.background='#ccc';
});

/**
*Eventos del TECLADO
*
**/
let textoFocus = document.querySelector('.mensaje_focus');
let textoBlur = document.querySelector('.mensaje_blur');
//Focus
inputText.addEventListener('focus',()=>{
    textoBlur.style.display="none";
    textoFocus.style.display = "block";
});
//Blur
inputText.addEventListener('blur',()=>{
    textoFocus.style.display = "none";
    textoBlur.style.display="block";
  });
//KeyDown
inputText.addEventListener('keydown',event=>{
    textoFocus.style.display = "none";
    textoBlur.style.display="none";
    console.log('Estas pulsando estatecla',String.fromCharCode(event.keyCode));
  });
//Keyup
inputText.addEventListener('keyup',event=>{
    textoFocus.style.display = "none";
    textoBlur.style.display="none";
    console.log('Estas soltando estatecla',String.fromCharCode(event.keyCode));
  });
//Keypress
inputText.addEventListener('keypress',event=>{
    textoFocus.style.display = "none";
    textoBlur.style.display="none";
    console.log('Tecla Presionada',String.fromCharCode(event.keyCode));
  });

/**
*Evento load mientras el DOM se carga
*
**/

//Hace la misma funcion que el documentReady
window.addEventListener('load',()=>{
//Aqui va lo que queremos que se muestre cuando todo este cargado
})