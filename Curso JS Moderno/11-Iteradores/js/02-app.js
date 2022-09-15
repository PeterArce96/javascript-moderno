// Iteradores - break y continue; en un for loop

// break --> Salta de un bucle, rompe el bucle.
// continue --> Salta de una iteración, continua la siguiente.
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log("CINCO");
//         continue;
//     }
//     console.log(`Numero: ${i}`);
// }

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El artículo ${carrito[i].nombre} tiene un descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
    
}