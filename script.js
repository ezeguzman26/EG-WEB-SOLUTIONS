console.log("Landing EG WEB SOLUTIONS cargada correctamente");

// Toggle menú hamburguesa lateral
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('open');
  overlay.classList.remove('show');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    overlay.classList.remove('show');
  });
});

// Hero parallax en desktop
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    let scrollPos = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPos * 0.5}px`;
  }
});
