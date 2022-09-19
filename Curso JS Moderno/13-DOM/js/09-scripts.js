// DOM - Eliminar elementos en el DOM

// const primerEnlace = document.querySelector('a');
// // con .remove() --> elimina un elemento por si mismo
// primerEnlace.remove();
// console.log(primerEnlace);

// Eliminar desde el Padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
// con removeChile() --> tienes que pasarle la referencia del elemento a eliminar
navegacion.removeChild(navegacion.children[2]);
