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

setInterval(rotate, 2600);
rotate();

// Parallax effect
const heroImage = document.querySelector(".lux-image");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  heroImage.style.transform = `translateY(${scrollY * 0.05}px)`;
});

// 3D tilt on image
heroImage.addEventListener("mousemove", (e) => {
  const rect = heroImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const midX = rect.width / 2;
  const midY = rect.height / 2;

  const rotateX = ((y - midY) / midY) * 6;
  const rotateY = ((x - midX) / midX) * -6;

  heroImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

heroImage.addEventListener("mouseleave", () => {
  heroImage.style.transform = "rotateX(0) rotateY(0)";
});

// Magnetic buttons
document.querySelectorAll(".lux-btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

// Finger-follow glow
const glow = document.createElement("div");
glow.id = "glow-follow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
