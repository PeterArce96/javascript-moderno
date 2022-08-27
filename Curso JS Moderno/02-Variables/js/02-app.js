// Aunq son archivos diferentes, salta un error porque producto ya ha sido declarado en el 01-app.js y está al mismo nivel o scope que 02-app.js. VAMOS A COMENTAR TODO EL CÓDIGO DEL ARCHIVO ANTERIOR.
let producto = 'Tablet';

// Reasignar el valor
producto = "Monitor";
producto = 20;
producto = true;
producto = null;

console.log(producto);

let precio;
precio = 300;

console.log(precio);