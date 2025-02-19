var n1= prompt("Ingresa el primer numero");
var n2= prompt("Ingresa el segundo numero");
var n3= prompt("Ingresa el tercer numero");

if(n1 > n2 && n3){
    console.log("El n1 es mayor que  n2 y n3 y es: " + n1);
} else if(n2 > n1 && n3){
    console.log("El n2 es mayor que  n1 y n3 y es:  " + n2);
} else if(n3 > n2 && n1){
    console.log("El n3 es mayor que  n2 y n1 y es: " + n3);
} else {
    console.log("todos iguales y es " + n1)
}
