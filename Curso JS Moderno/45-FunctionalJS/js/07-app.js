// Funciones que retornan funciones
// doble funcion con arrow function
const obtenerCliente = () => () => console.log('Peter');

const fn = obtenerCliente();

fn();