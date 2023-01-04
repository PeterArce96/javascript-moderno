
const password = '123456';

describe('Valida que el password no este vacío y tenga una extensión de 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        expect( password ).toHaveLength(6);
    });

    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0);
    })
});

// "not" se lee como que: no tiene una extensión de 0, si lo quitaramos sería que el password tenga una extensión de 0