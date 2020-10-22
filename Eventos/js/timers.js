'use strict'
//Hace lo mismo que el document ready, cuando todo el DOM este cargado, se empieza a ejecutar esto
window.addEventListener('load',function(){
    /**
     * TIMERs
     */
    let title= document.querySelector(".timerTitle");
    let buttonstop= document.querySelector(".stopInterval");
    let buttonStart= document.querySelector(".startInterval");

    //setInterval() como dice le seteamos un intervalo de tiempo para que cada x momento ejecute algo
    let contador = 20;
    function intervalo(){
        let tiempo = setInterval(()=>{
            console.log('Ingresa al timer');
           if(title.style.fontSize <= '90px'){
                contador++;
                title.style.fontSize=`${contador}px`
           }else {
                this.clearInterval();
           }
        },700/**Este es el tiempo(milisegundos) */);
        return tiempo;
    };

    let tiempo = intervalo();
  
    //detener interval lo destruye
    buttonstop.addEventListener('click',()=>{
        this.clearInterval(tiempo);
    });
     //avanzar intervalo
     buttonStart.addEventListener('click',()=>{
       intervalo();
    });


    //setTimeOut() Se ejecuta una sola vez  no como el setInterval
    let timeOut = this.setTimeout(()=>{
        alert('Se ejecuto el timeOut a los 5 segundos');
    },5000)
});