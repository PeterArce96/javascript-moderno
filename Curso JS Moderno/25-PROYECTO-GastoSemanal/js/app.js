// VARIABLES Y SELECTORES
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// EVENTOS
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}

// CLASES


// FUNCIONES
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    console.log(Number(presupuestoUsuario)); //convertir a numero

    // validar que el presupuesto no esté vacío, cancele, envíe una letra o es número negativo
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        alert(' *Debe ingresar un presupuesto válido* ');
        window.location.reload(); //recargar página
    } else {
        
    }
}