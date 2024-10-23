const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000, // Tiempo de espera entre transiciones (en milisegundos)
    pauseOnMouseEnter: true, // Pausa el autoplay cuando el mouse entra en el contenedor de Swiper
    disableOnInteraction: false, // Permite que el autoplay continúe después de interacciones (como deslizar)
  },
  autoheigh: true,
  loop: true,

  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });