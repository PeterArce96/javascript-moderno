// APIs - Intersection observer
// Nos permite identificar cuando un elemento está visible en el viewport del navegador

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( entries => {
        if (entries[0].isIntersecting) {
            console.log('Ya está visible');
        }
    });

    observer.observe(document.querySelector('.premium'));


})