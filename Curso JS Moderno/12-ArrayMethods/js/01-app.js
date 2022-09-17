// ArrayMethods - .some
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
meses.forEach((mes)=> {
    if(mes === 'Enero'){
        console.log('Enero si existe');
    }
});

const resultado = meses.includes('Diciembre');
console.log(resultado);

// .some() --> Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada

// En un arreglo de objetos se utiliza .some
const existe = carrito.some( (producto) => {
    return producto.nombre === 'Celular';
})
console.log(existe);

// En un arreglo tradicional con .some
const existe2 = meses.some( (mes) => {
    return mes === 'Febrero';
})
console.log(existe2);