// Módulos

// import --> importas la variable nombreCliente de cliente.js
// nuevaFuncion --> export por default, va fuera de las llaves
// las importaciones pueden tener un alias ( as ...)
import nuevafuncion, {nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import { Empresa } from './empresa.js';


// trae el nombreCliente del archivo cliente.js. Esto puede traer errores al trabajar, ya que se combinan archivos
console.log(nombreCliente);
console.log(ahorro);

// importar una funcion
console.log(mostrarInformacion(nombreCliente, ahorro));

// Se importa automáticamente gracias a VSC, cuando llamas a la function
tieneSaldo(ahorro);

// importar una clase
const cliente = new Cliente(nombreCliente, ahorro);
// llamamos a su método
console.log(cliente.mostrarInformacion());

// Importar Empresa
const empresa = new Empresa ('Código con Juan', 100, 'Aprendizaje en Línea');
console.log(empresa);

// Importar el default
nuevafuncion();