// Check if page loaded correctly
document.addEventListener("DOMContentLoaded", function () {
  console.log("Landing page loaded successfully.");
});

// Simple fade-in effect
window.addEventListener("load", function () {
  const elements = document.querySelectorAll("h1, h2, p, a");
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      el.style.opacity = 1;
    }, index * 100);
  });
});

// Button click tracking (no cookies, no storage)
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("Button clicked:", btn.textContent);
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
