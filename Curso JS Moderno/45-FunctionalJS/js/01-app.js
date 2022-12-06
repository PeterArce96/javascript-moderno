// FunctionalJS - First Class functions

const suma = function (a,b) {
    return a+b;
}

const resultado = suma;
// Asignar una función como si fueraun valor: un string, booleano, arreglo, etc

console.log(resultado(10,20));