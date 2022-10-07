// WeakSet
// A diferencia del set, al set se le puede pasar cualquier valor (objetos, numeros, booleanos, etc).
// a weakset solo se le puede pasar o enviar objetos
// No se puede saber su extensión, .size no existe en el weakset
// No son iterables

const weakset = new WeakSet();

const cliente = {
    nombre: 'Peter',
    saldo: 100,
}

weakset.add(cliente);

// // si le enviamos una variable y valor sin objeto
// const nombre = 'Juan'
// // nos da error
// weakset.add(nombre);

// .has() --> para comprobar si existe en el weakset
console.log(weakset.has(cliente));
console.log(weakset.has('nombre'));

// .delete() --> eliminar un valor del weakset
// weakset.delete(cliente);

// AHORA .size para un weakset NO existe, diferencia entre Set y weakset
console.log(cliente.size);

console.log(weakset);