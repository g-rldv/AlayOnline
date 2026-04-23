// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===== PARALLAX ENGINE =====
function initParallax() {
  const parallaxElements = [
    { selector: '.hero-parallax-bg', speed: 0.45 },
    { selector: '.page-hero-parallax-bg', speed: 0.45 },
    { selector: '.parallax-bg', speed: 0.5 },
    { selector: '.nature-strip-bg', speed: 0.4 },
  ];

  const elements = [];
  parallaxElements.forEach(({ selector, speed }) => {
    document.querySelectorAll(selector).forEach(el => {
      elements.push({ el, speed });
    });
  });

  if (elements.length === 0) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;

    elements.forEach(({ el, speed }) => {
      const parent = el.parentElement;
      const rect = parent.getBoundingClientRect();
      const parentTop = rect.top + scrollY;
      const offset = (scrollY - parentTop) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  updateParallax();
}

initParallax();

// ===== SCROLL ANIMATIONS =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.pillar-card, .step, .camp-card, .camp-full-card, .vol-card, .badge-card, .reward-card, .team-card, .ref-card, .meth-step, .value-card, .podium-card'
).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = `opacity 0.55s ease ${i * 0.06}s, transform 0.55s ease ${i * 0.06}s`;
  observer.observe(el);
});

// ===== PROGRESS BAR ANIMATION =====
const progObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.prog-fill');
      fills.forEach(fill => {
        const target = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => { fill.style.width = target; }, 250);
      });
      progObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.prog-bar').forEach(bar => {
  progObserver.observe(bar.parentElement || bar);
});
