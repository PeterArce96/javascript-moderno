// POO - Definiendo e instanciando una clase

// Class Declaration
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const peter = new Cliente('Peter',400);
console.log(peter);

// Class Expresion
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
const peter2 = new Cliente2('Peter',400);
console.log(peter2);