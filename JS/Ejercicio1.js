
alert('Iniciando cambios. Este es el HTML inicial.');

    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("Contenido parrafo");
    parrafo.appendChild(contenido); 
    document.body.appendChild(parrafo);
//eliminar enlace
var enlaceEliminar = document.querySelector('#enlace');
enlaceEliminar.parentNode.removeChild(enlaceEliminar);

//Cambiar parrafo
document.querySelector("#parr1").textContent = "Mi nombre es: Marián";

// Crear un nuevo párrafo con la fecha actual
var nuevoParrafo = document.createElement("p");

// Obtener la fecha actual y formatearla
var fechaActual = new Date();
var fechaFormateada = fechaActual.getDate() + ' de ' + fechaActual.toLocaleDateString('es-ES', { month: 'long' }) + ' de ' + fechaActual.getFullYear();

// Agregar el texto de la fecha al párrafo
nuevoParrafo.textContent = "La fecha actual es: " + fechaFormateada;

// Insertar el nuevo párrafo antes del div usando querySelector
var div = document.querySelector("#division");
div.insertBefore(nuevoParrafo, div.firstElementChild);

