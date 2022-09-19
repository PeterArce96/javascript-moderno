// Eventos - Eventos con el Mouse

const nav = document.querySelector('.navegacion');

// // 'click'--> se activa cuando el usuario haga click con el mouse sobre el elemento
// nav.addEventListener('click', () => {
//     console.log('click en nav');
// })

// // mouseenter --> se activa cuando el puntero para por el elemento
// nav.addEventListener('mouseenter', () => {
//     console.log('entrando a la navegacion');
//     nav.style.backgroundColor = 'transparent'
// })

// // mouseout --> se activa cuando el puntero del mouse sale del elemento
// nav.addEventListener('mouseout', () => {
//     console.log('saliendo de la navegacion');
//     nav.style.backgroundColor = 'white';
// })

// mousedown --> se activa cuando presionas click, similar a un evento 'click'
// nav.addEventListener('mousedown', () => {
//     console.log('saliendo de la navegacion');
// })

// mouseup --> se activa cuando sueltas el click después de haberlo presionado
// nav.addEventListener('mouseup', () => {
//     console.log('saliendo de la navegacion');
// })

// dblckick --> se activa cuando se da doble click sobre el elemento 
nav.addEventListener('mouseup', () => {
    console.log('saliendo de la navegacion');
})



