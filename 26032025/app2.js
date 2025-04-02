/*
//Funcion declarativa
function NA (min,max){
    return Math.floor(Math.random()*(max-min) + min);
}
//Primer funcion
console.log(NA(1,11));

//Funcion expresada
const mN = function(min,max){
    return Math.floor(Math.random()*(max-min) + min);
}
//
console.log(mN(10,35))

//funcion flecha
function dato(a){
    return a + 100;
}

var datos = function (a){
    return a + 100;
}

//flecha
var datos = (a) =>   a + 100;

var datos = a => a + 100;

let NAf= (min,max) => Math.floor(Math.random()*(max-min) + min);
*/


//con for each

/* const arr1 = ['a','b','c','d'];
arr1.forEach(element => console.log(element));

arr.forEach (function callback (currentValue, index, array)){
    //iterador
} */

    let frutas = ["Manzana", "pera","naranja","pollo"];
    //frutas.forEach(fruta => console.log(fruta));
    frutas.forEach((fruta,index,array) => {
        console.log(array)
    });
