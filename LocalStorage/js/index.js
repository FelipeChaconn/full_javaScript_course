"use strict";


// Obtenemos un dato de local storage por medio del key  y lo pintamos en el DOM
document.querySelector("#usuarios").innerHTML = localStorage.getItem("user");

// OBtenemos los botones
let button1 = document.querySelector("#btn_save");
let button2 = document.querySelector("#btn_saveArray");


//Funcion para guardar el nombre y id el IdInput es el key y el nameInput el value
function save_localStorage() {
  let nameInput = document.getElementById("name").value;
  let idInput = document.getElementById("idUser").value;
  try {
    localStorage.setItem(idInput, nameInput);
  } catch (error) {
    console.log(error);
  }
};

//Funcion para guardar un JSON dentro del value del local storage
function save_ArraylocalStorage() {
    let nameInput = document.getElementById("nameUsr").value;
    let idInput = document.getElementById("idUsr").value;
    let age = document.getElementById("ageUsr").value;
    let hobie = document.getElementById("hobieUsr").value;
    try {
        let usuario ={
            nombre: nameInput,
            cedula: idInput,
            Edad: age,
            Hobbie: hobie
        };

      localStorage.setItem("user", JSON.stringify(usuario));
    } catch (error) {
      console.log(error);
    }
  };



// Con esta función limpiamos el localstorage con el key que le pasemos
localStorage.removeItem('KEY');
  
// Click del boton en ves del onclick
button1.addEventListener("click", () => {
  save_localStorage();
});

// button2.addEventListener("click", () => {
//     save_ArraylocalStorage();
//   });
