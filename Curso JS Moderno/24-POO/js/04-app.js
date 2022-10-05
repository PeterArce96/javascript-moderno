// POO - Propiedades privadas en JS

// Privados --> puedes acceder desde la clase u objeto

// Publico --> solamente se puede acceder dentro de la clase

// Class Declaration
class Cliente{

    // hacemos que la propiedad 'nombre' sea privada
    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    // accedo al nombre y saldo dentro de la clase
    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}
// propiedades públicas
// accedo a una propiedad desde el objeto y desde la clase.
const juan = new Cliente('Juan', 200);
console.log(juan.mostrarInformacion()); // ahora llamamos a la propiedad privada desde la clase y no desde el objeto como en la línea siguiente
// console.log(juan.#nombre); error X 
