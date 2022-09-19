// DOM - querySelectorAll
// querySelectorAll --> devuelve una NodeList que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

const card = document.querySelectorAll('.card');
console.log(card);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Si un elemento no existe, retorna un NodeList vacío
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);

// NodeList --> es como un array de los elementos o nodos html
// Nodos --> son cada elemento html en javascript