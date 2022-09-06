// Funciones - Parámetros y Argumentos

function sumar(a, b) { //a y b son parámetros
    console.log(a + b);
}
sumar(5,10); // 5 y 10 son argumentos
sumar(200,184);

function saludar(nombre, apellido) {
    console.log(` Bienvenido ${nombre} ${apellido}`);
}
saludar('Peter','Arce'); // Bienvenido Peter Arce
saludar('Peter'); //Bienvenido Peter undefined --> solo se le está pasando un argumento.
saludar(); // Bienvenido undefinded undefined --> no se le está pasando ningún argumento.