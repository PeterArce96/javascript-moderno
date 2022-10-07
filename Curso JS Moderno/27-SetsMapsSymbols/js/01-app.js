// SETS
// Permiten crear una lista de valores sin duplicados
// Si tratamos de ingresar 2 o + valores iguales, solo cuenta como 1, hay que tener en cuenta las minusculas y mayusculas
// Los sets son iterables

const carrito = new Set();
carrito.add('Camisa');
carrito.add('camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa');

// .has() --> true o false si existe en el Set
console.log(carrito.has('Camisa'));
console.log(carrito.has('guitarra'));

// .size --> cuanto mide el Set
console.log(carrito.size);

// .delete() --> Eliminar un valor del Set
carrito.delete('camisa');
// si tratamos de eliminar un valor que no existe en el Set, devuelve false
console.log(carrito.delete('cajon'));

// .clear() --> vaciar el Set
// carrito.clear();

// Iteraciones con Set
// "producto" o "index" para imprimir los valores del set
// "pertenece" para imprimir todo el Set
carrito.forEach( (producto, index, pertenece) => {
    // console.log(producto);
    // console.log(index);
    console.log(pertenece);
})

console.log(carrito);

// Del siguiente arreglo eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20]

const noDuplicados = [...new Set(numeros)];
console.log(noDuplicados);
