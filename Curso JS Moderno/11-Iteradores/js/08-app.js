// Iteradores - for ...in
// Mientras que for...of itera sobre arreglos, for...in itera sobre objetos

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0',
}

// devuelve las llaves del objeto
for (const propiedad in automovil) {
    console.log(propiedad);
}

// devuelve los valores del objeto
for (const propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

for(let [llave, valor] of Object.entries(automovil)){
    console.log(llave);
    console.log(valor);
}