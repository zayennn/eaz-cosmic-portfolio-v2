document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successOverlay = document.getElementById('successOverlay');
    const successClose = document.getElementById('successClose');
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    const errorMessages = document.querySelectorAll('.error-message');

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

    function showError(input, message) {
        const errorDiv = input.parentElement.querySelector('.error-message');
        
        input.classList.remove('valid');
        input.classList.add('error');
        input.classList.add('shake');
        
        if (errorDiv) {
            errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
            errorDiv.classList.add('show');
        }
        
        setTimeout(() => {
            input.classList.remove('shake');
        }, 500);
    }

    function showValid(input) {
        const errorDiv = input.parentElement.querySelector('.error-message');
        
        input.classList.remove('error');
        input.classList.add('valid');
        
        if (errorDiv) {
            errorDiv.classList.remove('show');
        }
    }

    function clearValidation(input) {
        const errorDiv = input.parentElement.querySelector('.error-message');
        
        input.classList.remove('error', 'valid');
        
        if (errorDiv) {
            errorDiv.classList.remove('show');
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateInput(input) {
        const value = input.value.trim();
        const name = input.getAttribute('name');
        const type = input.getAttribute('type');

        if (!value && input.hasAttribute('required')) {
            const fieldName = name.charAt(0).toUpperCase() + name.slice(1);
            showError(input, `${fieldName} is required`);
            return false;
        }

        if (name === 'email' && value) {
            if (!validateEmail(value)) {
                showError(input, 'Please enter a valid email address');
                return false;
            }
        }

        if (name === 'name' && value && value.length < 2) {
            showError(input, 'Name must be at least 2 characters');
            return false;
        }

        if (name === 'message' && value && value.length < 10) {
            showError(input, 'Message must be at least 10 characters');
            return false;
        }

        showValid(input);
        return true;
    }

    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim()) {
                validateInput(this);
            } else if (this.hasAttribute('required')) {
                const fieldName = this.getAttribute('name').charAt(0).toUpperCase() + this.getAttribute('name').slice(1);
                showError(this, `${fieldName} is required`);
            } else {
                clearValidation(this);
            }
        });

        input.addEventListener('focus', function() {
            clearValidation(this);
            
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createTransmissionParticles(x, y, 8);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                if (this.value.trim()) {
                    validateInput(this);
                }
            }
        });
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        let firstError = null;
        
        formInputs.forEach(input => {
            if (input.hasAttribute('required') || input.value.trim()) {
                const valid = validateInput(input);
                if (!valid && !firstError) {
                    firstError = input;
                }
                if (!valid) {
                    isValid = false;
                }
            }
        });
        
        if (!isValid) {
            if (firstError) {
                firstError.focus();
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        const btnRect = submitBtn.getBoundingClientRect();
        const centerX = btnRect.left + btnRect.width / 2;
        const centerY = btnRect.top + btnRect.height / 2;
        
        submitBtn.classList.add('sending');
        submitBtn.querySelector('span').textContent = 'Transmitting...';
        submitBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
        submitBtn.disabled = true;
        
        createTransmissionParticles(centerX, centerY, 30);
        
        const formData = new FormData(contactForm);
        
        fetch('/contact/send', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => { throw new Error(data.message || 'Server error ' + response.status); });
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                showSuccess();
            } else {
                showErrorAlert(data.message || 'Failed to send message. Please try again.');
            }
        })
        .catch(err => {
            console.error('Contact form error:', err);
            showErrorAlert(err.message || 'Failed to send message. Please check your connection and try again.');
        })
        .finally(() => {
            setTimeout(() => {
                submitBtn.classList.remove('sending');
                submitBtn.querySelector('span').textContent = 'Transmit Message';
                submitBtn.querySelector('i').className = 'fas fa-paper-plane';
                submitBtn.disabled = false;
            }, 500);
        });
    });

    function showSuccess() {
        createTransmissionParticles(window.innerWidth / 2, window.innerHeight / 2, 50);
        
        setTimeout(() => {
            successOverlay.classList.add('active');
        }, 300);
        
        contactForm.reset();
        formInputs.forEach(input => clearValidation(input));
    }

    function showErrorAlert(message) {
        alert('Error: ' + message);
    }

    successClose.addEventListener('click', () => {
        createTransmissionParticles(window.innerWidth / 2, window.innerHeight / 2, 20);
        successOverlay.classList.remove('active');
    });

    successOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            successOverlay.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && successOverlay.classList.contains('active')) {
            successOverlay.classList.remove('active');
        }
        
        if (e.ctrlKey && e.key === 'Enter') {
            const activeEl = document.activeElement;
            if (activeEl && (activeEl.classList.contains('form-input') || activeEl.classList.contains('form-textarea'))) {
                contactForm.dispatchEvent(new Event('submit'));
            }
        }
    });

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

        gsap.to('.signal-ring', {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });
    }

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

    document.querySelectorAll('.social-orbit-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            createTransmissionParticles(e.clientX, e.clientY, 6);
        });
    });

    initAnimations();

    console.log('📡 Holographic Message Station online - Ready to receive transmissions!');
});