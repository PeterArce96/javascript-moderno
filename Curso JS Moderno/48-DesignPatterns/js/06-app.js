// Usado para el Module pattern
// console.log(modulo1.nombre);

// MIXIN PATTERN
class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es: ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona('Juan', 'correo@correo.com')
console.log(cliente);

cliente.mostrarInformacion();
cliente.mostrarNombre();

// Podemos crear otra clase y asignarle tambien funcionesPersona a su prototype, para poder usarlas
class Cliente {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}
Object.assign(Cliente.prototype, funcionesPersona);

const cliente2 = new Cliente('Cliente', 'cliente@correo.com');
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();