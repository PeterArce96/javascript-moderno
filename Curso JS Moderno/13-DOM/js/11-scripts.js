// DOM - Ejemplo

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        // this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        // this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}
// Ya tenemos en el css las clases 'activo', si el footer tiene la clase activo se la quitamos, si no la tiene se la agregamos por eso el 'if'
// En vez de btnFlotante, se le puede poner 'this' porque es el elemento que llama a esta funcion en la parte de arriba.

