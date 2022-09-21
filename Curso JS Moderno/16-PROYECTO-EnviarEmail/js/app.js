// Variables
const btnEnviar = document.querySelector('#enviar');

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
}



// Funciones

function iniciarApp() {
    // disabled hace que el boton no se pueda presionar
    btnEnviar.disabled = true;
    // clases de Tailwind.css, cursor-not-allowed: que el puntero se convierta en un circulo rojo tachado, opacity-50: quitarle el color con opacidad
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

