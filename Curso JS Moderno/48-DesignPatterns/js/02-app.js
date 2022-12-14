
// CONTRUCTOR PATTERN

// clase padre
class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

// heredar de la clase padre
class Cliente extends Persona {
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona ('Juan', 'correo@correo.com'); //crear un objeto de la clase Persona
console.log(persona);

const cliente = new Cliente ('Miguel', 'miguel@correo.com', 'UTP'); //crear un objeto de la clase Cliente
console.log(cliente);