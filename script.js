// Countdown Timer
let time = 15 * 60;
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  if (time > 0) {
    time--;
    let min = Math.floor(time / 60);
    let sec = time % 60;
    countdownEl.textContent = `${min}:${sec < 10 ? "0" + sec : sec}`;
  }
}, 1000);

// Fake live visitors
const visitorsEl = document.getElementById("visitors");
setInterval(() => {
  let current = parseInt(visitorsEl.textContent);
  let change = Math.floor(Math.random() * 5) - 2;
  let newVal = current + change;
  if (newVal < 80) newVal = 80;
  visitorsEl.textContent = newVal;
}, 3000);

// Members counter
const membersEl = document.getElementById("members");
setInterval(() => {
  let current = parseInt(membersEl.textContent.replace(",", ""));
  current += Math.floor(Math.random() * 3);
  membersEl.textContent = current.toLocaleString();
}, 5000);
