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

// Agregar tweet
function agregarTweet(e) {
    e.preventDefault();
    // textarea donde escribe el usuario
    const tweet = document.querySelector('#tweet').value;

    // validacion
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacío');

        return; //evita que se ejecuten más líneas de código
    }
    console.log('agregando tweet');
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}
