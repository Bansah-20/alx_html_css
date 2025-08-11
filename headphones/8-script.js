document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('nav-links');

  if (!btn || !nav) return;

  // Toggle function
  function toggleMenu() {
    const isOpen = btn.classList.toggle('open'); // toggles hamburger visual
    nav.classList.toggle('open');                // toggles nav visibility
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  // Click hamburger to toggle
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when a nav link is clicked (mobile behavior)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        btn.classList.remove('open');
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close when clicking outside the menu
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('open')) {
      btn.classList.remove('open');
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      btn.classList.remove('open');
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  // Optional: if the window is resized to desktop width, ensure menu is closed
  window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
