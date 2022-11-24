// Async Await

// Si nos vamos a consola con estas 3 líneas, JS ejecuta la primera, luego la función hola(), al no estar definida sale error y lo siguiente a él no se ejecuta.
// console.log(1 + 1); //2
// hola();//error
// console.log(2 + 2);//no se ejecuta

// Solución con tryCatch, el resto del código se ejecuta
console.log(1 + 1); //2
try {
    hola();
} catch (error) {
    console.log(error); //error
}
console.log(2 + 2); //4 

// Try Catch se utiliza en partes críticas de la aplicación como: conectar una base de datos, consultar una API, autenticar un usuario. O acciones que nos permitan en caso de que falle nuestra aplicación siga funcionando y solo muestre un error.

try {
    autenticarUsuario();
} catch (error) {
    console.log(error);//mensaje de error
}