//Inicializamos un arreglo para almacenar las tareas
let tareas = [];


//Funcion para mostrar un menu

function mostrarMenu(){
   return parseInt( prompt(
    "Opciones disponibles: \n"+
    "1. Agregar tarea\n"+
    "2. Ver todas las tareas\n"+
    "3. Marcar una tarea como completada\n"+
    "4. salir\n"+
    "Elige una opcion: "
));
}

function agregarTarea(){
    let nombre = prompt("Introduce la tarea");

    if (nombre){
        let tarea={
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert ("Tarea agregada");

    } else {
        alert ("El nombre no puede ir vacio")
    }
    console.log("En proceso");
}
function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas");
    } else {
        let mensaje = "Lista de tareas: \n";
        tareas.forEach ((tarea, index)=>{
            mensaje += `${index+1} . ${tarea.nombre} [${tarea.completada ? "Completada " : "Pendiente"}]`

        });
        alert(mensaje);

    }
}
function marcarTareaCompletada(){
    console.log("En proceso");
}

//Funcion pricipal para menejar el programa

function  iniciarPrograma(){

}


let condiction = true;
while(condiction){
let opcion = mostrarMenu();
switch (opcion){
    case 1:
        agregarTarea();
        break;
    case 2:
        verTareas;
        break;
    case 3:
        marcarTareaCompletada();
        break;
    case 4:
        alert ("Saliendo");
        condiction = false;
        break;
    default:
        alert ("invalido");
        
}
}