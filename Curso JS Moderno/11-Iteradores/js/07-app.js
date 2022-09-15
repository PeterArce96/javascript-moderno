// Iteradores - for...of

const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar'];

// itera y asigna a cada elemento del array "pendiente".
for (let pendiente of pendientes) {
    console.log(pendiente);
}

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]
for (let producto of carrito) {
    console.log(producto.nombre);
}