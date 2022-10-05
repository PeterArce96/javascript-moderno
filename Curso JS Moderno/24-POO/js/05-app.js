// POO - Propiedades privadas en JS

// Class Declaration
class Cliente{

    // hacemos que la propiedad 'nombre' sea privada
    #nombre;

    // Si no queremos tener el constructos, podemos hacer con un get y set
    setNombre(nombre){
        this.#nombre = nombre;
    }
    
    getNombre(){
        return this.#nombre;
    }
}

const juan = new Cliente();
juan.setNombre('Juan');
// accedemos a la propiedad desde la clase
console.log(juan.getNombre());
