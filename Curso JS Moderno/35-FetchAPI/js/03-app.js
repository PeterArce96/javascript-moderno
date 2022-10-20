// FetchAPI - Consultar e imprimir los resultados de un Fetch

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

// Para que una vez cargada la página simplemente muestre el JSON en el HTML
// document.addEventListener('DOMContentLoaded', obtenerDatos);
// y Eliminar las 2 líneas anteriores

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(resultado => {
            mostrarHTML(resultado);
        })
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;

        html += `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>`
    });

    contenido.innerHTML = html;
}