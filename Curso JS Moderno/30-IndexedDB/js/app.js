// IndexedDB
// Almacenar grandes cantidades de información
// Base de datos completa, pero estos datos son visibles por lo que no es recomendable almacenar passwords o tarjetas de crédito.
// Mientras que en localstorage solo se almacenan Strings, aquí se puede almacenar strings, booleans, archivos de cualquier tipo soportado por JS
// No tiene 'limites' pero cuando hay un archivo de 50mb o + , requieres permisos

// Localstorage --> Bueno para almacenar poca información (carrito de compras o un JSON web token)

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})

function crmDB() {
    // Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function () {
        console.log('Hubo un error en la creación');
    }
    // Si se creó bien
    crmDB.onsuccess = function () {
        console.log('Base de datos creada');
    }
    // Configuración de la base de datos
    crmDB.onupgradeneeded = function () {
        console.log('Este método solo se ejecuta una vez');
    }
}