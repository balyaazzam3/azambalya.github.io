// ===================== NAVBAR ON SCROLL =====================
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar.classList.toggle('is-scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===================== MOBILE MENU =====================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('is-open');
  navLinks.classList.toggle('is-open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  });
});

// ===================== SCROLL REVEAL =====================
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => revealObserver.observe(el));

// ===================== SKILL GAUGES =====================
const gauges = document.querySelectorAll('.gauge-fill');
const gaugeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.dataset.fill || 0;
      entry.target.style.width = fill + '%';
      gaugeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
gauges.forEach(el => gaugeObserver.observe(el));

// ===================== HERO PARALLAX =====================
const parallaxEls = document.querySelectorAll('[data-parallax]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      el.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}
