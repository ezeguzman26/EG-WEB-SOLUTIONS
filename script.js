console.log("Landing EG WEB SOLUTIONS cargada correctamente");

// Toggle menú hamburguesa
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
  hamburger.classList.toggle('active');
});


// Hero parallax en desktop
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if(window.innerWidth > 768){
    let scrollPos = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPos * 0.5}px`;
  }
});
// Cerrar el menú al hacer clic en un link
const navLinks = document.querySelectorAll('.nav-minimal a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');       // oculta el menú
    hamburger.classList.remove('active'); // vuelve la X a hamburguesa
  });
});
