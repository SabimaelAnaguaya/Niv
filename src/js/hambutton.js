const $btnHam = document.getElementById('lines'),
      $lineas = document.querySelectorAll('.line'),
      $navbar = document.getElementById('navmenu');

document.addEventListener('click', (e) => {
  if (e.target === $btnHam || e.target.matches('.line') || e.target.closest('#navmenu a')) {
    $lineas.forEach(line => line.classList.toggle('active'));
    $navbar.classList.toggle('show-menu');
  }
});

