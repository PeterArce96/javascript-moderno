// FUNCIONES - Añadir funciones en un objeto

const reproductor = { //objeto
    reproducir: function (id) { //llave (reproducir), valor(function)
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function () {
        console.log('pausando...');
    },
    borrar: function (id) { 
        console.log(`borrando canción con el id ${id}`);
    },
    playlist: function (playlist) {
        console.log(`Creando ${playlist} como playlist`);
        this.repPlaylist(playlist);
    },
    repPlaylist: function (playlist){
        console.log(`Reproduciendo ${playlist}!`);
    }
}
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playlist('Electro');