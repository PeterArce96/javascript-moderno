// APIs - Detectar cuando estamos viendo la página web actual o salimos de ella

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar la función para reproducir el video');
    } else {
        console.log('Pausar el video');
    }
})