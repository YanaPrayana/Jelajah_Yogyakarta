// Hamburger Menu
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
}

// Navbar transparan saat di atas, gelap saat scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(20, 12, 5, 0.92)";
  } else {
    navbar.style.background = "transparent";
  }
});
