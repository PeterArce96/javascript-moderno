// ARRAYS - Crear nuevo arreglo con el Spread Operator
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

let resultado;

// Copia el array y le agrega producto - forma declarativa
resultado = [...carrito, producto]; // Monitor
resultado = [...resultado, producto2]; // Monitor, celular
// Dependiendo donde le pases el spread operator, dará como resultado las posiciones del array
resultado = [producto3,...resultado]; // Teclado, Monitor, Celular

console.table(resultado);
