// Strings - Replace, slice, substring
const producto = 'Monitor 20 pulgadas';

console.log(producto);
// replace() --> reemplaza una parte del string
console.log(producto.replace(' pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// Slice() --> cortar una parte de una cadena de texto (indice de inicio de corte, indice final de corte)
console.log(producto.slice(0,10));
// si solo le pasas un parámetro, corta hasta el índice dato
console.log(producto.slice(8));
// si el primer número es mayor al segundo, simplemente no hace nada
console.log(producto.slice(2,1));

// substring() --> Alternativa a slice, corta
console.log(producto.substring(0,10));
// Si tratas de poner el primer parámetro mayor, substring invierte los parámetros y realiza el corte.
console.log(producto.substring(2,1));

// PREGUNTA DE EMPLEO :
// Difenrencia entre slice y substring --> Slice, si le pasas un numero mayor de inicio - no hace nada, substring lo modifica y trata de hacer algo

// Método para cortar la inicial del Usuario y mostrarlo como imagen de usuario
const usuario = 'Juan';
console.log(usuario.substring(0,1));
// charAt() --> trae el caracter del string en la posición dada.
console.log(usuario.charAt(0));