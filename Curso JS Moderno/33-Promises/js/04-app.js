// CallbackHell a Promises

const paises = [];

const nuevoPais = pais => new Promise ( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`)
    }, 3000);
})

nuevoPais('Alemania')
    .then( resultado => { //resultado es lo que se pasa con el resolve en la funcion anterior
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra')
    })
    .then( resultado => {
        console.log(resultado);
    })