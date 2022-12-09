// SCOPE
// Alcance de una variable


// Scope global
const cliente = 'Juan'; //prioridad global

// Scope en una función o bloque de código
function mostrarCliente() {
    const cliente = 'Pedro'; //tiene prioridad dentro de la funcion o su scope
    console.log(cliente);
}
mostrarCliente();

const login = true;
function clienteLogueado() {
    const cliente = 'Peter';
    console.log(cliente);

    if (login) {
        const cliente = 'Admin';
        console.log(cliente);
    }
}
clienteLogueado();