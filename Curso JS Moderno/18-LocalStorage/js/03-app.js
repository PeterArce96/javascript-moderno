// LocalStorage - Eliminar y Actualizar de LocalStorage

// Eliminar
// removeItem() -->Eliminar del localStorage
localStorage.removeItem('nombre');

// Actualizar
// Para actualizar no existe un método, tienes que modificar el objeto y luego mandarlo de nuevo al localstorage con setItem
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

// Limpiar todo el localStorage
localStorage.clear();