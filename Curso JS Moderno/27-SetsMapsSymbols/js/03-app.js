// Maps
// Listas ordenadas en llave y valor
// Cualquier tipo de dato
// Son iterables

const cliente = new Map();

cliente.set('nombre','Karen');
cliente.set('tipo','Premium');
cliente.set('saldo','3000');
// // Se le pueden agregar cualquier tipo de dato
// cliente.set(true, true);
// cliente.set([0], true)

console.log(cliente);
// Tamaño del Map
console.log(cliente.size);
// Existe o no
console.log(cliente.has('nombre'));
// Obtener el valor de una llave
console.log(cliente.get('nombre'));

// Eliminar un valor
cliente.delete('saldo');
console.log(cliente.has('saldo')); //false - ya no existe
console.log(cliente.get('saldo')); // undefined, no existe

// Limpiar todo el Map
cliente.clear();
console.log(cliente);

// Podemos crear Maps con valores definidos
const pacientes = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);
// Agregamos valor al constructor
pacientes.set('dr', 'Dr.asignado');
// Reescribimos un valor del Map
pacientes.set('nombre', 'Antonio')

console.log(pacientes);

pacientes.forEach( (datos, index) => {
    console.log(index); //index--> llaves, datos --> valores
})