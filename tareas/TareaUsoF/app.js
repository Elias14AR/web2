function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}
function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}
function multiplicacion(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}
function division(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}

let numero1 = prompt("Ingresa numero 1: ");
let numero2 = prompt("Ingresa numero 2: ");

console.log("El total de la suma es: " + suma(numero1, numero2));
console.log("El total de la resta es: " + resta(numero1, numero2));
console.log("El total de la multiplicación es: " + multiplicacion(numero1, numero2));
console.log("El total de la división es: " + division(numero1, numero2));
