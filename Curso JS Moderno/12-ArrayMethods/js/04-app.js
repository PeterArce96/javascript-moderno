// ArrayMethods - .filter()

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// .filter --> crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
let resultado;
// todos los productos con precio mayor a 400
resultado = carrito.filter( producto => producto.precio > 400);
// todos los productos con precio menor a 600
resultado = carrito.filter( producto => producto.precio < 600);
// todos los productos menos los Audifonos
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos')
// solo los Audifonos
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos')
console.log(resultado);