// Funciones - Diferencia entre Función y Método

const numero1 = 20;
const numero2 = '20';

// Esto es una funcion - parseInt()
console.log(parseInt(numero2)); //20 - number

// Esto es un método (.toString()), antecedido por un "."
console.log(numero1.toString());

function sumar() {
    console.log(2 + 2);
}
sumar();