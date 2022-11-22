
let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacíos
    const camposVacios = [ mesa, hora].some(campo => campo === '');

    if (camposVacios) {
        console.log('Si hay un campo vacio');
    } else {
        console.log('No hay campos vacios');
    }
}