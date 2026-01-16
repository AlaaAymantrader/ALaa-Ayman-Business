// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initTypingText();
    initStatsAnimation();
    initScrollAnimations();
    initInteractiveElements();
    initTouchEffects();
    initChartDemo();
    
    // Remove loading screen after 2 seconds
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
});

// Typing Text Animation
function initTypingText() {
    const text = "WHERE 37,450+ TRADERS GET WINNING SIGNALS";
    const typingElement = document.getElementById('typingText');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Start cursor blink
            setInterval(() => {
                const cursor = document.querySelector('.cursor');
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }
    
    // Start typing after 1 second
    setTimeout(typeWriter, 1000);
}

// Animated Stats Counter
function initStatsAnimation() {
    const statItems = document.querySelectorAll('.stat-item[data-count]');
    
    statItems.forEach(item => {
        const target = parseInt(item.getAttribute('data-count'));
        const numberElement = item.querySelector('.stat-number');
        const canvas = item.querySelector('.stat-canvas');
        const ctx = canvas.getContext('2d');
        
        let current = 0;
        const increment = target / 100;
        const duration = 2000; // 2 seconds
        const stepTime = duration / 100;
        
        // Draw circle progress
        function drawProgress(percent) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Background circle
            ctx.beginPath();
            ctx.arc(50, 50, 45, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 8;
            ctx.stroke();
            
            // Progress circle
            ctx.beginPath();
            ctx.arc(50, 50, 45, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * percent));
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    // Update number
                    if (item.getAttribute('data-count') === '87') {
                        numberElement.textContent = Math.floor(current) + '%';
                    } else {
                        numberElement.textContent = Math.floor(current).toLocaleString();
                    }
                    
                    // Update progress circle
                    drawProgress(current / target);
                }, stepTime);
                
                observer.unobserve(item);
            }
        }, { threshold: 0.5 });
        
        observer.observe(item);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Add extra animation for specific elements
                if (entry.target.classList.contains('feature-card')) {
                    entry.target.style.animationDelay = (Math.random() * 0.5) + 's';
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Interactive Elements
function initInteractiveElements() {
    // 3D Card Hover Effect
    const profileCard = document.getElementById('profileCard');
    if (profileCard) {
        profileCard.addEventListener('mousemove', (e) => {
            const cardRect = profileCard.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            
            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;
            
            profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    // Portal Hover Effect
    const portal = document.getElementById('telegramPortal');
    if (portal) {
        portal.addEventListener('mouseenter', () => {
            // Create particles
            createPortalParticles();
        });
    }
    
    // Glass Cards Tilt Effect
    VanillaTilt.init(document.querySelectorAll(".glass"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.05
    });
}

// Portal Particles Effect
function createPortalParticles() {
    const portal = document.getElementById('telegramPortal');
    const particlesContainer = document.getElementById('particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'portal-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 8 + 2}px;
            height: ${Math.random() * 8 + 2}px;
            background: #3b82f6;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: particleExplode 1s ease-out forwards;
        `;
        
        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const distance = 150;
        
        particle.style.setProperty('--endX', Math.cos(angle) * distance + 'px');
        particle.style.setProperty('--endY', Math.sin(angle) * distance + 'px');
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Add particle animation to CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleExplode {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(
                calc(-50% + var(--endX)),
                calc(-50% + var(--endY))
            ) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Touch Ripple Effect
function initTouchEffects() {
    const ripple = document.getElementById('touchRipple');
    
    document.addEventListener('click', (e) => {
        // Create ripple at click position
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.opacity = '1';
        
        // Animate ripple
        setTimeout(() => {
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.opacity = '0';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
        }, 10);
        
        // Reset ripple
        setTimeout(() => {
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.opacity = '0';
            ripple.style.marginLeft = '0';
            ripple.style.marginTop = '0';
        }, 600);
    });
}

// Trading Chart Demo
function initChartDemo() {
    const priceLine = document.getElementById('priceLine');
    if (!priceLine) return;
    
    // Simulate price movement
    let position = 0;
    setInterval(() => {
        position = (position + 1) % 100;
        priceLine.style.transform = `translateX(${position}%)`;
    }, 50);
}

// Simulate Buy Signal
function simulateBuy() {
    const chart = document.getElementById('tradingChart');
    
    // Create buy signal animation
    const buySignal = document.createElement('div');
    buySignal.className = 'buy-signal-animation';
    buySignal.style.cssText = `
        position: absolute;
        top: 50%;
        left: ${Math.random() * 80 + 10}%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        background: rgba(16, 185, 129, 0.3);
        border-radius: 50%;
        animation: buyPulse 1s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    chart.appendChild(buySignal);
    
    // Remove after animation
    setTimeout(() => {
        buySignal.remove();
    }, 1000);
    
    // Play sound (optional)
    playSound('buy');
}

// Simulate Sell Signal
function simulateSell() {
    const chart = document.getElementById('tradingChart');
    
    // Create sell signal animation
    const sellSignal = document.createElement('div');
    sellSignal.className = 'sell-signal-animation';
    sellSignal.style.cssText = `
        position: absolute;
        top: 50%;
        left: ${Math.random() * 80 + 10}%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        background: rgba(239, 68, 68, 0.3);
        border-radius: 50%;
        animation: sellPulse 1s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    chart.appendChild(sellSignal);
    
    // Remove after animation
    setTimeout(() => {
        sellSignal.remove();
    }, 1000);
    
    // Play sound (optional)
    playSound('sell');
}

// Add signal animations to CSS
const signalStyle = document.createElement('style');
signalStyle.textContent = `
    @keyframes buyPulse {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
    
    @keyframes sellPulse {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(signalStyle);

// Sound Effects
function playSound(type) {
    const audio = document.getElementById('hoverSound');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    parallaxLayers.forEach(layer => {
        const speed = layer.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        layer.style.transform = `translateY(${yPos}px)`;
    });
});

// Mobile Touch Gestures
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndY - touchStartY;
    
    // Upward swipe - show special effect
    if (swipeDistance < -100) {
        createConfetti();
    }
}

// Confetti Effect for Mobile Swipe
function createConfetti() {
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -20px;
            left: ${Math.random() * 100}%;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
            z-index: 9999;
            pointer-events: none;
        `;
        
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add confetti animation to CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Real-time Subscriber Counter
function updateLiveCounter() {
    const counterElement = document.getElementById('counter');
    if (!counterElement) return;
    
    let count = 37450;
    
    // Simulate new subscribers every few seconds
    setInterval(() => {
        // Random increment between 1-5
        const increment = Math.floor(Math.random() * 5) + 1;
        count += increment;
        
        // Update counter with animation
        counterElement.textContent = count.toLocaleString();
        
        // Add visual feedback
        counterElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
        }, 200);
    }, 5000); // Update every 5 seconds
}

// Initialize live counter
updateLiveCounter();

// Gravity Button Effect
const gravityBtn = document.getElementById('gravityBtn');
if (gravityBtn) {
    gravityBtn.addEventListener('mousemove', (e) => {
        const rect = gravityBtn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxDistance = 150;
        
        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(y - centerY, x - centerX);
            
            const buttonCore = gravityBtn.querySelector('.button-core');
            const pullX = Math.cos(angle) * force * 20;
            const pullY = Math.sin(angle) * force * 20;
            
            buttonCore.style.transform = `translate(-50%, -50%) translate(${pullX}px, ${pullY}px)`;
        }
    });
    
    gravityBtn.addEventListener('mouseleave', () => {
        const buttonCore = gravityBtn.querySelector('.button-core');
        buttonCore.style.transform = 'translate(-50%, -50%)';
    });
}
