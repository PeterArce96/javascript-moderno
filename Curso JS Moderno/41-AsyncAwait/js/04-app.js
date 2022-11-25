// AsyncAwait - Múltiples Promises

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    })
}
function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    })
}

// Imprimir las 2 funciones independientes a la vez.
const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

app();