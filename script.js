/* ========================================
   PORTFOLIO – JOHN WATSON
   script.js
   ======================================== */

/* ── Navbar : fond semi-transparent au scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Menu hamburger (mobile) ── */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* ── Fermer le menu quand on clique sur un lien ── */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ── Apparition des éléments au scroll (Intersection Observer) ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.service-card, .about-text').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});