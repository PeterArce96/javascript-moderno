// LocalStorage - Obtener datos de LocalStorage

const nombre = localStorage.getItem('meses');
console.log(nombre);
// Si tratamos de obtener algo que no existe, nos marca 'null'

// con esto obtenemos el producto como 'string'
// const productoJSON = localStorage.getItem('producto');
// console.log(productoJSON);

// con JSON.parse cambiamos el string obtenido a 'objeto'
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
