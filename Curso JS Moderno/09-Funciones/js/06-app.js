// Funciones - Crear parámetros por default"

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(` Bienvenido ${nombre} ${apellido}`);
}
// Se le coloca a apellido un string vacío ('') y un string 'desconocido' a nombre como parámetros por default.
saludar('Peter'); // Bienvenido Peter --> solo toma nombre porque como no le envían apellido, toma el vacío como default
saludar('Peter', 'Arce'); // Bienvenido Peter Arce
saludar(); // Bienvenido Desconocido