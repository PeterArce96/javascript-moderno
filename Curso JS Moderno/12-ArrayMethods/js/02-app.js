// ArrayMethods - .findIndex()
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes,i) => {
    if (mes === 'Abril') {
        console.log(`Encontrado en el indice ${i}`);
    }
})

// .findIndex() --> devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1

// Encontrar el indice de Abril

// Modo 1
// const indice = meses.findIndex( (mes) => {
//     return mes === 'Abril';
// })
// console.log(indice);

// Modo 2 - simplificado
const indice = meses.findIndex( mes => mes ==='Abril');
console.log(indice);

// Encontrar un indice de un arreglo de objetos
// Modo 1 - extendido
// const indice2 = carrito.findIndex( (producto) => {
//     return producto.precio === 100;
// })
// console.log(indice2);

// Modo 2 - simplificado
const indice2 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice2);

