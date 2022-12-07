// Partials y Curring

const suma = (a,b,c) =>  a+b+c;
// dividir una funcion que tomas más de 1 parámetro en argumentos de forma parcial
// curring va dividir la funcion por partes, la primera funcion toma 1 número y la segunda toma los 2 otros valores
const parcial = (a) => (b,c) => suma(a,b,c);

const primerNumero = parcial(5);
const resultado = primerNumero(4,3);
console.log(resultado);

// 2° ejemplo
const parcial2 = a => b => c => suma(a,b,c);

// const primerNumero1 = parcial1(5);
// const segundoNumero = primerNumero1(4);
// const resultado1 = segundoNumero(3);

const resultadoParcial = parcial2(5)(4)(3);
// Este código aplicar curring y partials dividiendo la función en pequeñas partes
console.log(resultadoParcial);