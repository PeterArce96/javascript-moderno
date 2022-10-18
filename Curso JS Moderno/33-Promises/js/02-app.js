// Callbacks --> Callback Hell

// Cada vez que vayamos agregando elementos en la funcion iniciarCallBackHell, se va formando una curva hacia adentro. No se tiende a usar tantos

const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log('Agregado: ${pais}');
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout( () => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();
