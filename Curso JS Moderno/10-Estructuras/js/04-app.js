// Estructuras de Control - Mayor o igual y else if

const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

// Siempre se ejecuta la primera condición que cumpla con la sentencia, así hayan más condiciones que cumplan.
if (dinero >= totalAPagar) {
    console.log("Si podemos pagar");
}else if (tarjeta){
    console.log("Si puedo pagar porque tengo la tarjeta");
}else if(cheque) {
    console.log("Si, tengo un cheque");
}else {
    console.log("Fondos insuficientes");
}