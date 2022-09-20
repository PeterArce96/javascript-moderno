// Eventos - Prevenir Event Bubbling con Delegation

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    // // identificamos a que le estamos dando click
    // console.log(e.target);
    // // identificamos la clase de a lo que le estamos dando click
    // console.log(e.target.classList);

    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }
    if (e.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }
    if (e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
})
