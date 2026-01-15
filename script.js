// ============================
// Countdown Timer
// ============================
let time = 15 * 60;

const countdownEl = document.getElementById("countdown");
const countdownLargeEl = document.getElementById("countdownLarge");

setInterval(() => {
  if (time > 0) time--;

  const min = Math.floor(time / 60);
  const sec = time % 60;
  const formatted = `${min}:${sec < 10 ? "0" + sec : sec}`;

  if (countdownEl) countdownEl.textContent = formatted;
  if (countdownLargeEl) countdownLargeEl.textContent = formatted;
}, 1000);


// ============================
// Live Counters (Simulated)
// ============================
const membersEl = document.getElementById("members");
const onlineEl = document.getElementById("online");
const signalsEl = document.getElementById("signals");

setInterval(() => {
  if (membersEl) {
    let current = parseInt(membersEl.textContent.replace(/,/g, ""));
    current += Math.floor(Math.random() * 2);
    membersEl.textContent = current.toLocaleString();
  }

  if (onlineEl) {
    let base = 90 + Math.floor(Math.random() * 60);
    onlineEl.textContent = base;
  }

  if (signalsEl) {
    let base = 1400 + Math.floor(Math.random() * 120);
    signalsEl.textContent = base;
  }
}, 4000);


// ============================
// Scroll Reveal
// ============================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ============================
// Reviews (Rotating)
// ============================
const reviews = [
  { name: "Ahmed", country: "UAE 🇦🇪", stars: 5, text: "Very clear guidance and calm style." },
  { name: "Fatima", country: "Morocco 🇲🇦", stars: 5, text: "Beginner friendly and well explained." },
  { name: "Daniel", country: "Germany 🇩🇪", stars: 4, text: "Professional and structured." },
  { name: "Youssef", country: "Saudi Arabia 🇸🇦", stars: 5, text: "Consistent approach, no hype." },
  { name: "Sara", country: "UK 🇬🇧", stars: 4, text: "Simple and easy to follow." }
];

const reviewContainer = document.getElementById("testimonialSlider");

function renderStars(count) {
  return "⭐".repeat(count);
}

function updateReview() {
  if (!reviewContainer) return;

  const r = reviews[Math.floor(Math.random() * reviews.length)];

  const card = document.createElement("div");
  card.className = "review-card";

  card.innerHTML = `
    <div class="review-header">
      <div class="avatar">${r.name.charAt(0)}</div>
      <div>
        <div class="name">${r.name} <span class="verified">✔</span></div>
        <div class="country">${r.country}</div>
      </div>
    </div>
    <div class="stars">${renderStars(r.stars)}</div>
    <div class="review-text">${r.text}</div>
  `;

  reviewContainer.innerHTML = "";
  reviewContainer.appendChild(card);

  setTimeout(() => {
    card.classList.add("active");
  }, 100);
}

setInterval(updateReview, 5000);
updateReview();


// ============================
// Join Popups (Simulated)
// ============================
const names = ["Ahmed", "Ali", "Omar", "Youssef", "Daniel", "Michael", "Sara", "Fatima"];
const countries = ["UAE", "Saudi Arabia", "Germany", "USA", "UK", "Canada", "Morocco"];

function showJoinPopup() {
  const container = document.getElementById("joinPopups");
  if (!container) return;

  const name = names[Math.floor(Math.random() * names.length)];
  const country = countries[Math.floor(Math.random() * countries.length)];

  const popup = document.createElement("div");
  popup.className = "join-popup";
  popup.textContent = `${name} from ${country} joined the community`;

  container.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 6000);
}

setInterval(showJoinPopup, 6000);


// ============================
// CTA Pulse Loop
// ============================
setInterval(() => {
  document.querySelectorAll(".glow").forEach(btn => {
    btn.classList.remove("pulse");
    void btn.offsetWidth;
    btn.classList.add("pulse");
  });
}, 7000);
