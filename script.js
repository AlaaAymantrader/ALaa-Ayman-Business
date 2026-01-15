document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PREMIUM ENTRANCE ANIMATION ---
    const hero = document.querySelector('.hero-container');
    const nav = document.querySelector('.glass-nav');

    // Set initial styles for animation
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        hero.style.transition = 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
        
        // Trigger animation after a slight delay
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 200);
    }

    if (nav) {
        nav.style.opacity = '0';
        nav.style.transform = 'translateY(-20px)';
        nav.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            nav.style.opacity = '1';
            nav.style.transform = 'translateY(0)';
        }, 100);
    }

    // --- 2. MAGNETIC GOLD BUTTON EFFECT (Desktop Only) ---
    // This gives the button a "heavy" physical feel
    const goldBtn = document.querySelector('.btn-gold');

    if (goldBtn) {
        // Only apply effect on screens larger than mobile/tablet
        if (window.matchMedia("(min-width: 992px)").matches) {
            
            goldBtn.addEventListener('mousemove', (e) => {
                const rect = goldBtn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Calculate distance from center
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // "8" determines the magnetic strength (higher = stiffer)
                const deltaX = (x - centerX) / 8; 
                const deltaY = (y - centerY) / 8;

                goldBtn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            });

            goldBtn.addEventListener('mouseleave', () => {
                // Snap back to center
                goldBtn.style.transform = 'translate(0, 0)';
                goldBtn.style.transition = 'transform 0.3s ease';
            });

            // Remove transition during movement to prevent lag
            goldBtn.addEventListener('mouseenter', () => {
                goldBtn.style.transition = 'none';
            });
        }
    }

    // --- 3. AUTO-UPDATE YEAR IN FOOTER ---
    const footerText = document.querySelector('footer p:nth-child(2)'); // Targets the copyright line
    if (footerText) {
        const currentYear = new Date().getFullYear();
        if (!footerText.innerHTML.includes(currentYear)) {
            // Replaces "2026" or any old year with the current real year
            footerText.innerHTML = footerText.innerHTML.replace(/20[0-9]{2}/, currentYear);
        }
    }
});
