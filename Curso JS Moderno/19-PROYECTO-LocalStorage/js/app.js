// VARIABLES
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];//almacen de los tweets


// EVENTLISTENERES
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}


// FUNCIONES
function agregarTweet(e) {
    e.preventDefault();

    console.log('Agregando');
}