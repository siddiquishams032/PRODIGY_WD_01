const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Change navbar style on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});