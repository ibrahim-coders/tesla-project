const menuToggle = document.getElementById('menu-toggle');
const menuOpen = document.getElementById('menu-open');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

menuOpen.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('translate-y-0');
  menuOpen.classList.add('hidden');
  closeMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('translate-y-0');
  menuOpen.classList.remove('hidden');
  closeMenu.classList.add('hidden');
});
