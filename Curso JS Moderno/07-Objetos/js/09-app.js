// OBJETOS - Sellar un objeto
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
// seal() --> No se pueden agregar ni eliminar propiedades, pero si se pueden modificar.
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

// isSealed() --> Saber si un objeto está sellado
console.log(Object.isSealed(producto));

// PREGUNTA LABORAL: ¿Diferencia entre freeze y seal?
// Freeze congela el objeto tal cua está y no te permite hacer nada, seal te permite modificar la llave existente, pero no te permite agregar o eliminar propiedades