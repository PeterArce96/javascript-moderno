

const nombreCache = 'apv-v1';
const archivos = [
    '/',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
];

// Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Instalado el service worker');

    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )
})

// En la consola dle navegador se lee el mensaje de "Instalado el service worker" y el InstallEvent. Esto solo se ejecuta una vez, si recargamos podemos ver que no vuelve a salir.

// Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service worker Activado');

    console.log(e);
});

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache
            })
            .catch( () => caches.match('/error.html'))
    )
})