mostrarTareas(listaTareas)
btnGuardar = document.getElementById('guardar')

btnFiltrar = document.getElementById('prioridadSelect')
var prioridad = document.getElementById('prioridad')

prioridad.addEventListener('change', recogePrioridad);
var seleccionPrioridad

//Recoge prioridad:
function recogePrioridad(e) {
    let prioridad = e.target.value;

    if (prioridad != '') {
        seleccionPrioridad = prioridad
    }
}
//FIN

//GUARDA TAREA
btnGuardar.addEventListener('click', e => {
    e.preventDefault(); //Evita que el boton default te lleve a otra pagina
    var nombre = document.getElementById('tituloTarea').value //Almacena el valor del formulario nombre
    if (nombre.length == 0 || nombre[0] == " " || prioridad[0] == " ") {
        alert('Escriba una tarea')
    } else {
        nuevaTarea(listaTareas, nombre, seleccionPrioridad, id) //Pasa los parametros guardados a la funcion guardarDatos()
        document.getElementById('tituloTarea').value = "";    //Vacía los campos una vez guardado
    }
})

//FIN



//FILTRA TAREA
btnFiltrar.addEventListener('change', recogeFiltrado);

function recogeFiltrado(e) {
    let filtrado = e.target.value;
    if (filtrado != "") {
        filtrarTareaPrioridad(listaTareas, filtrado)
    } else {
        mostrarTareas(listaTareas)
    }
}

//FIN


//BUSQUEDA POR NOMBRE
var busqueda = document.getElementById('search')

busqueda.addEventListener('keyup', recogerBusqueda)

function recogerBusqueda(e) {
    if (busqueda.value != "") {
        filtrarTareaNombre(listaTareas, busqueda.value)
    } else {
        mostrarTareas(listaTareas)
    }
}
//FIN

//ELIMINA TAREA


var intervalo = setInterval(eliminar, 500)


function eliminar() {
    var btnEliminar = document.querySelectorAll('article a')
    btnEliminar.forEach(element => {
        element.addEventListener('click', mensaje)
    })
}

function mensaje(e) {
    var target = e.target.parentElement.id
    borrarTarea(listaTareas, target)


}





//FIN