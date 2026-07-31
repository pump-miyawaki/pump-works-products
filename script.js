// ==========================================================
// PUMP WORKS PRODUCTS — site behaviour
// ==========================================================

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Fullscreen nav overlay toggle
const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');

function closeNav() {
  navOverlay.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

if (menuBtn && navOverlay) {
  menuBtn.addEventListener('click', () => {
    const isOpen = navOverlay.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navOverlay.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

// Scroll-reveal for elements marked [data-reveal]
const revealTargets = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
