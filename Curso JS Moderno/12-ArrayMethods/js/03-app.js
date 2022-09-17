// ArrayMethods - .reduce()

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un .foreach
let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

// .reduce() --> ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
// con un .reduce()
// en los parámetros primero va el acumulador, luego el valoractual o el elemento que está siendo procesado en el array
// el 0 del final es para indicar en que cantidad debe empezar a acumular
let resultado = carrito.reduce ( (total,producto) => total + producto.precio, 0);
console.log(resultado);

