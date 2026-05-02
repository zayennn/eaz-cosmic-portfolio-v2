document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // DATA
    // ============================================
    const cardsData = [
        // Games
        { type: 'game', title: 'AC Unity', desc: 'Parisian parkour', image: 'ACUnity.png', badge: 'Story', badgeColor: '#8B0000', stats: ['25h', '65%'], x: 5, y: 10, z: 0 },
        { type: 'game', title: 'Valorant', desc: 'Tactical FPS', image: 'valorant.png', badge: 'Competitive', badgeColor: '#FD4556', stats: ['300+h', 'Platinum'], x: 25, y: 5, z: 20 },
        { type: 'game', title: 'AC Valhalla', desc: 'Viking adventure', image: 'ACValhalla.png', badge: 'Open World', badgeColor: '#003366', stats: ['80h', '45%'], x: 45, y: 15, z: -10 },
        { type: 'game', title: 'Skyrim AE', desc: 'Modding paradise', image: 'The Elder Scrolls V Skyrim.png', badge: 'Modding', badgeColor: '#2F4F4F', stats: ['500+h', '50+ mods'], x: 65, y: 8, z: 15 },
        
        // Favorites
        { type: 'favorite', title: 'Ezio Trilogy', desc: 'Nothing is true, everything is permitted', image: 'ezio-trilogy.png', badge: 'Action/Stealth', badgeColor: '#B8860B', stats: ['150+h', 'AC Revelations'], x: 10, y: 55, z: -20, stars: 5 },
        { type: 'favorite', title: 'Valorant', desc: 'My go-to competitive shooter', image: 'valorant.png', badge: 'Tactical FPS', badgeColor: '#FD4556', stats: ['400+h', 'Raze/Jett'], x: 35, y: 50, z: 30, stars: 5 },
        { type: 'favorite', title: 'Skyrim', desc: 'A game I can always return to', image: 'The Elder Scrolls V Skyrim.png', badge: 'RPG/Open World', badgeColor: '#2F4F4F', stats: ['600+h', 'Battlemage'], x: 60, y: 55, z: -25, stars: 5 },
        { type: 'favorite', title: 'Ghost of Tsushima', desc: 'Samurai masterpiece', image: 'Ghost Of Tsushima.png', badge: 'Action/Adventure', badgeColor: '#DC143C', stats: ['60h', 'Combat & Visuals'], x: 80, y: 52, z: 10, stars: 5 },
        
        // Playlists
        { type: 'playlist', title: 'baskara.', desc: 'Melancholic tunes', image: 'baskara.png', badge: 'Reflective', badgeColor: '#1DB954', link: 'https://open.spotify.com/playlist/4v9HS6PjoLBgDrU5L6GexX', x: 20, y: 80, z: 5 },
        { type: 'playlist', title: 'hurts to remember', desc: 'Songs for reminiscing', image: 'hurts to remember.png', badge: 'Nostalgic', badgeColor: '#FF6B6B', link: 'https://open.spotify.com/playlist/5ioXfjHb5peyoN3qJtAvZO', x: 45, y: 78, z: -15 },
        { type: 'playlist', title: 'wish we never met', desc: 'What-ifs and could-have-beens', image: 'wish we never met.png', badge: 'Regretful', badgeColor: '#4ECDC4', link: 'https://open.spotify.com/playlist/0K5jIqQY4tp0S8zfX9QIGB', x: 70, y: 82, z: 20 },
        { type: 'playlist', title: 'trying, tired...', desc: 'Emotionally exhausting days', image: 'trying, tired, crying, dying.png', badge: 'Exhausted', badgeColor: '#6C5CE7', link: 'https://open.spotify.com/playlist/41cAYIu6YBwvXq9Uq2YQlD', x: 90, y: 75, z: -5 },
    ];

    // ============================================
    // CREATE CARDS
    // ============================================
    const stage = document.querySelector('.holo-stage');
    
    cardsData.forEach((data, index) => {
        const card = document.createElement('div');
        card.classList.add('holo-card');
        card.style.left = data.x + '%';
        card.style.top = data.y + '%';
        card.style.transform = `translateZ(${data.z}px)`;
        card.style.zIndex = Math.floor(data.y);
        card.dataset.index = index;
        
        let statsHTML = data.stats.map(s => `<span class="holo-stat">${s}</span>`).join('');
        
        let bottomHTML = '';
        if (data.stars) {
            const starsHTML = Array.from({length: data.stars}, () => '<i class="fas fa-star"></i>').join('');
            bottomHTML = `<div class="holo-stars">${starsHTML}</div>`;
        }
        if (data.link) {
            bottomHTML += `<a href="${data.link}" target="_blank" class="playlist-link"><i class="fab fa-spotify"></i> Spotify</a>`;
        }
        
        card.innerHTML = `
            <div class="holo-card-corner tl"></div>
            <div class="holo-card-corner tr"></div>
            <div class="holo-card-corner bl"></div>
            <div class="holo-card-corner br"></div>
            <div class="holo-card-image">
                <img src="/images/${data.type === 'playlist' ? 'playlist/' : 'games/'}${data.image}" alt="${data.title}">
                <span class="holo-card-badge" style="background: ${data.badgeColor};">${data.badge}</span>
            </div>
            <div class="holo-card-content">
                <h3 class="holo-card-title">${data.title}</h3>
                <p class="holo-card-desc">${data.desc}</p>
                <div class="holo-card-stats">${statsHTML}</div>
                ${bottomHTML}
            </div>
        `;
        
        card.addEventListener('click', () => openModal(data));
        
        stage.appendChild(card);
    });

    // ============================================
    // 3D DRAG TO ROTATE
    // ============================================
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let rotateX = -20;
    let rotateY = 0;
    
    stage.addEventListener('mousedown', (e) => {
        if (e.target.closest('.holo-card')) return; // Don't drag when clicking card
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        stage.classList.add('dragging');
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = (e.clientX - startX) * 0.2;
        const deltaY = (e.clientY - startY) * 0.2;
        
        rotateY += deltaX;
        rotateX -= deltaY;
        
        rotateX = Math.max(-40, Math.min(10, rotateX));
        
        stage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        startX = e.clientX;
        startY = e.clientY;
    });
    
    window.addEventListener('mouseup', () => {
        isDragging = false;
        stage.classList.remove('dragging');
    });
    
    // Touch support
    stage.addEventListener('touchstart', (e) => {
        if (e.target.closest('.holo-card')) return;
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const deltaX = (e.touches[0].clientX - startX) * 0.2;
        const deltaY = (e.touches[0].clientY - startY) * 0.2;
        rotateY += deltaX;
        rotateX -= deltaY;
        rotateX = Math.max(-40, Math.min(10, rotateX));
        stage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Initial rotation
    stage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    stage.style.transition = 'transform 0.5s ease';

    // ============================================
    // CARD FLOAT ANIMATION
    // ============================================
    document.querySelectorAll('.holo-card').forEach((card, i) => {
        gsap.to(card, {
            y: '-=8',
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: i * 0.2
        });
    });

    // ============================================
    // MODAL
    // ============================================
    function openModal(data) {
        const overlay = document.createElement('div');
        overlay.classList.add('card-modal-overlay');
        
        let starsHTML = '';
        if (data.stars) {
            starsHTML = Array.from({length: data.stars}, () => '<i class="fas fa-star"></i>').join('');
        }
        
        overlay.innerHTML = `
            <div class="card-modal">
                <div class="modal-image" style="position: relative;">
                    <img src="/images/${data.type === 'playlist' ? 'playlist/' : 'games/'}${data.image}" alt="${data.title}">
                    <button class="modal-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-content">
                    <span class="holo-card-badge" style="background: ${data.badgeColor}; display: inline-block; margin-bottom: 0.5rem;">${data.badge}</span>
                    <h3 class="modal-title">${data.title}</h3>
                    <p class="modal-desc">${data.desc}</p>
                    <div class="modal-details">
                        ${data.stats.map(s => `<span class="modal-detail">${s}</span>`).join('')}
                    </div>
                    ${starsHTML ? `<div class="holo-stars">${starsHTML}</div>` : ''}
                    ${data.link ? `<a href="${data.link}" target="_blank" class="playlist-link" style="margin-top: 0.8rem; display: inline-flex;"><i class="fab fa-spotify"></i> Open in Spotify</a>` : ''}
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.classList.contains('modal-close')) {
                overlay.classList.remove('active');
                setTimeout(() => overlay.remove(), 300);
            }
        });
    }

    // ============================================
    // CREATE PROJECTION DOTS
    // ============================================
    const dotsContainer = document.querySelector('.projection-dots');
    for (let i = 0; i < 30; i++) {
        const dot = document.createElement('div');
        dot.classList.add('projection-dot');
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDelay = Math.random() * 4 + 's';
        dot.style.animationDuration = 3 + Math.random() * 4 + 's';
        dotsContainer.appendChild(dot);
    }

    // ============================================
    // DATA STREAM
    // ============================================
    setInterval(() => {
        const stream = document.querySelector('.data-stream');
        const particle = document.createElement('span');
        particle.classList.add('stream-particle');
        particle.textContent = Math.random() > 0.5 ? '1' : '0';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = 3 + Math.random() * 3 + 's';
        stream.appendChild(particle);
        setTimeout(() => particle.remove(), 4000);
    }, 300);

    // ============================================
    // HEADER ANIMATION
    // ============================================
    gsap.from('.into-badge', { opacity: 0, y: -20, duration: 0.6, ease: 'power3.out' });
    gsap.from('.into-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    gsap.from('.into-subtitle', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.4 });
    
    gsap.from('.music-bar', { 
        opacity: 0, 
        y: 60, 
        duration: 0.8, 
        ease: 'power3.out', 
        delay: 1.5 
    });

    console.log('🌀 AR Hologram Dashboard initialized!');
});