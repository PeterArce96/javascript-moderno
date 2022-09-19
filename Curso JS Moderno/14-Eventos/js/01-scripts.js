// Eventos - Detectar cuando el HTML está listo

// DOMContentLoaded --> Evento que se ejecuta una vez que es descargado todo el HTML
console.log(1);

document.addEventListener('DOMContentLoaded', () => {
    console.log(2);
})

console.log(3);

// Si comprobamos el orden de ejecución de 1-2-3, en consola nos devuelve 1-3-2, porque los console.log fuera del evento se ejecutan de arriba hacia abajo, y el 2, se va ejecutar después que el documento esté listo. Por eso se ejecuta de último
