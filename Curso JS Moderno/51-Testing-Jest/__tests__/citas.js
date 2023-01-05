import Citas from "../js/classes/Citas";

describe('Probar la clase de Citas', () => {
    const citas = new Citas();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'Juan',
            telefono: '19030913',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo duerme'
        };

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });
});