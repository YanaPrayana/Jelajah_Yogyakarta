// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#111111";
  } else {
    navbar.style.background = "rgba(15, 15, 15, 0.9)";
  }
});

// ==============================
// ACTIVE NAVBAR
// ==============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
