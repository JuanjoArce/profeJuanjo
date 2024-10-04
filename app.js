const popups = document.querySelectorAll('.popup');

popups.forEach(popup => {
    popup.addEventListener('click', () => {
        popups.forEach(p => {
            p.style.width = '30%';
            p.style.height = '30%';
            p.style.position = 'relative';
            p.style.top = 'unset';
            p.style.left = 'unset';
            p.style.transform = 'unset';
            p.style.zIndex = '1';
        });

        popup.style.width = '80%';
        popup.style.height = '80%';
        popup.style.position = 'absolute';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.zIndex = '2';
    });

    document.addEventListener('click', (event) => {
        if (!popup.contains(event.target)) {
            popup.style.width = '30%';
            popup.style.height = '30%';
            popup.style.position = 'relative';
            popup.style.top = 'unset';
            popup.style.left = 'unset';
            popup.style.transform = 'unset';
            popup.style.zIndex = '1';
        }
    });
});

function adjustPopupSize(popup, isMobile) {
    if (isMobile) {
        popup.style.width = '90%';  
        popup.style.height = '70%';  
    } else {
        popup.style.width = '80%';
        popup.style.height = '80%';
    }
    popup.style.position = 'absolute';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.zIndex = '2';
}

// const popups = document.querySelectorAll('.popup');

popups.forEach(popup => {
    popup.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 768;

        popups.forEach(p => {
            p.style.width = '30%';
            p.style.height = '30%';
            p.style.position = 'relative';
            p.style.top = 'unset';
            p.style.left = 'unset';
            p.style.transform = 'unset';
            p.style.zIndex = '1';
        });

        adjustPopupSize(popup, isMobile);
    });

    document.addEventListener('click', (event) => {
        if (!popup.contains(event.target)) {
            popup.style.width = '30%';
            popup.style.height = '30%';
            popup.style.position = 'relative';
            popup.style.top = 'unset';
            popup.style.left = 'unset';
            popup.style.transform = 'unset';
            popup.style.zIndex = '1';
        }
    });
});

// Selecciona todos los elementos con la clase "popup"
// const popups = document.querySelectorAll('.popup');

popups.forEach(popup => {
    // Evento para expandir el popup al hacer click
    popup.addEventListener('click', () => {
        // Primero, restauramos todos los popups a su tamaño original
        popups.forEach(p => p.classList.remove('expandido'));

        // Expandimos solo el popup clicado
        popup.classList.add('expandido');
    });

    // Opcional: Si quieres que el popup vuelva a su tamaño original al hacer click fuera de él
    document.addEventListener('click', (event) => {
        if (!popup.contains(event.target)) {
            popup.classList.remove('expandido');
        }
    });
});
