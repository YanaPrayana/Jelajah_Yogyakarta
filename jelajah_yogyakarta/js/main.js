// ================================================
// JELAJAH YOGYAKARTA - main.js (BERSAMA)
// ================================================

// --- Hamburger Menu (Mobile) ---
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
}

// --- Set Active Nav Link sesuai halaman saat ini ---
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-menu a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
