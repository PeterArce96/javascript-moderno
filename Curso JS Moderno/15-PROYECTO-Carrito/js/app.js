
// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// Funciones
function agregarCurso(e) {
    // e.preventDefault(), para que no de el salto a un enlace cuando demos al boton "agregar a carrito"
    e.preventDefault();
    // solo queremos que se agrege a carrito cuando demos click en el boton, no el cualquier parte del Card. 'Event Bubbling'
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target);
    }
}
