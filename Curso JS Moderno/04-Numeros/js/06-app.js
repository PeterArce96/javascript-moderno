// NUMBERS - Convertir Strings a Numbers
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(typeof numero1);

// Number.parseInt() --> convertir a Number entero
console.log(Number.parseInt(numero1));

// Number.parseFloat() --> convertir a Number flotante, con fracción
console.log(Number.parseFloat(numero2));

// NaN
// console.log(Number.parseInt(number3));

// Number.isInteger --> ¿El número es entero?, devuelve true o false
console.log(Number.isInteger(numero4)); // true - 20
console.log(Number.isInteger(numero3)); // false - NaN
