const cliente = {
    nombre: 'Juan Pablo',
    balance: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Juan Pablo', () => {
        expect(cliente.nombre).toBe('Juan Pablo');
    })

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    })

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    })
});

// toBeGreaterThan - que el balance sea mayor a 400
// toBe - que el nombre sea exactamente 'Juan Pablo'
// Revisar por un valor y revisar que no sea ese valor para comprobar los falsos positivos