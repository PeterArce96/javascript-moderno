// Prototype - Proto, crear tipo de objeto nuevo
// si abrimos el objeto en la consola, en la parte inferios nos sale un [[Prototype]], son funciones que se le dan a los objetos

// objeto literal, solo un objeto
const cliente = {
    nombre: 'Juan',
    saldo: 500,
}
console.log(cliente);

// Object contructor, objetos dinámicos y reutilizables
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500)
console.log(juan);