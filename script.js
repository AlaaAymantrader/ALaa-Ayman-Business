// Scroll animation observer
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));

// Debug
console.log("Invest With Alaa site loaded successfully");
