// Functional JS - Funciones como argumentos

// Funcion resumida de clase anterior 01
const suma = (a,b) => a + b;

const multiplicar = (a,b) => a * b;

const sumarOMultiplicar = fn => fn(10,20);

console.log(sumarOMultiplicar(suma));
console.log(sumarOMultiplicar(multiplicar));
