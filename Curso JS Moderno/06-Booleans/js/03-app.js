// Booleans - consejos, buenas prácticas
const autenticado = true;

// Autenticado no necesita una condición, ser true o false porque ya lo has declarado
if(autenticado === true){
    console.log('Si puedes ver netflix');
}else{
    console.log('No, no puedes verlo');
}

// Mejor forma
if(autenticado){
    console.log('Si puedes ver netflix');
}else{
    console.log('No, no puedes verlo');
}

// con Operador ternario
console.log(autenticado ? 'Si esta autenticado' : 'No está autenticado');