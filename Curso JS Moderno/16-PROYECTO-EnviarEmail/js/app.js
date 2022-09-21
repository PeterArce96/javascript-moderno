// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

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



// FUNCIONES

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

        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {
        const resultado = e.target.value.indexOf('@');
        if(resultado < 0){
            mostrarError('El email no es válido');
        }
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'backgroung-red-100', 'text-red-500', 'p-3','mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

    
}
