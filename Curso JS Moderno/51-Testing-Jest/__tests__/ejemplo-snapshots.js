const cliente = {
    nombre: 'Juan 2',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', ()=> {
    test('Es Juan Pablo', () => {
        expect(cliente).toMatchSnapshot();
    });
});

// datos que se almacenan en una carpeta aparte, permite comparar si es el mismo dato u otro
// Compara todo el objetos, no solamente por nombre, por balance, etc
// COMO ACTUALIZAR UN SNAPSHOT, en caso necesites hacer prueba con otro cliente
// - modificar en el archivo del snapshot creado
// - Eliminar el snapshot anterior
// - introducir un comando para actualizar el snapshot: npm run test -- -u