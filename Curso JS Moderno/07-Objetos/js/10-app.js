// OBJETOS - Copiar 2 objetos
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}

console.log(producto);
console.log(medidas);

// 1° Forma de Unir 2 objetos
// assign() -->  copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// 2° Forma
// Spread operator o Rest Operator
// ... --> toma una copia de productos/medidas y asignala a resultado2
const resultado2 = { ...producto, ...medidas};
console.log(resultado2);