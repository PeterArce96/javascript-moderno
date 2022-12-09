// Coerción

// Conversión automática implícita o explícita de valores dados a otro

// Coerción implícita
const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2);//2040, suma de number + string

// Coerción Explícita - requiere utilizar una función

console.log(Number(numero2)); //40, number

console.log(numero1.toString()); //20, string

const pedido = [1,2,3,4];
console.log(pedido.toString()); //1,2,3,4, strings
console.log(JSON.stringify(pedido)); //[1,2,3,4], string