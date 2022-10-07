// Generadores
// Función que retorna un iterador
// lleva un * antes del nombre

// function *crearGenerador() {
//     yield 1;
//     yield 'Juan';
//     yield 3+3;
//     yield true;
// }

// const iterador = crearGenerador();

// // iterador suspendido
// console.log(iterador);
// // retornamos el valor, cada vez que ponemos next() salta de valor
// console.log(iterador.next().value); //1 - 1° yield
// console.log(iterador.next());
// console.log(iterador.next().value); //6 - 3° yield
// console.log(iterador.next());
// console.log(iterador.next()); //una vez que finalizamos, recorremos todos los elementos del yield, este generador se cierra
// console.log(iterador);


// Generador para carrito de Compras
function *generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());