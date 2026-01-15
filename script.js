document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Live Clock Function (UTC Time)
    // Makes the page feel like a live trading terminal
    function updateTime() {
        const now = new Date();
        const timeString = now.toISOString().substr(11, 8);
        document.getElementById('clock').textContent = timeString + " UTC";
        
        // Simple Logic to toggle "Market Open/Closed" text
        // (Just for visual effect, assumes generic market hours)
        const hour = now.getUTCHours();
        const state = document.getElementById('market-state');
        const dot = document.querySelector('.dot');
        
        if(hour >= 21 || hour < 5) { // Asian Session / Late NY
             // Keep it 'OPEN' usually for Crypto/Forex, or toggle based on logic
             state.textContent = "OPEN";
             dot.classList.add('live');
        } else {
             state.textContent = "ACTIVE"; 
             dot.classList.add('live');
        }
    }
    
    setInterval(updateTime, 1000);
    updateTime();

    // 2. Year Update
    document.getElementById('year').textContent = new Date().getFullYear();

    // 3. Staggered Animation for Cards
    const cards = document.querySelectorAll('.info-card, .action-btn');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
});
