// OBJETOS - Problema con objetos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
// Como sabemos los const no se pueden modificar, pero en los objetos si

producto.disponible = false;

// También se borran
delete producto.precio;


console.log(producto);
