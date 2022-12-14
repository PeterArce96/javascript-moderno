// Patrones de diseño
// 1.- Soluciones tipicas a problemas comunes en Desarrollo de software, cada patrón
// es como un plano que se puede personalizar para resolver un problema de diseño en el
// código

// De creación - permiten crear objetos y permiten la reutilización del código
// De estructura - explican como deben comunicarse los objetos y clases en grandes proyectos
// De comportamiento - se encargan de como se comportan y comunican los objetos

// CLASS PATTERN - Patrón de una clase

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@correo.com'); //creando un nuevo objeto
console.log(persona); 