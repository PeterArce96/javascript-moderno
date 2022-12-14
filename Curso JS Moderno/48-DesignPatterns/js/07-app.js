// NAMESPACE

// Crear un objeto global y crear multiples funciones en ella
// Sirve para ordenar, agrupar todo en un objeto y no choquen los nombres de las funciones

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
];

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro Menú`);

        platillos.forEach((platillo,index) => {
            console.log(`${index}: ${platillo.platillo} ${platillo.precio}`);
        });
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se está preparando`);
    },

    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantApp.platillos.push(nuevo);
    }
}

restaurantApp.funciones.ordenar(1);

restaurantApp.funciones.agregarPlatillo('Taco', 20);

const {platillos} = restaurantApp;

restaurantApp.funciones.mostrarMenu( platillos);

