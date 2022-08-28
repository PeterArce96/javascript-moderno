// NUMBERS - Objeto MATH
let resultado;

// PI
resultado = Math.PI;

// Math.round --> Redondear, a partir del .5 redondea hacia arriba;
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);
resultado = Math.round(2.5);
resultado = Math.round(2.4);

// Math.ceil --> Redondea hacia el numero mayor
resultado = Math.ceil(2.1);

// Math.floor --> redondea hacia el numero menor
resultado = Math.floor(2.9);

// Math.sqrt --> Raíz cuadrada
resultado = Math.sqrt(144);

// Math.abs --> Valor absoluto
resultado = Math.abs(-500)

// Math.pow --> Potencia
resultado = Math.pow(2,4);

// Math.min --> Minimo Número
resultado = Math.min(3,5,1,12,-3);

// Math.max --> Máximo número
resultado = Math.max(3,5,1,12,-3);

// Math.random --> Número aleatorio entre 0 y 1
resultado = Math.random();
// Aleatorio dentro de un rango, entre 0 y 30
resultado = Math.floor(Math.random()*30);

console.log(resultado);
