console.log("Landing EG WEB SOLUTIONS cargada correctamente");

// Toggle menú hamburguesa
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('show');
  hamburger.classList.toggle('active');

  // 🔒 Bloquear / desbloquear scroll
  document.body.classList.toggle('no-scroll', isOpen);
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
    nav.classList.remove('show');
    hamburger.classList.remove('active');
    document.body.classList.remove('no-scroll'); // 🔓 vuelve el scroll
  });
});

