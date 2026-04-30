document.addEventListener('DOMContentLoaded', function () {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const smoother = {
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

            requestAnimationFrame(() => smoother.raf());
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
                const touchMoveY = e.touches[0].clientY;
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

    // navbar
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

    // typing
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
                    toggleActions: "play none none none"
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

    let stars = [];
    let activeBlackholes = [];
    function generateStars() {
        const container = document.getElementById('star-field');
        if (!container) return [];

        const pageHeight = document.documentElement.scrollHeight;
        container.style.height = pageHeight + 'px';

        const totalStars = 300;
        const sizeConfig = [
            { class: 'size-lg', speed: 0.1, mass: 4 },
            { class: 'size-md', speed: 0.25, mass: 2 },
            { class: 'size-sm', speed: 0.4, mass: 1 },
            { class: 'size-xs', speed: 0.6, mass: 0.5 }
        ];

        const newStars = [];

        for (let i = 0; i < totalStars; i++) {
            const star = document.createElement('div');
            const config = sizeConfig[Math.floor(Math.random() * sizeConfig.length)];

            star.classList.add('star', config.class);

            const top = Math.random() * pageHeight;
            const left = Math.random() * window.innerWidth;

            star.style.top = top + 'px';
            star.style.left = left + 'px';

            const twinkleDuration = 2 + Math.random() * 4;
            const twinkleDelay = Math.random() * 5;
            star.style.animation = `twinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite`;
            star.style.opacity = 0.3 + Math.random() * 0.7;

            container.appendChild(star);

            newStars.push({
                el: star,
                speed: config.speed,
                mass: config.mass,
                baseY: top,
                baseX: left,
                originalTop: top,
                originalLeft: left,
                isSucked: false,
                suckProgress: 0,
                suckStartTime: 0,
                orbitAngle: Math.random() * Math.PI * 2,
                orbitSpeed: 0,
                orbitRadius: 0,
                trailParticles: []
            });
        }

        return newStars;
    }

    stars = generateStars();

    function updateSingularityEffect(timestamp) {
        if (activeBlackholes.length === 0) {
            stars.forEach(star => {
                if (star.isSucked) {
                    resetStar(star);
                }
            });
            return;
        }

        stars.forEach(star => {
            if (!star.el.isConnected) return;

            let totalForceX = 0;
            let totalForceY = 0;
            let isAffectedByAny = false;
            let closestDistance = Infinity;
            let strongestForce = 0;

            activeBlackholes.forEach(bh => {
                if (!bh.el || !bh.el.isConnected) return;

                const bhRect = bh.el.getBoundingClientRect();
                const bhCenterX = bhRect.left + bhRect.width / 2;
                const bhCenterY = bhRect.top + bhRect.height / 2;

                const starRect = star.el.getBoundingClientRect();
                const starCenterX = starRect.left + starRect.width / 2;
                const starCenterY = starRect.top + starRect.height / 2;

                const dx = bhCenterX - starCenterX;
                const dy = bhCenterY - starCenterY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < bh.gravityRadius) {
                    isAffectedByAny = true;
                    
                    const G = 10000;
                    const forceMagnitude = (G * star.mass) / (distance * distance);
                    
                    const dirX = dx / distance;
                    const dirY = dy / distance;
                    
                    totalForceX += dirX * forceMagnitude;
                    totalForceY += dirY * forceMagnitude;
                    
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        strongestForce = forceMagnitude;
                    }

                    if (distance < bh.eventHorizonRadius) {
                        if (!star.isSucked) {
                            star.isSucked = true;
                            star.suckStartTime = timestamp;
                            star.suckProgress = 0;
                            star.orbitAngle = Math.atan2(dy, dx);
                            star.orbitRadius = distance;
                            star.orbitSpeed = (2 + star.mass) * 0.5;
                        }
                    }
                }
            });

            if (isAffectedByAny) {
                const currentTransform = star.el.style.transform || '';
                const translateMatch = currentTransform.match(/translate\(([^)]+)\)/);
                
                let currentX = 0;
                let currentY = 0;
                
                if (translateMatch) {
                    const parts = translateMatch[1].split(',').map(s => parseFloat(s.trim()));
                    currentX = parts[0] || 0;
                    currentY = parts[1] || 0;
                }

                const damping = 0.1 / star.mass;
                const newX = currentX + totalForceX * damping;
                const newY = currentY + totalForceY * damping;

                star.el.style.transform = `translate(${newX}px, ${newY}px)`;

                const intensity = Math.min(strongestForce / 50, 1);
                if (intensity > 0.3) {
                    const r = 255;
                    const g = Math.floor(255 - (200 * intensity));
                    const b = Math.floor(255 - (255 * intensity));
                    star.el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                    star.el.style.boxShadow = `0 0 ${4 + intensity * 10}px ${1 + intensity * 2}px rgba(255, ${Math.floor(100 - intensity * 100)}, 0, ${0.5 + intensity * 0.5})`;
                }
            }

            if (star.isSucked && star.suckStartTime > 0) {
                const elapsed = (timestamp - star.suckStartTime) / 1000;
                star.suckProgress = Math.min(elapsed / 2, 1);

                star.orbitAngle += (star.orbitSpeed * (1 + star.suckProgress)) * 0.05;
                star.orbitRadius *= (1 - star.suckProgress * 0.1);
                
                const spiralX = Math.cos(star.orbitAngle) * star.orbitRadius;
                const spiralY = Math.sin(star.orbitAngle) * star.orbitRadius;

                const scale = 1 - star.suckProgress;
                const stretchX = 1 + star.suckProgress * 0.5;
                const stretchY = 1 - star.suckProgress * 0.7;

                star.el.style.transform = `translate(${spiralX}px, ${spiralY}px) scale(${stretchX}, ${stretchY})`;
                star.el.style.opacity = Math.max(0, 1 - star.suckProgress);
                
                if (star.suckProgress > 0.5) {
                    star.el.style.backgroundColor = `rgb(255, ${Math.floor(200 - star.suckProgress * 200)}, 0)`;
                    star.el.style.boxShadow = `0 0 ${star.suckProgress * 15}px ${star.suckProgress * 3}px rgba(255, 100, 0, 0.8)`;
                }

                if (star.mass > 1 && star.suckProgress > 0.3 && Math.random() < 0.3) {
                    createSuckTrail(star);
                }

                if (star.suckProgress >= 1) {
                    if (star.el.isConnected) {
                        createConsumptionFlash(star);
                        star.el.remove();
                    }
                    
                    const index = stars.indexOf(star);
                    if (index > -1) {
                        stars.splice(index, 1);
                    }
                }
            }
        });
    }

    function resetStar(star) {
        star.isSucked = false;
        star.suckProgress = 0;
        star.suckStartTime = 0;
        star.orbitRadius = 0;
        star.orbitSpeed = 0;
        star.el.style.transform = '';
        star.el.style.opacity = 0.3 + Math.random() * 0.7;
        star.el.style.backgroundColor = '';
        star.el.style.boxShadow = '';
        
        star.trailParticles.forEach(p => {
            if (p.isConnected) p.remove();
        });
        star.trailParticles = [];
    }

    function createSuckTrail(star) {
        const container = document.getElementById('star-field');
        if (!container) return;

        const trail = document.createElement('div');
        trail.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, ${100 + Math.random() * 100}, 0, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            box-shadow: 0 0 6px 2px rgba(255, 100, 0, 0.6);
        `;

        const starRect = star.el.getBoundingClientRect();
        trail.style.left = starRect.left + starRect.width / 2 + 'px';
        trail.style.top = starRect.top + starRect.height / 2 + 'px';

        container.appendChild(trail);

        trail.animate([
            { opacity: 0.8, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0) translate(-20px, -20px)' }
        ], {
            duration: 500 + Math.random() * 500,
            easing: 'ease-out',
            fill: 'forwards'
        }).onfinish = () => {
            if (trail.isConnected) trail.remove();
        };

        star.trailParticles.push(trail);
        
        if (star.trailParticles.length > 10) {
            const oldTrail = star.trailParticles.shift();
            if (oldTrail.isConnected) oldTrail.remove();
        }
    }

    function createConsumptionFlash(star) {
        const container = document.getElementById('star-field');
        if (!container) return;

        const flash = document.createElement('div');
        const starRect = star.el.getBoundingClientRect();
        
        flash.style.cssText = `
            position: absolute;
            width: ${10 + star.mass * 5}px;
            height: ${10 + star.mass * 5}px;
            left: ${starRect.left + starRect.width / 2}px;
            top: ${starRect.top + starRect.height / 2}px;
            background: radial-gradient(circle, rgba(255, 200, 100, 1) 0%, rgba(255, 100, 0, 0.6) 40%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 4;
            animation: consumption-flash 0.5s ease-out forwards;
        `;

        container.appendChild(flash);

        setTimeout(() => {
            if (flash.isConnected) flash.remove();
        }, 500);
    }

    function animationLoop(timestamp) {
        const scrollY = window.pageYOffset;

        stars.forEach(star => {
            if (!star.el.isConnected || star.isSucked) return;
            
            const hasBlackholeEffect = activeBlackholes.some(bh => {
                if (!bh.el || !bh.el.isConnected) return false;
                const bhRect = bh.el.getBoundingClientRect();
                const starRect = star.el.getBoundingClientRect();
                const dx = bhRect.left + bhRect.width / 2 - starRect.left - starRect.width / 2;
                const dy = bhRect.top + bhRect.height / 2 - starRect.top - starRect.height / 2;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < bh.gravityRadius;
            });

            if (!hasBlackholeEffect) {
                const offset = scrollY * star.speed;
                star.el.style.transform = `translateY(${offset}px)`;
            }
        });

        updateSingularityEffect(timestamp);

        activeBlackholes = activeBlackholes.filter(bh => bh.el && bh.el.isConnected);

        requestAnimationFrame(animationLoop);
    }

    requestAnimationFrame(animationLoop);

    window.addEventListener('resize', () => {
        const container = document.getElementById('star-field');
        if (!container) return;
        
        container.innerHTML = '';
        activeBlackholes = [];
        stars = generateStars();
    });

    // shooting stars
    function createShootingStar() {
        const container = document.getElementById('star-field');
        if (!container) return;

        const star = document.createElement('div');
        star.classList.add('shooting-star');

        const pageHeight = document.documentElement.scrollHeight;
        const pageWidth = window.innerWidth;

        const startX = Math.random() * pageWidth;
        const startY = Math.random() * pageHeight * 0.7;

        star.style.left = startX + 'px';
        star.style.top = startY + 'px';

        const angle = Math.random() * 60 + 20;
        const rad = angle * (Math.PI / 180);
        const distance = Math.random() * 400 + 300;

        const moveX = Math.cos(rad) * distance;
        const moveY = Math.sin(rad) * distance;

        star.style.transform = `rotate(${angle}deg)`;

        const duration = (Math.random() * 0.8 + 0.6);

        star.animate(
            [
                {
                    transform: `translate(0,0) rotate(${angle}deg) scale(0.7)`,
                    opacity: 0
                },
                {
                    opacity: 1,
                    offset: 0.1
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
            if (star.isConnected) star.remove();
        }, duration * 1000);
    }

    function shootingStarLoop() {
        const delay = Math.random() * 2000 + 1000;
        setTimeout(() => {
            createShootingStar();
            shootingStarLoop();
        }, delay);
    }

    shootingStarLoop();

    function initBlackholeSystem() {
        const container = document.getElementById('star-field');
        if (!container) {
            console.log('Star field container not found');
            return;
        }

        console.log('Initializing blackhole system with singularity...');

        const blackholeConfigs = {
            small: {
                size: 0.6,
                duration: 6000,
                hasJet: false,
                particleCount: 2,
                distortionWaves: 1,
                gravityRadius: 200,
                eventHorizonRadius: 40,
                mass: 1000
            },
            medium: {
                size: 1,
                duration: 8000,
                hasJet: true,
                particleCount: 4,
                distortionWaves: 2,
                gravityRadius: 300,
                eventHorizonRadius: 50,
                mass: 2000
            },
            large: {
                size: 1.5,
                duration: 10000,
                hasJet: true,
                particleCount: 6,
                distortionWaves: 3,
                gravityRadius: 450,
                eventHorizonRadius: 70,
                mass: 4000
            }
        };

        // function createBlackhole() {
        //     const margin = 200;
        //     const x = margin + Math.random() * (window.innerWidth - margin * 2);
        //     const y = margin + Math.random() * (window.innerHeight - margin * 2);

        //     let configType;
        //     const sizeRandom = Math.random();
        //     if (sizeRandom < 0.7) configType = 'small';
        //     else if (sizeRandom < 0.9) configType = 'medium';
        //     else configType = 'large';

        //     const config = blackholeConfigs[configType];

        //     console.log(`Creating ${configType} blackhole at (${x.toFixed(0)}, ${y.toFixed(0)}) with gravity radius: ${config.gravityRadius}px`);

        //     const blackhole = document.createElement('div');
        //     blackhole.classList.add('blackhole');
        //     blackhole.style.left = `${x}px`;
        //     blackhole.style.top = `${y}px`;

        //     const lensing = document.createElement('div');
        //     lensing.classList.add('lensing');
        //     blackhole.appendChild(lensing);

        //     for (let i = 0; i < config.distortionWaves; i++) {
        //         const wave = document.createElement('div');
        //         wave.classList.add('distortion-wave');
        //         wave.style.animationDelay = `${i * 1}s`;
        //         wave.style.animationDuration = `${2 + i * 0.5}s`;
        //         blackhole.appendChild(wave);
        //     }

        //     const outerDisk = document.createElement('div');
        //     outerDisk.classList.add('accretion-disk', 'outer');
        //     blackhole.appendChild(outerDisk);

        //     const innerDisk = document.createElement('div');
        //     innerDisk.classList.add('accretion-disk', 'inner');
        //     blackhole.appendChild(innerDisk);

        //     const corona = document.createElement('div');
        //     corona.classList.add('corona');
        //     blackhole.appendChild(corona);

        //     const photonRing = document.createElement('div');
        //     photonRing.classList.add('photon-ring');
        //     blackhole.appendChild(photonRing);

        //     if (config.hasJet) {
        //         const jetTop = document.createElement('div');
        //         jetTop.classList.add('jet', 'top');
        //         blackhole.appendChild(jetTop);

        //         const jetBottom = document.createElement('div');
        //         jetBottom.classList.add('jet', 'bottom');
        //         blackhole.appendChild(jetBottom);
        //     }

        //     const eventHorizon = document.createElement('div');
        //     eventHorizon.classList.add('event-horizon');
        //     blackhole.appendChild(eventHorizon);

        //     for (let i = 0; i < config.particleCount; i++) {
        //         const particle = document.createElement('div');
        //         particle.classList.add('orbiting-particle');
        //         particle.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
        //         particle.style.animationDelay = `${Math.random()}s`;
        //         blackhole.appendChild(particle);
        //     }

        //     const hawkingFlash = document.createElement('div');
        //     hawkingFlash.style.cssText = `
        //         position: absolute;
        //         width: 30px;
        //         height: 30px;
        //         top: -15px;
        //         left: -15px;
        //         border-radius: 50%;
        //         background: rgba(255, 200, 100, 0.3);
        //         filter: blur(5px);
        //         animation: hawking-flash 0.5s ease-in-out infinite;
        //         animation-delay: ${Math.random()}s;
        //     `;
        //     blackhole.appendChild(hawkingFlash);

        //     blackhole.style.transform = `scale(0)`;
        //     blackhole.style.opacity = '0';
            
        //     container.appendChild(blackhole);

        //     const bhData = {
        //         el: blackhole,
        //         config: config,
        //         gravityRadius: config.gravityRadius * config.size,
        //         eventHorizonRadius: config.eventHorizonRadius * config.size,
        //         mass: config.mass * config.size
        //     };

        //     activeBlackholes.push(bhData);

        //     requestAnimationFrame(() => {
        //         blackhole.style.transition = 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        //         blackhole.style.transform = `scale(${config.size})`;
        //         blackhole.style.opacity = '1';
        //     });

        //     setTimeout(() => {
        //         const index = activeBlackholes.indexOf(bhData);
        //         if (index > -1) {
        //             activeBlackholes.splice(index, 1);
        //         }

        //         blackhole.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        //         blackhole.style.transform = 'scale(0)';
        //         blackhole.style.opacity = '0';
                
        //         setTimeout(() => {
        //             if (blackhole.isConnected) blackhole.remove();
        //         }, 1500);
        //     }, config.duration);

        //     return bhData;
        // }

        let isSpawning = true;
        let spawnTimeout;

        function scheduleNextBlackhole() {
            if (!isSpawning) return;

            const delay = 8000 + Math.random() * 15000;
            console.log(`Next blackhole in ${(delay/1000).toFixed(1)}s`);

            spawnTimeout = setTimeout(() => {
                createBlackhole();
                scheduleNextBlackhole();
            }, delay);
        }

        scheduleNextBlackhole();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                isSpawning = false;
                clearTimeout(spawnTimeout);
            } else {
                isSpawning = true;
                scheduleNextBlackhole();
            }
        });

        return {
            createBlackhole,
            stop: () => {
                isSpawning = false;
                clearTimeout(spawnTimeout);
            }
        };
    }

    setTimeout(() => {
        const blackholeSystem = initBlackholeSystem();
        window.blackholeSystem = blackholeSystem;
        console.log('Blackhole system with singularity initialized');
    }, 2000);
});