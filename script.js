// ============================================
// Smooth scroll for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================
// Scroll-reveal: animate sections into view
// ============================================
const revealElements = document.querySelectorAll('.reveal');

function handleReveal() {
  const trigger = window.innerHeight * 0.88;
  revealElements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleReveal, { passive: true });
window.addEventListener('load', handleReveal);

// ============================================
// Active navigation link highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

function highlightNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`nav ul li a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

// ============================================
// Scroll-to-top button
// ============================================
const scrollBtn = document.getElementById('scroll-top');

if (scrollBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
