document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Entrance Animation
    const elements = ['.avatar-wrapper', 'h1', '.story-text', '.action-area', '.stats-deck'];
    
    elements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 + (index * 120));
        }
    });

    // 2. Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
