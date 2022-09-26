// LocalStorage - Primeros pasos con local Storage

// ('llave','valor')
// Localstorage persiste más que Session storage. Con local puedes cerrar navegador, apagar pc, volver a prender y los datos se mantienen. Session, se pieden los datos cuando cierras el navegador. Tienen la misma sintaxis
// En localstorage solo se pueden almacenar "Strings".
localStorage.setItem('nombre','Peter');
// sessionStorage.setItem('nombre','Peter');

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300,
}
// Json.stringify --> convierte el objeto anterior en un string
// 1° forma
const productoString = JSON.stringify(producto);
console.log(productoString);
console.log(typeof productoString);
localStorage.setItem('producto', productoString);

// 2° forma
const meses = ['enero', 'febrero', 'marzo'];
localStorage.setItem('meses',JSON.stringify(meses));