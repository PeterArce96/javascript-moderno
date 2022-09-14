// Estructuras de control - Comparador estricto


const puntaje = 1000;
const puntaje2 = "1000";
// != diferente a, compara valor
// !== completamente diferente a, compara valor y tipo de dato

// if (puntaje2 !== 1000) { 
//     console.log('Si es diferente');
// }

// == Operador no estricto, compara valor
// === Operador Estricto, compara valor y tipo de dato

if (puntaje === "1000") {
    console.log("Si es igual");
}else{
    console.log("No es igual");
}