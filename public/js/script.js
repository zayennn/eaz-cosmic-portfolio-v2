document.addEventListener('DOMContentLoaded', function () {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const smoother = {
        target: window,
        current: 0,
        target: 0,
        ease: 0.030,
        isScrolling: false,

        init: function () {
            this.current = window.pageYOffset;
            this.target = window.pageYOffset;

            this.raf();

            this.bindEvents();
        },

        raf: function () {
            smoother.current += (smoother.target - smoother.current) * smoother.ease;

            window.scrollTo(0, smoother.current);

            if (Math.abs(smoother.target - smoother.current) > 0.5) {
                smoother.isScrolling = true;
            } else {
                smoother.isScrolling = false;
                smoother.current = smoother.target;
            }

            requestAnimationFrame(smoother.raf);
        },

        bindEvents: function () {
            window.addEventListener('wheel', (e) => {
                e.preventDefault();

                const delta = e.deltaY;

                smoother.target += delta;

                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                smoother.target = Math.max(0, Math.min(smoother.target, maxScroll));
            }, { passive: false });

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

                const now = Date.now();
                const dt = now - lastTouchTime;
                if (dt > 0) {
                    touchVelocity = (lastTouchY - touchMoveY) / dt;
                }
                lastTouchY = touchMoveY;
                lastTouchTime = now;

                smoother.target += delta * 0.5;

                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                smoother.target = Math.max(0, Math.min(smoother.target, maxScroll));

                touchStartY = touchMoveY;
            }, { passive: true });

            window.addEventListener('touchend', () => {
                const momentum = touchVelocity * 100;
                smoother.target += momentum;

                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                smoother.target = Math.max(0, Math.min(smoother.target, maxScroll));

                touchVelocity = 0;
            });

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

            window.addEventListener('load', () => {
                smoother.target = 0;
                smoother.current = 0;
            });
        },

        scrollTo: function (targetY, duration = 1.5) {
            const startTarget = this.target;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = (currentTime - startTime) / 1000;
                const progress = Math.min(elapsed / duration, 1);

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

    smoother.init();

    const navbar = document.getElementById('navbar');

    ScrollTrigger.create({
        start: 50,
        end: 99999,
        onEnter: () => navbar.classList.add('scrolled'),
        onLeaveBack: () => navbar.classList.remove('scrolled')
    });

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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();

                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;

                smoother.scrollTo(targetPosition, 1.2);
            }
        });
    });

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
                    onRefresh: (self) => {
                    }
                },
                delay: index * 0.05
            }
        );
    });

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

        codeContainer.addEventListener('mouseleave', () => {
            gsap.to(codeContainer, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    }

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

    gsap.ticker.add(() => {
        const scrollTop = smoother.current;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    });

    document.body.style.visibility = 'visible';

    smoother.target = 0;
    smoother.current = 0;
    window.scrollTo(0, 0);

    function generateStars() {
        const container = document.getElementById('star-field');

        const pageHeight = document.documentElement.scrollHeight;

        container.style.height = pageHeight + 'px';

        const totalStars = 300;

        const sizeConfig = [
            { class: 'size-lg', speed: 0.1 },
            { class: 'size-md', speed: 0.25 },
            { class: 'size-sm', speed: 0.4 },
            { class: 'size-xs', speed: 0.6 }
        ];

        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            const star = document.createElement('div');

            const config = sizeConfig[Math.floor(Math.random() * sizeConfig.length)];

            star.classList.add('star', config.class);

            const top = Math.random() * pageHeight;
            const left = Math.random() * window.innerWidth;

            star.style.top = top + 'px';
            star.style.left = left + 'px';

            container.appendChild(star);

            stars.push({
                el: star,
                speed: config.speed,
                baseY: top
            });
        }

        return stars;
    }

    const stars = generateStars();

    function handleParallax() {
        const scrollY = window.scrollY;

        stars.forEach(star => {
            const offset = scrollY * star.speed;

            star.el.style.transform = `translateY(${offset}px)`;
        });

        requestAnimationFrame(handleParallax);
    }

    handleParallax();

    window.addEventListener('resize', () => {
        const container = document.getElementById('star-field');
        container.innerHTML = '';

        const newStars = generateStars();
        stars.length = 0;
        stars.push(...newStars);
    });

    function createShootingStar() {
        const container = document.getElementById('star-field');

        const star = document.createElement('div');
        star.classList.add('shooting-star');

        const pageHeight = document.documentElement.scrollHeight;
        const pageWidth = window.innerWidth;

        const startX = Math.random() * pageWidth;
        const startY = Math.random() * pageHeight * 0.7; // agak atas biar jatuh ke bawah

        star.style.left = startX + 'px';
        star.style.top = startY + 'px';

        // sudut random (diagonal realistic)
        const angle = Math.random() * 60 + 20; // 20° - 80°
        const rad = angle * (Math.PI / 180);

        // jarak gerak
        const distance = Math.random() * 400 + 300;

        const moveX = Math.cos(rad) * distance;
        const moveY = Math.sin(rad) * distance;

        // rotate biar arah sama
        star.style.transform = `rotate(${angle}deg)`;

        // animasi
        const duration = (Math.random() * 0.8 + 0.6).toFixed(2);

        star.animate(
            [
                {
                    transform: `translate(0,0) rotate(${angle}deg) scale(0.7)`,
                    opacity: 0
                },
                {
                    opacity: 1
                },
                {
                    transform: `translate(${moveX}px, ${moveY}px) rotate(${angle}deg) scale(1.2)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        container.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }

    function shootingStarLoop() {
        const delay = Math.random() * 1000 + 1000;

        setTimeout(() => {
            createShootingStar();
            shootingStarLoop();
        }, delay);
    }

    shootingStarLoop();
});