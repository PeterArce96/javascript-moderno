// DOM - querySelector

// querySelector --> Devuelve el primer elemento del documento, que coincida con el grupo especificado de selectores.
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// seleccionar el segundo card de 'hospedaje'
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// seleccionar el formulario
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

// seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);