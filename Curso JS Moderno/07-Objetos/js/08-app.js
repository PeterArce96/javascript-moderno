// OBJETOS - Congelar un objeto para no poder modificarlo

// Mediante esta sentencia, no se permite las malas prácticas en JS
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
// La siguiente sentencia se activa con el "use strict", 
// freeze() --> congela el objeto
Object.freeze( producto );

// Provocan error
// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
// isFrozen --> Como saber si un objeto está congelado y no se puede modificar.
console.log(Object.isFrozen(producto));

