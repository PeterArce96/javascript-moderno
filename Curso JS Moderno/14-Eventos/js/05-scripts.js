// Eventos - Eventos scroll con el mouse

// window.addEventListener('scroll', () => {
//     const scrollPX = window.scrollY;

//     console.log(scrollPX);
// })

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    
    // console.log(ubicacion);
    
    if(ubicacion.top < 100){
        console.log('El evento ya está visible');
    }else {
        console.log('Aún no, da más scroll');
    }
})
// getBoundingClientRect --> nos da información sobre el lugar donde está el usuario en la página