
let inv = [];
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles: \n" + 
        "1. Agregar Producto \n" +
        "2. Mostrar todoslos productos \n" +
        "3. Buscar Producto por nombre \n" +
        "4. Salir \n" +
        "Elige una opcion: "

    ));
}

function aggP(){
    let Nproducto = prompt("Introduce el nombre del producto");
    let cantidadPro = parseInt ( prompt("Introduce la cantidad del producto")) ;
    let precioPro = parseInt (prompt("Introduce el precio del producto"));

   if (cantidadPro > 0 && precioPro > 0) {
    let producto ={
        nombre :   Nproducto,
        cantidad : cantidadPro,
        precio : precioPro
     };
     inv.push(producto);
     alert("Producto agregado");
    } else {
        alert ("Cantidad y precio tiene que ser positivo");
    }

}

function mostrarP(){
    if(inv.length === 0){
        alert ("No hay inventario");

    } else{
       let mensaje ="Productos en inventario: ";

       for(let i = 0; i < inv.length; i++){
        mensaje += `Producto:  ${1+1} \n` +
                    `Nombre: ${inv[i].nombre}\n ` +
                    `Cantidad: ${inv[i].cantidad} \n` +
                    `Precio: ${inv.[i].precio} \n` ;
                           
       }

    }
    alert (mensaje)
}


function iniciar(){
    let cont = true;
    while(cont){
        let opc = mostrarMenu();
        switch(opc){
            case 1:
                aggP();
                break;
            case 2:
                mostrarP();
                break;
            case 3:
                buscarP();
                break;
            case 4:
                alert("saliendo...");
                cont = false;
                break;
            default:
                alert ("Opcion no valida, intententelo de nuevo");
        }
    }
}


mostrarMenu();
iniciar(); 
aggP();



