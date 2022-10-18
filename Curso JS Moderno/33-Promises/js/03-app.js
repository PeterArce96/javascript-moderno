// Promises --> Creando Promises, .then y .catch
// resolve --> se ejecuta cuando el promise se cumple
// reject --> se ejecuta cuando el promise NO se cumple, error

const aplicarDescuento = new Promise( (resolve, reject) =>{
    const descuento = true;

    if (descuento) {
        resolve('Descuento aplicado');
    }else {
        reject('No se pudo aplicar');
    }
});
console.log(aplicarDescuento);

// Como ver el solo el resultado

aplicarDescuento
    // cuando se cumple
    .then( resultado => {
        descuento(resultado); //podemos enviarle funciones
        console.log(resultado);
    })
    // cuando no se cumple
    .catch( error => {
        console.log(error);
    })

function descuento(mensaje) {
    console.log(mensaje);
}

// Hay 3 valores posibles en consola...
// fulfilled -- El promise se cumplió
// rejected -- El promise no se cumplió
// pending -- El promise está vacío, no se ha cumplido ni se ha rechazado