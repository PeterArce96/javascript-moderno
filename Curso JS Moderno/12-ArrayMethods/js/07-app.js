// ArrayMethods --> .concat()

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Setiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre']

// .concat() --> se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
const resultado = meses.concat(meses2, meses3, 'Otro mes');

console.log(resultado);

// Spread operator
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes'];
console.log(resultado2);

