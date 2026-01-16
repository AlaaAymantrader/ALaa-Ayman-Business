// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLiveCounter();
    initAnimations();
    initButtonEffects();
    initScrollAnimations();
});

// Live Counter Animation
function initLiveCounter() {
    const counterElement = document.getElementById('liveCount');
    if (!counterElement) return;
    
    let count = 37450;
    let isCounting = false;
    
    // Function to update counter
    function updateCounter() {
        const increment = Math.floor(Math.random() * 3) + 1; // 1-3
        count += increment;
        counterElement.textContent = count.toLocaleString();
        
        // Add visual feedback
        counterElement.style.transform = 'scale(1.1)';
        counterElement.style.color = '#10b981';
        
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
            counterElement.style.color = '#0088cc';
        }, 300);
    }
    
    // Start counter when element is in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isCounting) {
            isCounting = true;
            
            // Update every 5-10 seconds randomly
            setInterval(() => {
                updateCounter();
            }, Math.random() * 5000 + 5000); // 5-10 seconds
        }
    }, { threshold: 0.5 });
    
    observer.observe(counterElement);
}

// Button Effects
function initButtonEffects() {
    // Main Telegram Button Hover Effect
    const mainBtn = document.querySelector('.telegram-btn-main');
    if (mainBtn) {
        mainBtn.addEventListener('mouseenter', () => {
            const pulse = mainBtn.querySelector('.btn-pulse');
            pulse.style.animation = 'pulse 0.5s ease-out';
            setTimeout(() => {
                pulse.style.animation = 'pulse 2s infinite';
            }, 500);
        });
        
        // Click animation
        mainBtn.addEventListener('click', (e) => {
            // Only animate if it's a Telegram link
            if (mainBtn.href.includes('t.me')) {
                // Create ripple effect
                const rect = mainBtn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: translate(-50%, -50%) scale(0);
                    animation: rippleEffect 0.6s linear;
                    pointer-events: none;
                    z-index: 3;
                `;
                
                // Set position and size
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                mainBtn.appendChild(ripple);
                
                // Remove after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    }
    
    // Secondary buttons hover effects
    const secondaryBtns = document.querySelectorAll('.telegram-btn-secondary, .telegram-btn-large');
    secondaryBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            if (btn.classList.contains('telegram-btn-large')) {
                btn.style.transform = 'translateY(-10px)';
            } else {
                btn.style.transform = 'translateY(-3px)';
            }
        });
    });
    
    // Add ripple animation to CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            to {
                transform: translate(-50%, -50%) scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature, .testimonial, .final-cta');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Init other animations
function initAnimations() {
    // Animate profile card on load
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        setTimeout(() => {
            profileCard.style.transform = 'translateY(0)';
            profileCard.style.opacity = '1';
        }, 300);
    }
    
    // Animate headline
    const headline = document.querySelector('.headline');
    if (headline) {
        setTimeout(() => {
            headline.style.transform = 'translateY(0)';
            headline.style.opacity = '1';
        }, 600);
    }
}

// Track button clicks
document.querySelectorAll('a[href*="t.me"]').forEach(link => {
    link.addEventListener('click', function() {
        // You can add Google Analytics or other tracking here
        console.log('Telegram link clicked:', this.href);
        
        // Optional: Send data to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'telegram_click', {
                'event_category': 'Conversion',
                'event_label': this.href
            });
        }
    });
});

// Add subtle floating animation to features
function addFloatingAnimations() {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.animationDelay = (index * 0.2) + 's';
    });
}

// Initialize floating animations
addFloatingAnimations();

// Mobile touch improvements
document.addEventListener('touchstart', function() {}, { passive: true });

// Prevent double-tap zoom on mobile
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
