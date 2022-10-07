// ITERADORES
// Crear nuestro propio iterador

function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            // saber la longitud del arreglo
            const fin = (i >= carrito.length);
            // saber los valores del arreglo
            const valor = !fin ? carrito[i++] : undefined ;

            return {
                fin,
                valor
            }

        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());