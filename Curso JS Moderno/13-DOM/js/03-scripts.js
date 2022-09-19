// DOM - getElementById

// getElementById --> selecciona el elemento con ese ID, solo el primero en caso de haber varios.
const formulario = document.getElementById('formulario');
console.log(formulario);

// Si el elemento no existe, retorna 'null'
const noExiste = document.getElementById('no-existe');
console.log(noExiste);