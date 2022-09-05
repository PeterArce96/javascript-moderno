// ARRAYS - Añadir elementos al inicio y final
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio'];

// .push() --> Agregar elemento al final del arreglo
meses.push('Agosto');
meses.push('Setiembre');

console.table(meses);

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
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 50,
}
// .unshift() --> Añade un elemento al inicio del array
carrito.unshift(producto3);

console.table(carrito);
