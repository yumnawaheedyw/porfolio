document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navMobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-triggered reveal for section titles and cards
const revealTargets = document.querySelectorAll(
  '.section__title, .skill-card, .timeline__item, .project-card, .edu-timeline__item'
);

if ('IntersectionObserver' in window) {
  revealTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => io.observe(el));
}

// Typed role text in the hero
document.addEventListener('DOMContentLoaded', function () {
  const roles = ['AI/ML Engineer','AI Researcher','Applied AI Engineer','Medical AI Researcher','Medical Imaging Engineer'];
  let ri = 0, ci = 0, del = false;

  function typeStep() {
    const el = document.getElementById('typed');
    if (!el) return;
    const word = roles[ri];
    if (!del) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { del = true; setTimeout(typeStep, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(typeStep, del ? 55 : 90);
  }
  typeStep();
});

// Highlight the active nav tab on click and while scrolling
(function () {
  const navLinks = document.querySelectorAll('.nav__links_b');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function setActive(link) {
    navLinks.forEach(l => l.classList.remove('is-active'));
    if (link) link.classList.add('is-active');
  }

  // Click: mark immediately (don't wait for scroll to catch up)
  navLinks.forEach(link => {
    link.addEventListener('click', () => setActive(link));
  });

  // Scroll: highlight whichever section is currently in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const match = document.querySelector(`.nav__links_b[href="#${id}"]`);
          if (match) setActive(match);
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach(sec => observer.observe(sec));
})();

(function(){
  const hero = document.querySelector('.hero');
  const stage = document.getElementById('botStage');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && hero && stage) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.transform = `rotateY(${x * 6}deg) rotateX(${y * -6}deg)`;
    });
    hero.addEventListener('mouseleave', () => {
      stage.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  }
})();