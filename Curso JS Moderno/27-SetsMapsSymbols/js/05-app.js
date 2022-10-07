// Symbols
// Permiten crear una propiedad única
// NUNCA UN SYMBOL ES IGUAL A OTRO
// No son iterables

const sym = Symbol('1');
const sym2 = Symbol('1');

// Ningún Symbol es igual
if(sym === sym2){
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

console.log(Symbol() === Symbol());//false

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// agregar nombre y apellido como llaves del objeto persona, se utilizan corchetes[]
persona[nombre]= 'Peter';
persona[apellido]= 'Arce';
// podemos agregar más propiedades, pero estás se agregan como cualquier objeto, no como Symbol
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// Para acceder al valor de una propiedad
console.log(persona[nombre]);

// Las propiedades que utilizan un Symbol NO son iterables
for(let i in persona){
    console.log(i);
}

// Definir una descripción del Symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente); //trae solo la descripción