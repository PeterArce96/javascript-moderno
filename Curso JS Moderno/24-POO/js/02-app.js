// POO - Métodos y métodos estáticos en las clases

// Class Declaration
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    // agregar método en la clase
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    // propiedades estáticas, para mostrarlas no requieren una instancia
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const peter = new Cliente('Peter',400);
console.log(peter.mostrarInformacion());
console.log(peter);
console.log(Cliente.bienvenida()); // se llama desde la clase
// console.log(peter.bienvenida()); X error porque "bienvenida" pertenece a la clase y no al objeto

// Class Expresion
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}
const peter2 = new Cliente2('Peter',400);
console.log(peter2.mostrarInformacion());
console.log(peter2);