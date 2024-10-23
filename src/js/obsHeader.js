document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        // Usuario está en la parte superior
        header.style.top = '0'; // Muestra el header
        header.style.backgroundColor = 'transparent'; // Fondo predeterminado
    } else if (window.scrollY > lastScrollY) {
        // Usuario está bajando
        header.style.top = '-8rem'; // Oculta el header
        header.style.backgroundColor = 'transparent'; // Cambia el fondo
    } else {
        // Usuario está subiendo
        header.style.top = '0'; // Muestra el header
        header.style.backgroundColor = 'var(--background-color)'; // Cambia el fondo
    }
    lastScrollY = window.scrollY;
    });
});