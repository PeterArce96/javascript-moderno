// Estructuras - Buenas prácticas

const autenticado = true;
// No es necesario poner autenticado = true, porque se sobreentiende.
if(autenticado){
    console.log('El usuario está autenticado');
}

const puntaje = 450;

// if (puntaje > 400) {
//     console.log('Excelente!!');
// }else if (puntaje > 300){
//     console.log('Buen puntaje... felicidades');
// }
// En un if si se cumple la primera condición, se ejecuta esta aunque haya otras condiciones que tambien se cumplan. Por esto,  Se debe tener en cuenta el orden de los if.

// En una función
function revisarPuntaje(){
    if(puntaje > 400){
        console.log('Excelente!!');
        return;
    }

    if(puntaje > 300){
        console.log('Buen puntaje... felicidades');
        return;
    }
}
revisarPuntaje();

// El return sirve para que cuando se cumpla esa condición, la función termine ahí y no siga con la siguiente condición.