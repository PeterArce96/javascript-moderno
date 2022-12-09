// ¿Qué es Self?

// es lo mismo que la ventana global o window
// window === self
// window.self === self;

// window.onload = () => {
//     console.log('Ventana Lista');
// }
self.onload = () => {
    console.log('Ventana Lista');
}

// const producto = {
//     nombre: 'Monitos 20 pulgadas',
//     precio: 30,
//     disponible: true,
//     mostrarInfo: function() {
//         const self = this;
//         return `El producto ${self.nombre} tiene un precio de ${self.precio}`
//     }
// }
// console.log(producto.mostrarInfo());

window.nombre = 'Monitos 20 pulgadas';

const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El producto ${self.nombre} tiene un precio de ${self.precio}`
    }
}
console.log(producto.mostrarInfo());