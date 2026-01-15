// Countdown
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

// Fake live counters
const membersEl = document.getElementById("members");
const onlineEl = document.getElementById("online");
const copyingEl = document.getElementById("copying");

setInterval(() => {
  membersEl.textContent = (+membersEl.textContent.replace(/,/g,"") + Math.floor(Math.random()*3)).toLocaleString();
  onlineEl.textContent = 90 + Math.floor(Math.random()*60);
  copyingEl.textContent = 1400 + Math.floor(Math.random()*100);
}, 3000);
