// Live Counter Animation
function animateCounter() {
    const counterElement = document.getElementById('counter');
    const targetNumber = 37450;
    const duration = 2000; // 2 seconds
    const increment = targetNumber / (duration / 16); // 60fps
    
    let currentNumber = 0;
    
    const updateCounter = () => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            counterElement.textContent = currentNumber.toLocaleString();
        } else {
            counterElement.textContent = Math.floor(currentNumber).toLocaleString();
            requestAnimationFrame(updateCounter);
        }
    };
    
    // Start animation after a short delay
    setTimeout(() => {
        requestAnimationFrame(updateCounter);
    }, 500);
}

// Testimonial Slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const navButtons = document.querySelectorAll('.nav-btn');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        // Remove active class from all buttons
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Show selected testimonial
        testimonials[index].classList.add('active');
        navButtons[index].classList.add('active');
        currentIndex = index;
    }
    
    // Add click events to navigation buttons
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
}

// Animate features on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Observe steps
    document.querySelectorAll('.step').forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-20px)';
        step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(step);
    });
}

// Telegram button animation
function initTelegramButton() {
    const buttons = document.querySelectorAll('.primary-cta');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click animation
        button.addEventListener('click', function(e) {
            // Only animate if it's a Telegram link
            if (this.href.includes('t.me')) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    top: ${y}px;
                    left: ${x}px;
                `;
                
                this.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });
    
    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Track conversions
function trackConversion(action) {
    // You can integrate with Google Analytics or other tracking here
    console.log(`Conversion tracked: ${action}`);
    
    // Send data to your analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': 'Telegram Channel',
            'event_label': 'Join Button Click'
        });
   
