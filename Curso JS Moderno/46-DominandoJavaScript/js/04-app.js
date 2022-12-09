// Implicit Binding

const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`);
    }
}

// usuario.informacion(); //error, no lee los valores nombre y edad por no estar definidos

// Tenemos que decirle en que lugar va encontrar los valores de "nombre" y "edad", se usa el 
// ".this"
const usuario2 = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario2.informacion();
usuario2.mascota.informacion();