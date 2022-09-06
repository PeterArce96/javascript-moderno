// Funciones - Arrow functions en el ejemplo de Reproductor (09-app.js)

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`borrando canción con el id ${id}`),
    playlist: playlist => console.log(`Creando ${playlist} como playlist`),
    repPlaylist: nombre => console.log(`Reproduciendo ${nombre}!`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}
reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playlist('Electro');
reproductor.repPlaylist('Electro');