console.log("Landing EG WEB SOLUTIONS cargada correctamente");

// Toggle menú hamburguesa
// Menú hamburguesa lateral
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('show');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  overlay.classList.remove('show');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('show');
    overlay.classList.remove('show');
  });
});

});

