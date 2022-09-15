// Iteradores - For loop

// for (let i = 0; i <= 10; i++) {
//     console.log(`Numero: ${i}`);
// }

// Como saber en un for loop aquellos numeros que son pares e impares
// for(let i = 0; i <= 20; i++){
//     if( i % 2 == 0){
//         console.log(`Numero par: ${i}`);
//     }else{
//         console.log(`Numero impar: ${i}`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audífonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

console.log(carrito.length);
// se ejecuta el loot hasta que sea menor a la cantidad de productos en el carrito (6)    0-1-2-3-4-5
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}
