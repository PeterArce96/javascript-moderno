// Strings - cortar espacios en blanco
const producto = '                     Monitor de 20 pulgadas                ';
console.log(producto);
console.log(producto.length);

// Eliminar del inicio...
// trimStart() --> Eliminar espacios en blanco al inicio del string
console.log(producto.trimStart());
console.log(producto.trimStart().length);

// trimEnd() --> Eliminar espacios en blanco al final del string
console.log(producto.trimEnd());
console.log(producto.trimEnd().length);

// Combinar los métodos - inicio y final
console.log(producto.trimStart().trimEnd());

// 
console.log(producto.trim());
