// ArrayMethods - .every()

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// .every() --> Determina si todos los elementos en el array satisfacen una condición.
const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado);

// con .some() --> determina si al menos uno cumple con la condicion
const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado2);
