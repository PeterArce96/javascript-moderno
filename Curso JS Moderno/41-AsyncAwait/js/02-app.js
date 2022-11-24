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

// AsyncAwait
// async se utiliza en la función Padre, sobre la que se ejecuta el Promise
// Await se utiliza en la parte en la que va esperar que se ejecute el Promise, detiene la ejecución del código hasta obtener un resultado de descargarCliente().
async function ejecutar() {
    try {
        console.log(1+1);
        const respuesta = await descargarCliente(); //si se detecta un error, no se ejecuta las 2 siguientes líneas.
        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}
ejecutar();
