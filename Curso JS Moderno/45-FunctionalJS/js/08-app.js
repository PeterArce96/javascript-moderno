// Closures
// Acceder a un valor desde el exterior
// Van acompañado del scope

const obtenerCliente = () => {
    const nombre = "Juan";

    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}

const cliente = obtenerCliente();
cliente(); // mando a llamar una variable que existe, pero desde fuera de su scope