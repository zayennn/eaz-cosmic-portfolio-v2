document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // GSAP SMOOTH SCROLL (INERTIA / MOMENTUM)
    // ============================================
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Setup Smooth Scrolling dengan efek inersia
    const smoother = {
        target: window,
        current: 0,
        target: 0,
        ease: 0.075, // Nilai kecil = lebih banyak inersia (0.05 - 0.1 recommended)
        isScrolling: false,

        init: function() {
            // Set initial position
            this.current = window.pageYOffset;
            this.target = window.pageYOffset;

            // RAF loop untuk smooth scrolling
            this.raf();
            
            // Event listeners
            this.bindEvents();
        },

        raf: function() {
            // Hitung posisi dengan lerp (linear interpolation)
            smoother.current += (smoother.target - smoother.current) * smoother.ease;
            
            // Apply posisi ke window
            window.scrollTo(0, smoother.current);
            
            // Check if still scrolling
            if (Math.abs(smoother.target - smoother.current) > 0.5) {
                smoother.isScrolling = true;
            } else {
                smoother.isScrolling = false;
                smoother.current = smoother.target;
            }
            
            requestAnimationFrame(smoother.raf);
        },

        bindEvents: function() {
            // Track wheel event untuk custom smooth scroll
            window.addEventListener('wheel', (e) => {
                e.preventDefault();
                
                // Get scroll amount
                const delta = e.deltaY;
                
                // Update target position
                smoother.target += delta;
                
                // Clamp target
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                smoother.target = Math.max(0, Math.min(smoother.target, maxScroll));
            }, { passive: false });

            // Track touch events untuk mobile
            let touchStartY = 0;
            let touchMoveY = 0;
            let touchVelocity = 0;
            let lastTouchY = 0;
            let lastTouchTime = 0;

            window.addEventListener('touchstart', (e) => {
                touchStartY = e.touches[0].clientY;
                lastTouchY = touchStartY;
                lastTouchTime = Date.now();
                smoother.target = smoother.current;
            }, { passive: true });

            window.addEventListener('touchmove', (e) => {
                touchMoveY = e.touches[0].clientY;
                const delta = touchStartY - touchMoveY;
                
                // Calculate velocity
                const now = Date.now();
                const dt = now - lastTouchTime;
                if (dt > 0) {
                    touchVelocity = (lastTouchY - touchMoveY) / dt;
                }
                lastTouchY = touchMoveY;
                lastTouchTime = now;
                
                smoother.target += delta * 0.5;
                
                // Clamp
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                smoother.target = Math.max(0, Math.min(smoother.target, maxScroll));
                
                touchStartY = touchMoveY;
            }, { passive: true });

            window.addEventListener('touchend', () => {
                // Add momentum after touch end
                const momentum = touchVelocity * 100;
                smoother.target += momentum;
                
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                smoother.target = Math.max(0, Math.min(smoother.target, maxScroll));
                
                touchVelocity = 0;
            });

            // Track keyboard navigation
            window.addEventListener('keydown', (e) => {
                const keys = {
                    'ArrowDown': 100,
                    'ArrowUp': -100,
                    'PageDown': 500,
                    'PageUp': -500,
                    'Home': -smoother.target,
                    'End': document.documentElement.scrollHeight - window.innerHeight - smoother.target
                };

                if (keys[e.key] !== undefined) {
                    e.preventDefault();
                    smoother.target += keys[e.key];
                    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                    smoother.target = Math.max(0, Math.min(smoother.target, maxScroll));
                }
            });

            // Reset scroll position on page load
            window.addEventListener('load', () => {
                smoother.target = 0;
                smoother.current = 0;
            });
        },

        scrollTo: function(targetY, duration = 1.5) {
            // Animate target untuk smooth scroll ke section
            const startTarget = this.target;
            const startTime = performance.now();
            
            const animate = (currentTime) => {
                const elapsed = (currentTime - startTime) / 1000; // in seconds
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease in-out
                const ease = progress < 0.5 
                    ? 2 * progress * progress 
                    : -1 + (4 - 2 * progress) * progress;
                
                this.target = startTarget + (targetY - startTarget) * ease;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            requestAnimationFrame(animate);
        }
    };

    // Inisialisasi smooth scroll
    smoother.init();

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    
    // Update navbar state menggunakan ScrollTrigger
    ScrollTrigger.create({
        start: 50,
        end: 99999,
        onEnter: () => navbar.classList.add('scrolled'),
        onLeaveBack: () => navbar.classList.remove('scrolled')
    });

    // ============================================
    // HAMBURGER MENU
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ============================================
    // SMOOTH SCROLL TO SECTION (ANCHOR LINKS)
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                
                // Calculate target position with offset for navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
                
                // Use custom smooth scroll
                smoother.scrollTo(targetPosition, 1.2);
            }
        });
    });

    // ============================================
    // TYPING EFFECT
    // ============================================
    const typingText = document.getElementById('typing-text');
    const roles = [
        'Web Developer',
        'Problem Solver',
        'Creative Thinker',
        'Junior Fullstack Developer'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        if (!typingText) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // ============================================
    // GSAP FADE-IN ANIMATIONS ON SCROLL
    // ============================================
    const fadeElements = document.querySelectorAll('.fade-in, .timeline-item, .hero-left > *, .hero-right');

    fadeElements.forEach((element, index) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    // Gunakan scroller proxy untuk smooth scroll
                    onRefresh: (self) => {
                        // Adjust for smooth scroll offset
                    }
                },
                delay: index * 0.05
            }
        );
    });

    // ============================================
    // PARALLAX EFFECT UNTUK CODE CONTAINER
    // ============================================
    const codeContainer = document.querySelector('.code-container');
    
    if (codeContainer) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.clientX) / 50;
            const yAxis = (window.innerHeight / 2 - e.clientY) / 50;
            
            gsap.to(codeContainer, {
                rotateX: yAxis * 0.3,
                rotateY: xAxis * 0.3,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Reset on mouse leave
        codeContainer.addEventListener('mouseleave', () => {
            gsap.to(codeContainer, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    }

    // ============================================
    // SCROLL PROGRESS INDICATOR (OPTIONAL)
    // ============================================
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #6366f1);
        z-index: 1001;
        border-radius: 0 2px 2px 0;
        transition: width 0.1s linear;
    `;
    document.body.appendChild(progressBar);

    // Update progress bar menggunakan GSAP ticker
    gsap.ticker.add(() => {
        const scrollTop = smoother.current;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    });

    // ============================================
    // INITIAL LOAD - PREVENT FLASH
    // ============================================
    document.body.style.visibility = 'visible';
    
    // Trigger initial scroll position
    smoother.target = 0;
    smoother.current = 0;
    window.scrollTo(0, 0);

});