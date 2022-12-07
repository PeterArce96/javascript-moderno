// Funciones puras o pure functions

// retornan un dato pero no modifican el valor de las variables

// 1.- la cantidad de parámetros es lo que debe retornar, en este ejemplo solo tiene 1 parámetro, por lo tanto retorna solo 1 número

const numero1 = 20;
const duplicar = numero => numero * 2;
// const duplicar = (numero) => {
//     return numero * 2;
// }

// 2.- No modifican un valor original

const resultado = duplicar(numero1);
console.log(resultado);
console.log(numero1);

// numero1 no se modifica, en resultado se genera un nuevo valor

