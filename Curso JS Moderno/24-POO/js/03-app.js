// POO - Heredar una clase

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

// HERENCIA
// Empresa clase hijo de Cliente, hereda sus atributos, métodos y constructor
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        //función "super", busca en la clase padre los atributos que le pases en la función (nombre, saldo)
        super(nombre, saldo); 
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Si se escribe un método en el hijo igual al de la clase Padre, se reescribe el método y se utiliza el del hijo, ignora el otro
    static bienvenida(){ //reescribir un método, solo con nombrarlo igual
        return `Bienvenido al cajero de empresas`;
    }
}

const peter = new Cliente('Peter',400);
const empresa = new Empresa('Código con Juan', 500, 951569544, 'Curso');
console.log(empresa);
console.log(empresa.mostrarInformacion()); //se hereda el método
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());