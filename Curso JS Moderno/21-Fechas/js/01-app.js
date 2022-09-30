// FECHAS - Objeto Date()

const diaHoy = new Date();
let valor;

valor = diaHoy;

valor = diaHoy.getFullYear(); //Año actual
valor = diaHoy.getMonth(); //Mes actual, los meses comienzan en 0 = January, enero y así
valor = diaHoy.getMinutes(); // Minutos actuales
valor = diaHoy.getHours(); //Hora del día actual
valor = diaHoy.getTime(); // Milisegundos desde 1-1-1970 

// con .set --> modificas los datos
valor = diaHoy.setFullYear(2010);

console.log(valor);
console.log(diaHoy);