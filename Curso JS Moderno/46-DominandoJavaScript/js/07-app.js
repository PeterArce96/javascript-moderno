// Event Loop o Loop de eventos en JS

// Como se va ejecutando el código en JS, que tiene mayor prioridad

// Eventos que tienen más prioridad que otros
// Los console.log se ejecutan primero
// Los promises tienen más prioridad que los setTimeout

console.log('Primero');
setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(()=> {
    console.log('Cuarto');
}, 0);

new Promise(function (resolve) {
    resolve('Desconocido...')
}).then(console.log)

console.log('Último');

// Las funciones tienen una mayor prioridad que los Promises
function hola() {
    console.log('hola');
}
hola()

/*
    Primero
    Tercero
    Último
    hola
    Desconocido...
    Segundo
    Cuarto
*/