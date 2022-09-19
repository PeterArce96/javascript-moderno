// Eventos - Eventos en los inputs

const busqueda = document.querySelector('.busqueda');

// // keydown --> se ejecuta cuando presionas una tecla dentro del input
// busqueda.addEventListener('keydown', () => {
//     console.log('Escribiendo');
// })

// // keyup --> se ejecuta cuando sueltas una teclas depués de haberla presionado dentro del input
// busqueda.addEventListener('keyup', () => {
//     console.log('Escribiendo');
// })

// // blur --> se activa cuando sales del input
// busqueda.addEventListener('blur', () => {
//     console.log('Escribiendo');
// })

// // copy --> se activa cuando copias el texto digitado en el input
// busqueda.addEventListener('copy', () => {
//     console.log('Escribiendo');
// })

// // paste --> se activa cuando pegas algo dentro del input
// busqueda.addEventListener('paste', () => {
//     console.log('Escribiendo');
// })

// // cut --> se activa cuando cortas algo dentro del input
// busqueda.addEventListener('cut', () => {
//     console.log('Escribiendo');
// })

// // input --> se activa cuando realizar cualquiera de los eventos anteriores, menos el blur
// busqueda.addEventListener('input', () => {
//     console.log('Escribiendo');
// })

// // Visualizar el evento que estamos realizando, si vemos el evento en consola este tiene varias propiedades.
// busqueda.addEventListener('input', (evento) => {
//     console.log(evento);
// })

// // e.type --> evento que estamos ejecutando
// busqueda.addEventListener('input', (evento) => {
//     console.log(evento.type);
// })

// // e.target --> en que input especificamente estamos trabajando
// busqueda.addEventListener('input', (evento) => {
//     console.log(evento.target);
// })

// e.taget.value - lo que se está escribiendo en el input, ideal para búsqueda
busqueda.addEventListener('input', (evento) => {
    console.log(evento.target.value);
})