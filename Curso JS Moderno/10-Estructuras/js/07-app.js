// Estructuras - Operador OR, que se cumpla al menos 1 condición

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Si podemos pagar');
} else {
    console.log('Fondos insuficientes');
}

// || : OR, con una condición que se cumpla, se ejecuta la sentencia