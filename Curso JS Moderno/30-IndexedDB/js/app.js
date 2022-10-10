// IndexedDB
// Almacenar grandes cantidades de información
// Base de datos completa, pero estos datos son visibles por lo que no es recomendable almacenar passwords o tarjetas de crédito.
// Mientras que en localstorage solo se almacenan Strings, aquí se puede almacenar strings, booleans, archivos de cualquier tipo soportado por JS
// No tiene 'limites' pero cuando hay un archivo de 50mb o + , requieres permisos

// Localstorage --> Bueno para almacenar poca información (carrito de compras o un JSON web token)

let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout( () => {
        crearCliente();
    }, 5000);
})

function crmDB() {
    // Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error en la creación');
    }
    // Si se creó bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada');

        DB = crmDB.result;
    }
    // Configuración de la base de datos, se ejecuta una sola vez
    crmDB.onupgradeneeded = function(e) {
        // console.log(e.target.result);
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false});
        objectStore.createIndex('email', 'email', { unique: true});
        objectStore.createIndex('telefono', 'telefono', { unique: false});

        console.log('Columnas creadas');
    }
}

function crearCliente() {
    // DB.transaction(['base de datos'], 'modo'-> readwrite, lectura y escritura. 'readonly', solo lectura)
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transacción Completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');
    const nuevoCliente = {
        telefono: 95561651,
        nombre: 'Peter',
        email: 'parce0496@gmail.com'
    }

    // .add --> agregar
    // .put --> actualizar
    // .delete --> borrar
    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}