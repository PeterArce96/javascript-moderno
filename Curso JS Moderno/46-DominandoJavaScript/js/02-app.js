// HOISTING
// como funcionan los contextos de ejecución de javascript
// 2 fases
// 1.- Creación: se crean o registran las variables
// 2.- Ejecución: se ejecutan las variables

// Function declaration
obtenerCliente('Peter'); //Podemos llamar la función antes o después de declararla
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

// obtenerCliente('Peter');


// Function expression
obtenerCliente2('Pablo'); //No podemos llamar a la función antes porque no ha sido inicializada
const obtenerCliente2 = function (nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}