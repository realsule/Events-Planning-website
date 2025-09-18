// script.js
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");
  const header = document.querySelector(".site-header");
  const hamburger = navToggle.querySelector(".hamburger");

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    primaryNav.classList.toggle("mobile-active");
    hamburger.classList.toggle("open"); // animate into an X
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
  });

  // Add shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
