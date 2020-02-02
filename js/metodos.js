

var id = listaTareas.length;

var seccion = document.getElementById("tareas")



function nuevaTarea(pListaTareas, pTitulo, pPrioridad, pId) {
    pId++;
    let nuevaData = pListaTareas.push({ idTarea: pId, titulo: pTitulo, prioridad: pPrioridad })
    id = pId;
    mostrarTarea(listaTareas, id)
}

function mostrarTarea(pListaTareas, pId) {
    var unaTarea = pListaTareas.find(tarea => {
        return tarea.idTarea == pId;
    })

    seccion.innerHTML += '<article id="' + unaTarea.idTarea + '" class="' + unaTarea.prioridad + '"><h2>' + unaTarea.titulo + '</h2><a href="#" title="eliminar">Eliminar</a></article>'
}

function mostrarTareas(pListaTareas) {
    seccion.innerHTML = ""
    for (let i = 0; i < pListaTareas.length; i++) {
        var idTarea = pListaTareas[i].idTarea;

        mostrarTarea(pListaTareas, idTarea);
    }
}

function borrarTarea(pListaTareas, pId) {
    let tareaBorrar = pListaTareas.find((tarea) => {
        return tarea.idTarea == pId;
    });

    let posicionTarea = pListaTareas.findIndex((tarea) => {
        return tarea.idTarea == tareaBorrar.idTarea
    });

    pListaTareas.splice(posicionTarea, 1);
    var seccion = document.getElementById("tareas")
    seccion.innerHTML = '';
    mostrarTareas(listaTareas);
}


function filtrarTareaPrioridad(pListaTareas, pPrioridad) {
    let tareasFiltradas = pListaTareas.filter((tarea) => {
        return tarea.prioridad == pPrioridad;
    })
    var seccion = document.getElementById("tareas")
    seccion.innerHTML = '';
    mostrarTareas(tareasFiltradas);
}

var nombre
function filtrarTareaNombre(pListaTareas, pBuscar) {
    pListaTareas.forEach(tarea => {
        var buscar = tarea.titulo.toLowerCase().includes(pBuscar.toLowerCase())
        if (buscar == true) {
            nombre = tarea.titulo
        }
    });
    var filtrarNombre = pListaTareas.filter((tarea) => {
        return tarea.titulo == nombre;
    })
    var seccion = document.getElementById("tareas")
    seccion.innerHTML = '';
    mostrarTareas(filtrarNombre);
    console.log(filtrarNombre)
}

/*
function filtrarXbusqueda(pListaTareas, pNombre) {
    var listaFiltrada = new Array();

    for (tarea of pListaTareas) {
        if (tarea.titulo.toLowerCase().includes(pNombre.toLowerCase())) {
            listaFiltrada.push(tarea);
        }
    }
    return listaFiltrada;
}
*/