document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lux Entrance Animation (Very slow, very smooth)
    const elements = [
        '.hero-section',
        '.button-column',
        '.onyx-card'
    ];

    elements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 1s cubic-bezier(0.2, 1, 0.3, 1)'; // High-end easing
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 + (index * 200));
        }
    });

    // 2. Button "Magnetic" Hover Effect (Desktop Only)
    // Adds a subtle 3D movement to buttons
    const buttons = document.querySelectorAll('.glass-btn');
    
    if (window.matchMedia("(min-width: 768px)").matches) {
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Very subtle movement (max 5px)
                btn.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }

    // 3. Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
