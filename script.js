document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Tech Entrance Animation
    const elements = ['.profile-header', '.control-panel', '.stats-bar'];
    
    elements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 + (index * 150));
        }
    });

    // 2. Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.innerText = new Date().getFullYear();
    }
});
