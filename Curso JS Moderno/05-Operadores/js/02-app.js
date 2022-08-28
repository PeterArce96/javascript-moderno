// Operadores - comparar valores
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 números son iguales
// Comparador de igualdad abstracta (==), solo compara el valor
console.log(numero1 == numero3); // false
console.log(numero1 == numero2); // true

// Comparador de igualdad estricta (===), compara valor y tipo de dato
console.log(numero1 === numero2); // false
console.log(typeof numero1); // number
console.log(typeof numero2); // string

// Diferencia
const password1 = "admin";
const password2 = "Admin";
console.log(password1 != password2); // true

console.log(numero1 != numero2); // false, solo toma valores
// diferencia estricta
console.log(numero1 !== numero2); // true, toma valores y tipo de dato

// lo convertimos a Number para que sean iguales
console.log(numero1 !== parseInt(numero2)); //false