// DOM - Generar HTML con javascript

const enlace = document.createElement('a');
// agregandole texto
enlace.textContent = 'Nuevo Enlace';
// agregandole href
enlace.href = '/nuevo-enlace';
// agregandole target
enlace.target = '_blank';
// agregarlo un atributo
enlace.setAttribute('data-enlace','nuevo-enlace');
// agregarle un class
enlace.classList.add('alguna-clase');
// agregarle una funcion o evento
enlace.onclick = miFuncion;
function miFuncion() {
    alert('Diste Click')
}

console.log(enlace);

// Seleccionar la navegacion para agregarlo allí
const navegacion = document.querySelector('.navegacion');
// agregarlo como hijo, lo agrega al ultimo
// navegacion.appendChild(enlace);

// agregarlo como hijo, antes de otro
navegacion.insertBefore(enlace, navegacion.children[1]);

// Crear un Card de forma dinámica
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');
// Asignar la imagen
card.appendChild(imagen);
// asignar info
card.appendChild(info);

// insertar en el HTML -
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);