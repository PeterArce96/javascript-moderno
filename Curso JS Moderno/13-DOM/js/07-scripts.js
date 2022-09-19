// DOM - Cambiando el CSS con JS


// const encabezado = document.querySelector('h1');

// con .style
// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

// con .classList 
const card = document.querySelector('.card');
// agregar una nueva clase .add
card.classList.add('nueva-clase', 'segunda-clase');
// quitar una clase .remove
card.classList.remove('card')
console.log(card.classList);

