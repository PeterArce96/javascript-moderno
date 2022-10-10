
// // Mantiene los datos localmente, privadas en este archivo
// (function () {
//     console.log('Desde un IIFE');

//     // Para que archivos o variables no se combinen con otro archivo, se coloca dentro de in IIFE
//     // const nombreCliente = 'Peter';

//     // Si lo haces con window, si es leído por los otros archivos
//     window.nombreCliente = 'Juan';
// })();

// export --> Exportar una variable desde un archivo.
export const nombreCliente = 'Juan';

export const ahorro = 200;

// exportar un function
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log('Si tienes saldo');
    } else {
        console.log('No tiene saldo');
    }
}

// Exportar clases
export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return`Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}