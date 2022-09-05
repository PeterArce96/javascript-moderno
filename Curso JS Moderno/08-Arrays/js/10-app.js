// Arrays - .map para iterar un array
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]
// .map() --> Crea un arreglo nuevo, llena una variable con un arreglo nuevo
const nuevoArreglo = carrito.map( function(prod) {
    return `Producto: ${prod.nombre} - Precio: ${prod.precio}`;
})

// .forEach() --> ejecuta la función indicada una vez por cada elemento del array.
const nuevoArreglo2 = carrito.forEach( function(prod) {
    return `Producto: ${prod.nombre} - Precio: ${prod.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
