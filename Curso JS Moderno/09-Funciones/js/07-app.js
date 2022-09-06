// FUNCIONES - Como se comunican las funciones

iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');

    segundaFuncion(); //Llamas un función desde otra, o adentro de otra.
}

function segundaFuncion() {
    console.log('Desde la segunda función');

    usuarioAutenticado('Peter'); //llamamos a la tercera función desde la segunda
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario, espere...');
    console.log(`Usuario autenticado existosamente!: ${usuario}`);
}