// VARIABLES
const resultado = document.querySelector('#resultado');

// EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});


// FUNCIONES
function mostrarAutos() {
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // insertar en el html
        resultado.appendChild(autoHTML);
    });
}