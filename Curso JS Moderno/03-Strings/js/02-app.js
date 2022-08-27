// String Methods
const producto = 'Monitor de 20 pulgadas';

console.log(producto);
// .length --> Nos muestra la cantidad de caracteres del String
console.log(producto.length);

// .indexOf() --> Trae el índice o posición donde se encuentra el string.
// Monitor está en la posición 0 de la variable producto
console.log(producto.indexOf('Monitor'));
// Pulgadas está en la posición 14, ese es el caracter donde empieza el string
console.log(producto.indexOf('pulgadas'));
// Si en caso no se encuentre el String ingresado, muestra un -1
console.log(producto.indexOf('Tablet'));

// includes() --> Trae True o False en caso el String se encuentre en la variable
console.log(producto.includes('Tablet'));
console.log(producto.includes('Monitor'));
// Este método diferencia mayúsculas de minúsculas
console.log(producto.includes('monitor'));