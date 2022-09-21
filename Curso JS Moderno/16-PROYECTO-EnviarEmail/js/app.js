// Variables
const btnEnviar = document.querySelector('#enviar');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners(){
    // Cuando el app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}



// Funciones

function iniciarApp() {
    // disabled hace que el boton no se pueda presionar
    btnEnviar.disabled = true;
    // clases de Tailwind.css, cursor-not-allowed: que el puntero se convierta en un circulo rojo tachado, opacity-50: quitarle el color con opacidad
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Validar formulario
function validarFormulario(e) {
    if(e.target.value.length > 0.){
        console.log('Si hay algo');
    }else {
        e.target.classList.add('border', 'border-red-500');
    }
}

