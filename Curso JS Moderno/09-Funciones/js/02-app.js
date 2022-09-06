// Funciones - diferencia entre Function expression y declaration

// La principal diferencia entre las 2 es que si llamamos primero las funciones y luego las declaramos, en una de ellas se produce un error (function expression), ya que JS da vueltas al documento, en la primera (de creación) busca variables y funciones, en la segunda implementa. En la primera lee la función declaracion porque no tienen variable es un simple funcion, en la segunda vuelta llama a la funcion, como ya estaba registrada la ejecuta. En la funcion expresion lo guarda como una variable pero no como una funcion como vemos en los comentarios de abajo.

// Function declaration
sumar(); //4
function sumar() {
    console.log(2 + 2);
}
// llamar a la función


// Function expression
sumar2(); //error, porque no se puede acceder a sumar2 antes de inicializarlo
const sumar2 = function() {
    console.log(3 + 3);
}
// const sumar2;
// sumar2();

// PREGUNTA DE TRABAJO --> ¿Qué harían los siguientes códigos?
// El primero si va funcionar, mientras que el segundo no va a funcionar
