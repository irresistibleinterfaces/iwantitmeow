// Initialize the required DOM elements
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const bgOverlay = document.querySelector(".overlay");

// Initialize hide navbar menu function
const toggleNavbarMenu = () => {
   navbarMenu.classList.toggle("is-active");
   burgerMenu.classList.toggle("is-active");
   bgOverlay.classList.toggle("is-active");
};

// Show hide toggle navbar menu on clicked
burgerMenu.addEventListener("click", () => {
   toggleNavbarMenu();
});

// Hide the navbar menu when overlay clicked
bgOverlay.addEventListener("click", () => {
   toggleNavbarMenu();
});

// Hide the navbar menu when links clicked
document.querySelectorAll(".menu").forEach((link) => {
   link.addEventListener("click", () => {
      toggleNavbarMenu();
   });
});

// Change the header background on scrolling
window.addEventListener("scroll", () => {
   if (window.scrollY >= 75) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed the navbar menu on window resizing
window.addEventListener("resize", () => {
   if (window.innerWidth >= 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
         burgerMenu.classList.remove("is-active");
         bgOverlay.classList.remove("is-active");
      }
   }
});
