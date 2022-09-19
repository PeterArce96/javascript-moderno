// DOM - Modificar Textos o imágenes con JS

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// // Los 2 primeros se traen el texto, mientras que el tercero se trae el HTML
// console.log(encabezado.innerText); //Si en el CSS este texto está con visibility: hidden, no lo va encontrar
// console.log(encabezado.textContent); //Si lo encuentra
// console.log(encabezado.innerHTML);

// agregarle un nuevo texto
// const nuevoHeading = 'Nuevo Heading'
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// Modificar una imagen, con 'src'
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
