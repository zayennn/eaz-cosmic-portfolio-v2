document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // FILTER SLIDER & BUTTONS
    // ============================================
    const filterWrapper = document.getElementById('filterWrapper');
    const filterSlider = document.getElementById('filterSlider');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillsGrid = document.getElementById('skillsGrid');
    const skillCards = document.querySelectorAll('.skill-card');
    
    if (!filterWrapper || !filterSlider || filterButtons.length === 0) {
        console.warn('Filter elements not found');
        return;
    }

    // ============================================
    // INITIALIZE SLIDER POSITION
    // ============================================
    function initSlider() {
        const activeButton = document.querySelector('.filter-btn.active');
        if (activeButton) {
            moveSliderToButton(activeButton, false);
        }
    }

    // ============================================
    // MOVE SLIDER TO BUTTON
    // ============================================
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
        
        // Update text color classes
        filterButtons.forEach(btn => {
            btn.classList.remove('slider-active');
        });
        button.classList.add('slider-active');
    }

    // ============================================
    // FILTER CARDS FUNCTION
    // ============================================
    function filterCards(category) {
        // Get all cards currently visible for stagger calculation
        const visibleCards = [];
        const hiddenCards = [];
        
        skillCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                visibleCards.push(card);
            } else {
                hiddenCards.push(card);
            }
        });
        
        // First, hide all cards that should be hidden
        hiddenCards.forEach(card => {
            card.classList.add('hidden');
            card.classList.remove('visible');
        });
        
        // Then show visible cards with stagger delay
        visibleCards.forEach((card, index) => {
            // Remove hidden class first
            card.classList.remove('hidden');
            
            // Add visible class with stagger delay
            setTimeout(() => {
                card.classList.add('visible');
                
                // Animate the level bar
                const levelBar = card.querySelector('.level-bar');
                if (levelBar) {
                    const targetWidth = levelBar.style.width;
                    levelBar.style.width = '0';
                    setTimeout(() => {
                        levelBar.style.width = targetWidth;
                    }, 100);
                }
            }, index * 80); // 80ms stagger delay
        });
        
        // Log filter results
        console.log(`Filtered: ${category} | Showing: ${visibleCards.length} cards | Hidden: ${hiddenCards.length} cards`);
    }

    // ============================================
    // BUTTON CLICK HANDLER
    // ============================================
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't do anything if already active
            if (this.classList.contains('active')) return;
            
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
            
            // Get category and filter cards
            const category = this.getAttribute('data-category');
            filterCards(category);
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

    document.addEventListener('keydown', function(e) {
        const keyMap = {
            '1': 'all',
            '2': 'frontend',
            '3': 'backend',
            '4': 'database',
            '5': 'tools'
        };

        if (keyMap[e.key] && !e.target.matches('input, textarea')) {
            const category = keyMap[e.key];
            
            const targetButton = document.querySelector(`.filter-btn[data-category="${category}"]`);
            if (targetButton && !targetButton.classList.contains('active')) {
                targetButton.click();
            }
        }
    });

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

    initSlider();
    
    filterCards('all');
    
    console.log('What I Use - Filter system initialized!');
    console.log('Tips: Press keys 1-5 to filter categories');
    console.log('  1 = All | 2 = Frontend | 3 = Backend | 4 = Database | 5 = Tools');
});