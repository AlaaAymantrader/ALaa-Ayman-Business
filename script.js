document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Staggered Entrance Animation
    // Elements load one by one for a clean effect
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

    // 2. Ripple Effect on Click (Material Design style)
    const buttons = document.querySelectorAll('a');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 300);
        });
    });
});
