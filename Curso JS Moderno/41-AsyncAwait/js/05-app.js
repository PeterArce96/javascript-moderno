// https:picsum.photos/list

const url = "https://picsum.photos/list";

document.addEventListener('DOMContentLoaded', obtenerDatos);

// Con Promises
// incluye el "catch", para el error
function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
}
// Con Asyncawait
// Se le aumenta el trycatch para que muestre el error
async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
