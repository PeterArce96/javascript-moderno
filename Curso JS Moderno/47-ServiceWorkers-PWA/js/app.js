/* 
Progresive web application-----
1.- Rápidas, cargan toda la información en menos de 5 seg.
2.- Instalable, de puede instalar en navegador o telefono como una aplicacion nativa
3.- Soport offline, pueden funcionar incluso sin conexion a internet

Service workers-------
1.- Base de una PWB. Son scripts que están corriendo todo el tiempo detrás de escenas
2.- Funcionan offline
3.- No tienen acceso al DOM
4.- Cargan de forma instantánea
5.- Pueden sincronizar datos detras de escena o sin interferir en la navegación
Funciones no disponibles ------
1.- Utiliza self (no window)
2.- Utiliza caches(no document)
3.- Utiliza fetch(no localstorage)
*/

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se instaló correctamente', registrado))
        .catch( error => console.log('Falló la instalación', error));
}else {
    console.log('Service workers no soportados');
}

