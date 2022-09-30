// Prototypes - Creando un prototype

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

// instanciarlo
const peter = new Cliente('Peter', 6000);
console.log(peter.tipoCliente());
console.log(peter.nombreClienteSaldo());
// retiramos 1000
peter.retirarSaldo(1000);
console.log(peter.nombreClienteSaldo());

console.log(peter);