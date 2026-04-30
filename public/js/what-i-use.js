// ============================================
// WHAT I USE - NO FILTER, VISUAL EFFECTS ONLY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // CARD TILT EFFECT
    // ============================================
    const cards = document.querySelectorAll('.card-inner');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `
                translateY(-10px) 
                scale(1.02) 
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
            `;
            
            // Move glare effect
            const glare = this.querySelector('.card-glare');
            if (glare) {
                const percentX = (x / rect.width) * 100;
                glare.style.left = `${percentX}%`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            
            const glare = this.querySelector('.card-glare');
            if (glare) {
                glare.style.left = '-100%';
            }
        });
    });

    // ============================================
    // BUTTON VISUAL EFFECTS ONLY
    // ============================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Visual active state only - no filtering
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            // Add ripple effect
            createRipple(e, this);
        });
    });

    // ============================================
    // RIPPLE EFFECT ON BUTTONS
    // ============================================
    function createRipple(event, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-effect 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add ripple keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-effect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ============================================
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all skill cards for initial load animation
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(card);
    });

    console.log('What I Use page initialized - Visual effects only, no filtering!');
});