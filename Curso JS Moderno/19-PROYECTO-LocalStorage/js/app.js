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
    
    const tweetObj = {
        id: Date.now(),
        tweet,
        // tweet: tweet,
    }

    // añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // Una vez agregado creamos el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
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

// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();
    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            // Crear el html
            const li = document.createElement('li');

            // añadir el texto
            li.innerText = tweet.tweet;

            // insertarlo en el html
            listaTweets.appendChild(li);
        });
    }
}

// limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
