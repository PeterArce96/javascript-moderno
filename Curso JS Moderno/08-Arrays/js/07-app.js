// ARRAYS - Eliminar elementos con Splice

// CARRITO
const carrito =[];

// Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400,
}

const producto2 = {
    nombre: "Celular",
    precio: 800,
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50,
}

const producto4 = {
    nombre: 'Auriculares',
    precio: 50,
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4)



// .unshift() --> Añade un elemento al inicio del array
carrito.unshift(producto3);
console.table(carrito);

// // .pop() --> Eliminar último elemento del arreglo
// carrito.pop();
// console.table(carrito);

// // .shift() --> Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// .splice() --> Eliminar elementos, se le envia 2 argumentos (inicio de eliminar, cantidad de elementos a eliminar)
carrito.splice(3,1);
console.table(carrito);