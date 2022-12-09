// New binding

// En POO
function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}
const auto = new Auto('Camaro', 'Negro');
console.log(auto);

// Window Binding
window.color = 'negro'; //se le asigna color a la ventana global "window"
function hola() {
    console.log(color);
}   
hola();