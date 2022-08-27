// Comentamos el 02-app.js
// VARIABLE CONST
// Principal diferencia con LET, const no puede ser reasignable
const producto = 'Tablet';
// No se pueden reasignar, provoca un error.
// producto = "Monitor";
console.log(producto);

// Las variables const deben inicializarse, aquí se da un error porque en la primera linea solo se declara y en la segunda se inicializa, pero deben hacerse en la misma línea
// const precio;
// precio = 20;
const precio = 20;
console.log(precio);

// USAR LET PARA CUANDO SEPAS QUE LA VARIABLE VA CAMBIAR
// USA CONST CUANDO SEPAS QUE LA VARIABLE NO VA CAMBIAR.