// ARRAYS - Destructuring de arrays
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Destructuring con objetos
const {disponible} = producto;

console.log(disponible);

// Destructuring con arreglos - obtener un elemento del arreglo en una variable
const numeros = [10, 20, 30, 40, 50];
// Si yo quiero solo el quinto elemento a los demás los separo por ',' y espacio
// const [ , , , , quinto] = numeros;
// console.log(quinto);

// Si quiero un arreglo de los elementos desde el tercero hacia la derecha 
const [ , , ...tercero ] = numeros;
console.log(tercero);