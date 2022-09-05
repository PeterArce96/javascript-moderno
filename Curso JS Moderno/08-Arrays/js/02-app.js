// ARRAYS - Acceder a los valores de un arreglo

const numeros = [10, 20, 30, 40, 50, [1,2,3]];

console.log(numeros);
console.table(numeros);

// Acceder al arreglo
console.log(numeros[2]); //30
console.log(numeros[0]); //10
console.log(numeros[20]); //undefined
// Acceder a un array dentro de otro array
console.log(numeros[5][1]); //2