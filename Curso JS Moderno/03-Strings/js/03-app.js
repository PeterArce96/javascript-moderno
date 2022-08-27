// Strings - concatenar un String y Template Strings
const producto = 'Monitor de 20 pulgadas';
const precio = '30 USD ';

// 1° Modo 
// concat() --> concatenar strings
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

// 2° Modo 
console.log(producto + ' Con un precio de: ' + precio);
console.log("El producto " + producto + " tiene un precio de: " + precio);
console.log("El producto " , producto , " tiene un precio de: " , precio);


// 3° Modo - Template strings
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);
