// home.js - hanya untuk halaman Ghaffan (index, about, contact)
// Membuat navbar transparan saat di atas, solid saat discroll
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function updateNavbar() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  updateNavbar();
  window.addEventListener('scroll', updateNavbar);
});