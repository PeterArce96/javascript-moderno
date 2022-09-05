// OBJETOS - Object.keys, .values y .entries
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
// Object.keys() --> Obtener las llaves de objeto
console.log(Object.keys(producto));

// Object.values() --> Retorna los valores del objeto
console.log(Object.values(producto));

// Object.entries --> Retorna todo en pares (llave y valor).
console.log(Object.entries(producto));