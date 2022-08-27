// String - repeat y split
const producto = 'Monitor 20 pulgadas';

// .repeat() --> permite repetir una cadena de texto
const texto = ' en promoción'.repeat(2);
console.log(texto);

console.log(`${producto}${texto} !!!`);

// PREGUNTA DE TRABAJO - Si a un repeat(), le pasas un numero NO ENTERO, lo redondea al número anterior
// const texto = ' en promoción'.repeat(2.4);

// split() --> dividir un string y construye un array
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(', '));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));