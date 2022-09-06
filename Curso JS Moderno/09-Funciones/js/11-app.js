// Funciones - Las ventajas del arrow function

// Sin arrow function
const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.js')

// Con arrow function
// Si la función solo tiene un parámetro, se le puede quitar los paréntesis
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2('JavaScript'));

const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo3s('JavaScript'));