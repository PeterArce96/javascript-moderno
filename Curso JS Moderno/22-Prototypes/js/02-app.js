// Prototypes - el problema de no usar Prototypes
// Crear una función para cada usuario, en este caos Clientes, empresas. Si fueran más como se haría más fácil?

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const juan = new Cliente('Juan', 500);

function formatearCliente(cliente) {
    const {nombre,saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(juan));

// **************************************************************************

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

function formatearEmpresa(empresa) {
    const {nombre,saldo,categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

const CJJ = new Empresa('Código con Juan', 4000, 'Cursos en Línea');
console.log(formatearEmpresa(CJJ));