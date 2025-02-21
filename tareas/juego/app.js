var nm = Math.floor(Math.random() * (10 - 1) + 1);
console.log("Numero de la maquina: " + nm);

var n1 = prompt("Ingresa un numero de 1 a 10");
console.log("Numero ingresado es: " + n1);

var vidas = 5;

while (nm != n1 && vidas > 1) {
    vidas--;
    console.log("Número incorrecto. Vidas restantes: " + vidas);
    n1 = prompt("Ingresa un numero de 1 a 10");
    console.log("Numero ingresado es: " + n1);
}

if (nm == n1) {
    console.log("¡Ganaste!");
} else {
    console.log("Perdiste. El número era: " + nm);
}
