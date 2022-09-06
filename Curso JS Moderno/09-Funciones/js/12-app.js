// Funciones - Arrow functions en un forEach y un map
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]
// Cambiamos funcion por el arrow function
// const nuevoArreglo = carrito.map( function(prod) {
//     return `Producto: ${prod.nombre} - Precio: ${prod.precio}`;
// })

const nuevoArreglo = carrito.map( prod => `Producto: ${prod.nombre} - Precio: ${prod.precio}`);


// .forEach() --> ejecuta la función indicada una vez por cada elemento del array.
carrito.forEach( prod => console.log(`Producto: ${prod.nombre} - Precio: ${prod.precio}`));


console.log(nuevoArreglo);
