// Arrays - .forEach para iterar un array
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

// 1° FORMA
for(let i = 0; i < carrito.length; i++){
    // console.log(carrito[i]);
    // console.log(carrito[i].nombre);
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}
console.log('**********************************');
//2° FORMA- CON ARRAYMETHOD
// .forEach() --> ejecuta la función indicada una vez por cada elemento del array.
carrito.forEach( function(prod) {
    console.log(`Producto: ${prod.nombre} - Precio: ${prod.precio}`);
})

