// Scroll animations
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));

// Rotating headlines
const phrases = [
  "Learn Trading Step by Step",
  "Trading Education for Beginners",
  "Free Trading Learning Group",
  "Learn Market Basics",
  "Trading Community on Telegram",
  "Start Learning Trading Today",
  "Trading Lessons Online",
  "Understand How Trading Works",
  "Market Education Hub",
  "Learn Risk Management",
  "Trading Knowledge Platform"
];

let index = 0;
const rotatingText = document.getElementById("rotatingText");

function rotateText() {
  rotatingText.style.opacity = 0;
  setTimeout(() => {
    rotatingText.textContent = phrases[index];
    rotatingText.style.opacity = 1;
    index = (index + 1) % phrases.length;
  }, 300);
}

setInterval(rotateText, 2500);
rotateText();
