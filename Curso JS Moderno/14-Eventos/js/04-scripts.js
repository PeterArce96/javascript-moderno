// Eventos - Evento submit a un formulario

const formulario = document.querySelector('#formulario');

// submit -->  se activa cuando el formulario es enviado, normalmente se utiliza para validar el formulario antes de ser enviado al servidor o bien para abortar el envío y procesarlo con JavaScript.
formulario.addEventListener('submit', validarFormulario);

// .preventDefault() --> prevenir las acciones que se realizan por default, en este caso enviar el formulario o ingresar a un enlace. Detenemos su accion.

function validarFormulario(e) {
    e.preventDefault();

    console.log('Consulta un api');

    // console.log(e.target.action);
    // console.log(e.target.method);
    console.log(e.target.action);
}