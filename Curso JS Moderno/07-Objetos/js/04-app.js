// OBJETOS - Destructuring de objetos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Método anterior, desactualizado
// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring, extrae y crea la variable en un solo paso.
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);