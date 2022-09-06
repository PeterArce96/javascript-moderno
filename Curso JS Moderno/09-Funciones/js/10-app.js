// Funciones - Arrow functions

const aprendiendo = function(){
    console.log('aprendiendo javascript');
}
// Arrow function, el "function" se transforma en => del lado derecho del ()
const aprendiendo2 = () => {
    console.log('aprendiendo javascript');
}
aprendiendo2();

// Si la función es de solo 1 línea, se puede escribir así:
const aprendiendo3 = () => console.log('Aprendiendo Javascript');
aprendiendo3();

// O también así
const aprendiendo4 = () => 'Aprendiendo Javascript';
console.log(aprendiendo4());