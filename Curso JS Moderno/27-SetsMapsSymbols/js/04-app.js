// WeakMap
// Mantener datos como privados
// Solo aceptan objetos
// No se puede saber su extensión
// No se pueden iterar

const producto = {
    idProducto: 10,
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto));
console.log(weakmap.get(producto)); //Monitor, la parte del idProducto queda oculta
console.log(weakmap.size); //no se puede saber su extensión
console.log(weakmap.delete(producto)); //eliminar el weakmap

console.log(weakmap);