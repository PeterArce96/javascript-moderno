// Module Pattern

const mostrarCliente = nombre => {
    console.log(nombre);
}

export default mostrarCliente;

// Forma anterior, con un IFI, podemos hacer uso de esta funcion en otro archivo como el 06-app.js y hacerle un console.log a modulo1.nombre
const modulo1 = (function() {
    const nombre = 'Juan';

    function hola() {
        console.log('hola');
    }

    return{
        nombre,
        hola
    }
})();
