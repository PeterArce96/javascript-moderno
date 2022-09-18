// DOM - getElementByClassName

// seleccionar elementos por su clase...la clase debe escribirse igual al html
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen mas de una vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no existe, devuelve un arreglo vacío
const noExiste = document.getElementsByClassName('NoExiste');
console.log(noExiste);