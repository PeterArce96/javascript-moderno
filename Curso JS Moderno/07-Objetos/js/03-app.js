// OBJETOS - Agregar o eliminar propiedades de un objeto
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    // imagen: "imagen.jpg",
}

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// Eliminar una propiedad al objeto
delete producto.disponible;

console.log(producto);
