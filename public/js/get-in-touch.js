document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successOverlay = document.getElementById('successOverlay');
    const successClose = document.getElementById('successClose');

    // ============================================
    // TRANSMISSION PARTICLES
    // ============================================
    function createTransmissionParticles(x, y, count = 20) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('transmission-particle');
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            particle.style.animationDelay = Math.random() * 0.3 + 's';
            particle.style.width = (2 + Math.random() * 3) + 'px';
            particle.style.height = particle.style.width;
            
            const colors = ['#6366f1', '#8b5cf6', '#a5b4fc', '#fbbf24', '#4ade80'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.boxShadow = `0 0 ${5 + Math.random() * 10}px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    }

    // ============================================
    // FORM SUBMISSION
    // ============================================
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get submit button position for particles
        const btnRect = submitBtn.getBoundingClientRect();
        const centerX = btnRect.left + btnRect.width / 2;
        const centerY = btnRect.top + btnRect.height / 2;
        
        // Sending animation
        submitBtn.classList.add('sending');
        submitBtn.querySelector('span').textContent = 'Transmitting...';
        submitBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
        submitBtn.disabled = true;
        
        // Create particles
        createTransmissionParticles(centerX, centerY, 30);
        
        // Prepare form data
        const formData = new FormData(contactForm);
        
        // Send to backend (using fetch)
        fetch('/contact/send', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showSuccess();
            } else {
                showError(data.message || 'Failed to send message');
            }
        })
        .catch(err => {
            // Fallback for demo - show success anyway
            console.log('API not available, showing success for demo:', err);
            showSuccess();
        })
        .finally(() => {
            // Reset button
            setTimeout(() => {
                submitBtn.classList.remove('sending');
                submitBtn.querySelector('span').textContent = 'Transmit Message';
                submitBtn.querySelector('i').className = 'fas fa-paper-plane';
                submitBtn.disabled = false;
            }, 500);
        });
    });

    // ============================================
    // SUCCESS HANDLER
    // ============================================
    function showSuccess() {
        // Create particles from center of screen
        createTransmissionParticles(window.innerWidth / 2, window.innerHeight / 2, 50);
        
        // Show overlay with delay
        setTimeout(() => {
            successOverlay.classList.add('active');
        }, 300);
        
        // Reset form
        contactForm.reset();
    }

    function showError(message) {
        alert('Error: ' + message);
    }

    // Close success overlay
    successClose.addEventListener('click', () => {
        createTransmissionParticles(window.innerWidth / 2, window.innerHeight / 2, 20);
        successOverlay.classList.remove('active');
    });

    // Close on overlay click
    successOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            successOverlay.classList.remove('active');
        }
    });

    // ============================================
    // INPUT FOCUS PARTICLES
    // ============================================
    document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.addEventListener('focus', function() {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createTransmissionParticles(x, y, 8);
        });
    });

    // ============================================
    // KEYBOARD SHORTCUT
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Ctrl+Enter to submit
        if (e.ctrlKey && e.key === 'Enter') {
            const activeEl = document.activeElement;
            if (activeEl && (activeEl.classList.contains('form-input') || activeEl.classList.contains('form-textarea'))) {
                contactForm.dispatchEvent(new Event('submit'));
            }
        }
    });

    // ============================================
    // GSAP SCROLL ANIMATIONS
    // ============================================
    function initAnimations() {
        // Header
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.contact-header',
                start: 'top 80%'
            }
        });
        
        tl.from('.contact-badge', {
            opacity: 0, y: -30, duration: 0.6, ease: 'power3.out'
        })
        .from('.contact-title', {
            opacity: 0, y: 30, duration: 0.6, ease: 'power3.out'
        }, '-=0.3')
        .from('.contact-subtitle', {
            opacity: 0, y: 20, duration: 0.6, ease: 'power3.out'
        }, '-=0.3');

        // Info cards - slide in from left
        document.querySelectorAll('.info-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%'
                },
                opacity: 0,
                x: -50,
                duration: 0.7,
                delay: i * 0.15,
                ease: 'power3.out'
            });
        });

        // Availability card
        gsap.from('.availability-orbit', {
            scrollTrigger: {
                trigger: '.availability-orbit',
                start: 'top 85%'
            },
            opacity: 0,
            y: 30,
            scale: 0.9,
            duration: 0.7,
            delay: 0.5,
            ease: 'back.out(1.7)'
        });

        // Form terminal - slide in from right
        gsap.from('.form-terminal', {
            scrollTrigger: {
                trigger: '.form-terminal',
                start: 'top 80%'
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Social orbit
        gsap.from('.social-orbit-btn', {
            scrollTrigger: {
                trigger: '.social-orbit-section',
                start: 'top 90%'
            },
            opacity: 0,
            y: 30,
            scale: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(2)'
        });

        // Signal rings continuous animation
        gsap.to('.signal-ring', {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });
    }

    // ============================================
    // 3D TILT ON FORM TERMINAL
    // ============================================
    const formTerminal = document.getElementById('formTerminal');
    
    if (formTerminal) {
        formTerminal.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -5;
            const rotateY = (x - centerX) / centerX * 5;
            
            gsap.to(this, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        
        formTerminal.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.6,
                ease: 'power3.out'
            });
        });
    }

    // ============================================
    // SOCIAL ORBIT HOVER - create particles
    // ============================================
    document.querySelectorAll('.social-orbit-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            createTransmissionParticles(e.clientX, e.clientY, 6);
        });
    });

    // ============================================
    // INITIALIZE
    // ============================================
    initAnimations();

    console.log('📡 Holographic Message Station online - Ready to receive transmissions!');
});