document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // HEADER ANIMATION
    // ============================================
    const tl = gsap.timeline();
    
    tl.from('.into-badge', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.into-title', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.into-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.section-divider', {
        width: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.4');

    // ============================================
    // MUSIC CORE FLOAT ANIMATION
    // ============================================
    gsap.to('.core-card', {
        y: -10,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    });

    // Vinyl hover effect
    const vinylDisc = document.querySelector('.vinyl-disc');
    if (vinylDisc) {
        vinylDisc.addEventListener('mouseenter', () => {
            vinylDisc.style.animationDuration = '0.8s';
        });
        vinylDisc.addEventListener('mouseleave', () => {
            vinylDisc.style.animationDuration = '4s';
        });
    }

    // ============================================
    // GAME PLANETS SCROLL ANIMATION
    // ============================================
    gsap.from('.game-planet', {
        scrollTrigger: {
            trigger: '.games-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Orbit ring animation on hover
    document.querySelectorAll('.game-planet').forEach(planet => {
        planet.addEventListener('mouseenter', function() {
            const orbit = this.querySelector('.game-orbit');
            gsap.to(orbit, {
                opacity: 1,
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        
        planet.addEventListener('mouseleave', function() {
            const orbit = this.querySelector('.game-orbit');
            gsap.to(orbit, {
                opacity: 0,
                scale: 0.9,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

    // ============================================
    // FAVORITE CARDS SCROLL ANIMATION
    // ============================================
    gsap.from('.favorite-card', {
        scrollTrigger: {
            trigger: '.favorites-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 70,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // 3D tilt on favorite cards
    document.querySelectorAll('.favorite-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -8;
            const rotateY = (x - centerX) / centerX * 8;
            
            gsap.to(this, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.6,
                ease: 'power3.out'
            });
        });
    });

    // ============================================
    // PLAYLIST TAPES SCROLL ANIMATION
    // ============================================
    gsap.from('.playlist-tape', {
        scrollTrigger: {
            trigger: '.playlists-grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        rotation: -5,
        duration: 0.7,
        stagger: 0.12,
        ease: 'back.out(1.7)'
    });

    // Tape play button animation
    document.querySelectorAll('.playlist-tape').forEach(tape => {
        tape.addEventListener('mouseenter', function() {
            const playBtn = this.querySelector('.tape-play');
            gsap.to(playBtn, {
                scale: 1,
                duration: 0.3,
                ease: 'back.out(2)'
            });
        });
        
        tape.addEventListener('mouseleave', function() {
            const playBtn = this.querySelector('.tape-play');
            gsap.to(playBtn, {
                scale: 0,
                duration: 0.2,
                ease: 'power2.in'
            });
        });
    });

    // ============================================
    // PLAYER CONTROLS
    // ============================================
    const playBtn = document.querySelector('.player-btn.play');
    let isPlaying = true;
    
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                this.innerHTML = '<i class="fas fa-play"></i>';
                vinylDisc.style.animationPlayState = 'running';
            } else {
                this.innerHTML = '<i class="fas fa-pause"></i>';
                vinylDisc.style.animationPlayState = 'paused';
            }
            
            // Button pop animation
            gsap.fromTo(this, 
                { scale: 1 },
                { scale: 1.2, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.out' }
            );
        });
    }

    // ============================================
    // NEBULA PARALLAX
    // ============================================
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to('.nebula-cloud.nc1', {
            x: x * 0.5,
            y: y * 0.5,
            duration: 2,
            ease: 'power1.out'
        });
        
        gsap.to('.nebula-cloud.nc2', {
            x: -x * 0.3,
            y: -y * 0.3,
            duration: 2,
            ease: 'power1.out'
        });
        
        gsap.to('.nebula-cloud.nc3', {
            x: x * 0.2,
            y: -y * 0.4,
            duration: 2,
            ease: 'power1.out'
        });
    });

    console.log('✨ Cosmic Interests page initialized!');
});