// FetchAPI - Como utilizar FetchAPI

// Solo lee texto plano o .json, no soporta xml
// Utiliza Promises

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';

    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status); //200 - consulta realizada exitosamente
            console.log(respuesta.statusText); //OK - todo bien
            console.log(respuesta.url); //http://127.0.0.1:5500/35-FetchAPI/data/datos.txt
            console.log(respuesta.type); //basic

            return respuesta.text();  //tambien .json si es que así lo fuera
        })
        .then(datos => {  //en este segundo .then ya se obtiene la respuesta en concreto
            console.log(datos);
        })
        .catch(error => { //reject del Promise.
            console.log(error);
        })
}