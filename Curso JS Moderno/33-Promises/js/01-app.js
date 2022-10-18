// Callbacks --> Ejemplo de callbacks

//  una función que se pasa a otra función como parámetro es una función callback.
// Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asíncrono y nos mantiene a salvo de problemas y errores.

const paises = ['Francias', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout( () => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}
mostrarPaises();
nuevoPais('Alemania', mostrarPaises);