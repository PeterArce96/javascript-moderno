// Operadores - comparar null y undefined
let numero;
// UNDEFINED
console.log(numero); // undefined
console.log(typeof numero); //undefined

// NULL
let numero2 = null;
console.log(numero2); // null
console.log(typeof numero2); //object, ECMA dice que los nulls deben ser objetos

console.log(numero == numero2); // true
console.log(numero === numero2); // false