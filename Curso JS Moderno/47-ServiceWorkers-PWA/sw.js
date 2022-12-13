
// Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Instalado el service worker');

    console.log(e);
})

// En la consola dle navegador se lee el mensaje de "Instalado el service worker" y el InstallEvent. Esto solo se ejecuta una vez, si recargamos podemos ver que no vuelve a salir.

// Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service worker Activado');

    console.log(e);
});