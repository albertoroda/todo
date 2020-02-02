btnGuardar = document.getElementById('guardar')
btnEliminar = document.querySelector('article a')
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
    if (nombre.length == 0 || nombre[0] == " ") {
        alert('Escriba una tarea')
    } else {
        nuevaTarea(listaTareas, nombre, seleccionPrioridad, id) //Pasa los parametros guardados a la funcion guardarDatos()
        document.getElementById('tituloTarea').value = "";    //Vacía los campos una vez guardado
    }
})

//FIN

//ELIMINA TAREA
/*
btnEliminar.addEventListener('click', e => {
    alert('hey');
})*/

//FIN

//FILTRA TAREA
btnFiltrar.addEventListener('change', recogeFiltrado);

function recogeFiltrado(e) {
    let filtrado = e.target.value;
    filtrarTareaPrioridad(listaTareas, filtrado)
}

//FIN


//BUSQUEDA POR NOMBRE
var busqueda = document.getElementById('search')

busqueda.addEventListener('keyup', recogerBusqueda)

function recogerBusqueda(e) {
    filtrarTareaNombre(listaTareas, busqueda.value)
}
//FIN
