// Fechas - MomentJS, librería

const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM D YYYY H:MM:ss a'));

console.log(moment().format('LLLL',diaHoy));

console.log(moment().add(3,'days').calendar()); //cuando se termina un cupon, ejemplo