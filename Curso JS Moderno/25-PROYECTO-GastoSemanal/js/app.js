// VARIABLES Y SELECTORES
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// EVENTOS
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}

// CLASES
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
    }
}

class UI{
    insertarPresupuesto( cantidad ) {
        // extraemos los valores
        const { presupuesto, restante } = cantidad;
        // agregamos al html
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // mensajde de error
        divMensaje.textContent = mensaje;

        // insertar en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar el html
        setTimeout( () => {
            divMensaje.remove();
        }, 3000)
    }
}

// Instanciar
const ui = new UI();

// Crear variable global para usarla en varias funciones o clases
let presupuesto;

// FUNCIONES
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto mensual?');
    // console.log(Number(presupuestoUsuario)); //convertir a numero

    // validar que el presupuesto no esté vacío, cancele, envíe una letra o es número negativo
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        alert(' *Debe ingresar un presupuesto válido* ');
        window.location.reload(); //recargar página
    }

    // presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

// añade gastos
function agregarGasto(e) {
    e.preventDefault();

    // leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    // validar
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    // Generar un objeto con el gasto
    // contrario de destructuring, que separa los atributos del objeto
    // esta sentencia los une a gasto
    const gasto = {nombre, cantidad, id: Date.now()}

    // añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // mensaje, de todo bien
    ui.imprimirAlerta('Gasto agregado correctamente')

    // reiniciar el formulario
    formulario.reset();

}