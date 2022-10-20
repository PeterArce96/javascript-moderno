// FetchAPI - Consultar JSON

const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(resultado => {
            mostrarHTML(resultado); //JS convierte el json en un objeto
        })
}

// Traer el resultado y mostrarlo en HTML
function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML= `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>`
}