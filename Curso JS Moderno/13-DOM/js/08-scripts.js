// DOM - Traversing the DOM
// recorrer el DOM con .children

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
// Ir al primer elemento hijo
console.log(navegacion.firstElementChild);
// Ir al ultimo elemento hijo
console.log(navegacion.lastElementChild);

// // // lista los elementos dentro de nav, los espacios en blanco son considerados elementos text
// // console.log(navegacion.childNodes);
// // // lista solo los elementos reales, ya no espacios en blanco
// // console.log(navegacion.children);

// // seleccionamos el elemento y con .children seleccionamos a sus hijos
// // el nombre del nodo
// console.log(navegacion.children[1].nodeName);
// // el tipo del nodo
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');
// card.children[1].children[1].textContent= 'Nuevo Heading'

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

// Para ir al padre
console.log(card.parentNode); //con parenElement es igual
// para ir subiendo al padre del padre del padre
console.log(card.parentElement.parentElement.parentElement);

// Para recorrer entre hermanos
console.log(card);
console.log(card.nextElementSibling); //ir al hermano siguiente
console.log(card.nextElementSibling.nextElementSibling); //ir al hermano después del siguiente
// Ir al hermano anterior
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);