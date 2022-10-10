// Módulos

// import --> importas la variable nombreCliente de cliente.js
import {nombreCliente, ahorro, mostrarInformacion, tieneSaldo} from './cliente.js'

// trae el nombreCliente del archivo cliente.js. Esto puede traer errores al trabajar, ya que se combinan archivos
console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

// Se importa automáticamente gracias a VSC, cuando llamas a la function
tieneSaldo(ahorro);