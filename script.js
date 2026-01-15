// Rotating text
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

// Water ripple
document.addEventListener("click", e => {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 1000);
});

// Magnetic buttons
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = `translate(0,0)`;
  });
});

// Light follow
const light = document.getElementById("light-follow");

document.addEventListener("mousemove", e => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});
