// AsyncAwait - sintaxis
function descargarCliente() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) { //si no hay error, entonces resolvemos
                resolve('El listado de Clientes se descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
};
// AsyncAwait en función express y Declaration

// declaration
// async function ejecutar() {
    
// }

// expression
const ejecutar = async () => {
    try {
        console.log(1+1);
        const respuesta = await descargarCliente();
        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}
ejecutar();
