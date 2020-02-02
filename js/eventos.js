btnGuardar = document.getElementById('guardar')
btnEliminar = document.querySelector('.tareas a')
var prioridad = document.getElementById('prioridad')

prioridad.addEventListener('change', recogePrioridad);
var seleccionPrioridad

//Recoge prioridad:
function recogePrioridad(e) {
    let prioridad = e.target.value;

    if (prioridad != '') {
        seleccionPrioridad = prioridad

    }
    //Me devuelve el diagnostico seleccionado cada vez que cambio el selector:
    //console.log(e.target.value)
}
//FIN

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

btnEliminar.addEventListener('click', e => {
    e.preventDefault();


})
