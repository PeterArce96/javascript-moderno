// APIs - Ejecutar pantalla completa con JS

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen(); //entramos en pantalla completa
}

function cerrarPantallaCompleta() {
    document.exitFullscreen(); //salimos de pantalla completa
}