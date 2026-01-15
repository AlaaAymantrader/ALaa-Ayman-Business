* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: radial-gradient(circle at top, #111, #000);
  color: #fff;
  font-family: 'Segoe UI', Arial, sans-serif;
}

/* HERO */
.hero {
  min-height: 100vh;
  background: url("hero.jpeg") center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

h1 {
  font-size: 2.4rem;
  line-height: 1.2;
}

p {
  color: #aaa;
}

/* CTA */
.cta {
  display: inline-block;
  padding: 16px 36px;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
}

.glow {
  background: black;
  box-shadow: 0 0 20px rgba(0,255,255,0.4);
  border: 2px solid cyan;
}

.pulse {
  animation: pulse 2s infinite;
}

/* STATS */
.stats {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 60px 20px;
  flex-wrap: wrap;
}

.card {
  background: #111;
  padding: 25px;
  border-radius: 16px;
  width: 260px;
  box-shadow: 0 0 20px rgba(0,255,255,0.1);
}

/* TRUST */
.trust {
  padding: 80px 20px;
  text-align: center;
}

.trust-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* DISCLAIMER */
.disclaimer {
  max-width: 700px;
  margin: auto;
  padding: 40px 20px;
  color: #777;
  font-size: 0.9rem;
  text-align: center;
}

/* STICKY CTA */
.sticky-cta {
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 14px 30px;
  border-radius: 50px;
  z-index: 999;
  text-decoration: none;
  color: white;
}

/* ANIMATIONS */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* MOBILE */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}
