// Prototypes - Heredar un prototype

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;
    if (this.saldo > 10000) {
        tipo = 'Gold'
    } else if(this.saldo > 5000){
        tipo = 'Platinum' 
    } else {
        tipo = 'Normal';
    }
    return tipo;
}
// Podemos llamar desde un prototype a otro prototype
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function (retira) {
    this.saldo -= retira;
}

// // Cliente y persona comparten atributos (nombre, saldo)
// function Persona(nombre,saldo,telefono) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.telefono = telefono;
// }

// Heredar nombre y saldo de Cliente 
function Persona(nombre,saldo,telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Pasarle el prototype de Cliente al prototype de Persona
Persona.prototype = Object.create( Cliente.prototype );

// Pasarle el constructor
Persona.prototype.constructor = Cliente;

// Instanciarlo
const juan = new Persona('Juan', 5000, 10920192);
console.log(juan);
console.log(juan.nombreClienteSaldo());

// Esta función solo está para Persona, porque Persona hereda los atributos de Cliente, pero Cliente no hereda los atributos de Persona.
Persona.prototype.mostrarTelefono = function () {
    return `El telefono de esta persona es ${this.telefono}`
}
console.log(juan.mostrarTelefono());