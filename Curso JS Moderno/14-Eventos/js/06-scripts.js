// Eventos - Event Bubbling

// Event bubbling --> es cuando se activa un evento dentro de otro, se propagan

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// cardDiv.addEventListener('click', () => {
//     console.log('Click en card');
// })
// infoDiv.addEventListener('click', () => {
//     console.log('Click en info');
// })
// titulo.addEventListener('click', () => {
//     console.log('Click en titulo');
// })

// Si le hacemos click al info del card, se activa tambien el evento de cardDiv, porque el info está dentro del card. Y si hacemos click en el titulo, se activa infoDiv y cardDiv porque titulo está dentro de los 2 anteriores.

// Detener el EVENT BUBBLING
// Podemos detener esta propagación con stopPropagation();

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en card');
})
infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en info');
})
titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en titulo');
})