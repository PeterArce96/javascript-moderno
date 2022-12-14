// SINGLETON

// No permiten crear multiples instancias de una misma clase

let instancia = null;

class Persona {
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else {
            return instancia;
        }
    }
}

const persona = new Persona ('Juan', 'correo@correo.com');
console.log(persona);

// Si vemos en la consola la persona2 es igual a la persona 1 porque es un singleton, la instancia ya tiene unos datos, y por el else va retornar la instancia ya creada.
const persona2 = new Persona ('Karen', 'karen@correo.com');
console.log(persona2);