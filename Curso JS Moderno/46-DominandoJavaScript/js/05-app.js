// Explicit Binding

function persona(el1,el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Juan'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];

// función y unirle valores externos
// call() -- pasarle cada elemento de forma individual
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// apply() -- toma todo el arreglo y los lee de forma individual
persona.apply(informacion, musicaFavorita);

// DIFERENCIA, a call le tienes que pasar cada elemento de forma individual y apply le puedes pasar un arreglo completo

// bind() -- Parecida a call, tienes que pasarle elementos de forma individual, pero también te crea una nueva función.
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn;