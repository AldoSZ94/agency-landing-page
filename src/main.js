import "./style.css";

// Selecciona elementos del DOM.
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", () => {
  // Lee si el menú está abierto.
  const isExpanded = menuIcon.getAttribute("aria-expanded") === "true";

  // Invierte el estado del botón (accesibilidad).
  menuIcon.setAttribute("aria-expanded", !isExpanded);

  // Alterna visibilidad del menú.
  navMenu.classList.toggle("opacity-0");
  navMenu.classList.toggle("-translate-y-5");
  navMenu.classList.toggle("pointer-events-none");
});
