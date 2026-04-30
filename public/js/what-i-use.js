// ============================================
// WHAT I USE - MIXITUP INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('skillsContainer');
    
    if (!container) {
        console.warn('Skills container not found');
        return;
    }

    // Initialize MixItUp
    const mixer = mixitup(container, {
        animation: {
            enable: true,
            effects: 'fade rotateZ(-10deg) scale(0.8)',
            duration: 600,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            perspectiveDistance: '3000px',
            perspectiveOrigin: '50% 50%',
            queue: true,
            queueLimit: 3,
            animateResizeContainer: true,
            animateResizeTargets: false,
            staggerSequence: false,
            reverseOut: true
        },
        callbacks: {
            onMixStart: function(state) {
                console.log('Mixing started:', state);
            },
            onMixEnd: function(state) {
                console.log('Mixing ended:', state);
                
                // Animate level bars when cards appear
                setTimeout(() => {
                    const levelBars = document.querySelectorAll('.level-bar');
                    levelBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                }, 100);
            }
        },
        controls: {
            enable: true,
            live: true,
            toggleLogic: 'and',
            toggleDefault: 'all'
        },
        selectors: {
            target: '.mix',
            control: '.filter-btn'
        },
        load: {
            filter: 'all'
        }
    });

    // ============================================
    // FILTER BUTTON ACTIVE STATE
    // ============================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Add ripple effect
            createRipple(event, this);
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
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
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

    // Observe all skill cards
    cards.forEach(card => {
        const parentCard = card.closest('.skill-card');
        if (parentCard) {
            parentCard.style.opacity = '0';
            parentCard.style.transform = 'translateY(30px)';
            parentCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(parentCard);
        }
    });

    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Press 1-5 to filter categories
        const keyMap = {
            '1': 'all',
            '2': '.frontend',
            '3': '.backend',
            '4': '.database',
            '5': '.tools'
        };

        if (keyMap[e.key] && !e.target.matches('input, textarea')) {
            const filter = keyMap[e.key];
            mixer.filter(filter);
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === filter) {
                    btn.classList.add('active');
                }
            });
        }
    });

    console.log('What I Use page initialized with MixItUp!');
});