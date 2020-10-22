'user strict'


//FOR
/*
1. lleva el contador iniciado en 0;
2. La condicion para seguir(i es mayor que la variable);
3. El incrementador del contador
*/
let number= 5;

for(let i = 0; number> i; i++){
    console.log("Va recorriendo el numero",i);
}


//While
/*
mientras
1. recibe la condicion
*/
let edadByYear=2001;
let edad =0;
while(edadByYear<2020){
//hay que sumarlo porque si no se encicla
edadByYear++

edad++;
}
console.log(`tu edad es ${edad}`);


//Do While
/*
En el do  colocamos lo que cuando se cumple el while
Verificamos antes de ejecutar
1. recibe la condicion
*/
let age=20;
do {
    alert("SOLO CUANDO SEA mayor o igual a 25");
    age ++;
}
while(age <=25)







