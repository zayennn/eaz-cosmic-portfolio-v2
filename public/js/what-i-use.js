// ============================================
// WHAT I USE - FILTER SLIDER ANIMATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // FILTER SLIDER - MOVING BACKGROUND
    // ============================================
    const filterWrapper = document.getElementById('filterWrapper');
    const filterSlider = document.getElementById('filterSlider');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!filterWrapper || !filterSlider || filterButtons.length === 0) {
        console.warn('Filter elements not found');
        return;
    }

    // Initialize slider position on the active button
    function initSlider() {
        const activeButton = document.querySelector('.filter-btn.active');
        if (activeButton) {
            moveSliderToButton(activeButton, false);
        }
    }

    // Move slider to a specific button
    function moveSliderToButton(button, animate = true) {
        const buttonRect = button.getBoundingClientRect();
        const wrapperRect = filterWrapper.getBoundingClientRect();
        
        const left = buttonRect.left - wrapperRect.left;
        const width = buttonRect.width;
        
        if (animate) {
            filterSlider.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        } else {
            filterSlider.style.transition = 'none';
        }
        
        filterSlider.style.left = `${left}px`;
        filterSlider.style.width = `${width}px`;
        
        // Update button text colors
        filterButtons.forEach(btn => {
            btn.classList.remove('slider-active');
        });
        button.classList.add('slider-active');
    }

    // ============================================
    // BUTTON CLICK HANDLER
    // ============================================
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Move slider to this button
            moveSliderToButton(this, true);
            
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
            z-index: 3;
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
    // WINDOW RESIZE HANDLER
    // ============================================
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const activeButton = document.querySelector('.filter-btn.active');
            if (activeButton) {
                moveSliderToButton(activeButton, false);
            }
        }, 100);
    });

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

    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(card);
    });

    // Initialize slider position
    initSlider();
    
    console.log('Filter slider initialized!');
});