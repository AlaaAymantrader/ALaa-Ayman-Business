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

let i = 0;
const text = document.getElementById("rotatingText");

function rotate() {
  text.style.opacity = 0;
  setTimeout(() => {
    text.textContent = phrases[i];
    text.style.opacity = 1;
    i = (i + 1) % phrases.length;
  }, 300);
}

setInterval(rotate, 2500);
rotate();
