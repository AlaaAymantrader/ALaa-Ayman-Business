document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Year Update
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Staggered Entrance Animation
    // Elements load one by one for a clean, premium effect
    const elements = [
        document.querySelector('.profile-card'),
        document.querySelector('h1'),
        document.querySelector('.subtitle'),
        document.querySelector('.button-group'),
        document.querySelector('.features-row')
    ];

    elements.forEach((el, index) => {
        if(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(15px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            
            // Stagger delay based on index
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 + (index * 100)); 
        }
    });

    // 3. Ripple Effect on Click
    // Adds a "Material Design" touch feedback when buttons are clicked
    const buttons = document.querySelectorAll('a.btn-primary');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Calculate position of click
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
