// Estructuras - El operador && para revisar que se cumplen 2 o más condiciones

const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
}else if(!puedePagar && !usuario){
    console.log('No, no puedes comprar');
}else if(!usuario){
    console.log('Iniciar sesión o registra una cuenta');
}else if(!puedePagar){
    console.log('Fondos insuficiente');
}

// el && revisa que se cumplan ambas.
// !usuario: si no es usuario.
// !puedePagar: no puede pagar