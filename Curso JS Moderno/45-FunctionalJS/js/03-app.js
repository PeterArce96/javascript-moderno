const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];
// Funcion para retornar los productos con precio mayor a 400
// const resultado = carrito.filter(producto => {
//     return producto.precio > 400;
// })
// console.log(resultado);

// HIGH ORDER FUNCTIONS - Una función que toma otra función filter(mayor400)
const mayor400 = producto => {
    return producto.precio > 400;
}
const resultado = carrito.filter(mayor400);
console.log(resultado);