/*
Ventajas de hacer testing en JS
    1.- Mejora la calidad de tu software evitando bugs
    2.- Hay herramientas que automatizan las pruebas de nuestros proyectos
    3.- Liberar nuevas versiones sin las preocupaciones de que algo salga mal.

Consideraciones con el Testing
    1.- Agregar nuevas funciones a un proyecto existente y comprobar si funciona bien con lo existente
    2.- Tener pruebas hará que una persona que no ha mantenido un proyecto conozca que es lo que se hace cada parte
    3.- No harás pruebas de todo, más bien de como se integran diferentes partes de la aplicación

Tipos de testing
    1.- End to End - Más interactivo, simula algunos clicks, llenar formularios y asegurarse de que se muestre en pantalla lo que se desea.
    2.- Integración - Revisar que múltiples partes de nuestro proyecto funcione bien.
    3.- Unit - revisar que cada parte por si sola funcione bien.
    4.- Static - revisar por errores en el código miestras vas escribiendo.

Herramientas para Testing
    Jest, es necesario tener instalado Node.js
    Cypress, herramienta para hacer testing End to End.
*/

// MINI FRAMEWORK PARA TESTING

// probar 2 valores
function suma(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}

let resultado = suma(2,2);
let esperado = 3;

if (resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
}else{
    console.log('La prueba pasó correctamente');
}

resultado = restar(10, 5);
esperado = 5;

if (resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
}else{
    console.log('La prueba pasó correctamente');
}

// Las herramientas de testing ya tienen estas funciones implementadas