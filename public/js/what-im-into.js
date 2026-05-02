document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // STAR DATA - Constellation Objects
    // ============================================
    const starData = [
        // GAMING - Currently Playing
        {
            id: 'ac-unity',
            name: "Assassin's Creed Unity",
            type: 'gaming',
            subType: 'playing',
            description: 'Parisian parkour and revolutionary intrigue in 18th century France.',
            icon: 'fa-user-secret',
            color: '#8B0000',
            stats: ['25h played', '65% complete', 'PC'],
            x: 800, y: 400
        },
        {
            id: 'valorant-playing',
            name: 'Valorant',
            type: 'gaming',
            subType: 'playing',
            description: 'Tactical FPS with precise gunplay and unique agent abilities. Competitive mode main.',
            icon: 'fa-crosshairs',
            color: '#FD4556',
            stats: ['300+h played', 'Platinum Rank', 'Raze/Jett main'],
            x: 1200, y: 300
        },
        {
            id: 'ac-valhalla',
            name: 'AC Valhalla',
            type: 'gaming',
            subType: 'playing',
            description: 'Viking adventure through Dark Ages England. Massive open world to explore.',
            icon: 'fa-helmet-battle',
            color: '#003366',
            stats: ['80h played', '45% complete', 'PC'],
            x: 500, y: 650
        },
        {
            id: 'skyrim-playing',
            name: 'Skyrim Anniversary',
            type: 'gaming',
            subType: 'playing',
            description: 'Endless adventures in Tamriel. Currently deep into modding with 50+ mods installed.',
            icon: 'fa-dragon',
            color: '#2F4F4F',
            stats: ['500+h played', '50+ mods', 'Battlemage build'],
            x: 1500, y: 550
        },

        // GAMING - All Time Favorites
        {
            id: 'ezio-trilogy',
            name: 'Ezio Trilogy',
            type: 'gaming',
            subType: 'favorite',
            description: 'Nothing is true, everything is permitted. The greatest Assassin\'s Creed story ever told.',
            icon: 'fa-feather',
            color: '#B8860B',
            stats: ['150+h played', 'AC Revelations', 'Would replay forever'],
            x: 300, y: 200
        },
        {
            id: 'valorant-fav',
            name: 'Valorant',
            type: 'gaming',
            subType: 'favorite',
            description: 'My go-to competitive shooter. Nothing beats the rush of a clutch round.',
            icon: 'fa-bullseye',
            color: '#FD4556',
            stats: ['400+h played', 'Raze/Jett main', 'Competitive focus'],
            x: 1700, y: 200
        },
        {
            id: 'skyrim-fav',
            name: 'Skyrim',
            type: 'gaming',
            subType: 'favorite',
            description: 'A game I can always return to. Every playthrough is a new adventure.',
            icon: 'fa-hat-wizard',
            color: '#2F4F4F',
            stats: ['600+h played', 'Battlemage style', 'Timeless classic'],
            x: 1000, y: 150
        },
        {
            id: 'ghost-tsushima',
            name: 'Ghost of Tsushima',
            type: 'gaming',
            subType: 'favorite',
            description: 'Visually stunning samurai masterpiece. The combat and visuals are unmatched.',
            icon: 'fa-wind',
            color: '#DC143C',
            stats: ['60h played', 'Best combat', 'Beautiful world'],
            x: 600, y: 800
        },

        // MUSIC - Playlists
        {
            id: 'baskara',
            name: 'baskara.',
            type: 'music',
            subType: 'playlist',
            description: 'Melancholic tunes for introspective moments. Perfect for late-night coding.',
            icon: 'fa-cloud-moon',
            color: '#1DB954',
            stats: ['Reflective mood', 'Spotify'],
            link: 'https://open.spotify.com/playlist/4v9HS6PjoLBgDrU5L6GexX',
            x: 200, y: 1000
        },
        {
            id: 'hurts-to-remember',
            name: 'hurts to remember',
            type: 'music',
            subType: 'playlist',
            description: 'Songs that hit different when you\'re reminiscing about the past.',
            icon: 'fa-heart-broken',
            color: '#1DB954',
            stats: ['Nostalgic mood', 'Spotify'],
            link: 'https://open.spotify.com/playlist/5ioXfjHb5peyoN3qJtAvZO',
            x: 800, y: 950
        },
        {
            id: 'wish-we-never-met',
            name: 'wish we never met',
            type: 'music',
            subType: 'playlist',
            description: 'Melodies for the what-ifs and could-have-beens. Sadboi hours guaranteed.',
            icon: 'fa-ghost',
            color: '#1DB954',
            stats: ['Regretful mood', 'Spotify'],
            link: 'https://open.spotify.com/playlist/0K5jIqQY4tp0S8zfX9QIGB',
            x: 1600, y: 800
        },
        {
            id: 'ttcd',
            name: 'trying, tired, crying, dying',
            type: 'music',
            subType: 'playlist',
            description: 'For those emotionally exhausting days when everything feels heavy.',
            icon: 'fa-tired',
            color: '#1DB954',
            stats: ['Exhausted mood', 'Spotify'],
            link: 'https://open.spotify.com/playlist/41cAYIu6YBwvXq9Uq2YQlD',
            x: 1300, y: 1000
        },

        // MUSIC - Now Playing
        {
            id: 'timeless',
            name: 'Timeless - The Weeknd',
            type: 'music',
            subType: 'now-playing',
            description: '"I\'ll be timeless, I swear I\'ll be timeless" - Perfect blend of melancholy and hope.',
            icon: 'fa-headphones',
            color: '#fbbf24',
            stats: ['Now Playing', 'The Weeknd', '🌟'],
            x: 1000, y: 500
        }
    ];

    // ============================================
    // CANVAS SETUP
    // ============================================
    const page = document.getElementById('intoPage');
    const canvas = document.getElementById('starMapCanvas');
    const ctx = canvas.getContext('2d');
    const minimapCanvas = document.getElementById('minimapCanvas');
    const minimapCtx = minimapCanvas.getContext('2d');
    const popup = document.getElementById('starPopup');
    const popupContent = document.getElementById('popupContent');

    // World size (virtual space)
    const worldWidth = 2000;
    const worldHeight = 1300;

    // Camera state
    let camera = {
        x: worldWidth / 2 - window.innerWidth / 2,
        y: worldHeight / 2 - window.innerHeight / 2,
        zoom: 1,
        targetX: worldWidth / 2 - window.innerWidth / 2,
        targetY: worldHeight / 2 - window.innerHeight / 2,
        targetZoom: 1
    };

    // Interaction state
    let isPanning = false;
    let panStart = { x: 0, y: 0 };
    let cameraStart = { x: 0, y: 0 };
    let hoveredStar = null;
    let selectedStar = null;
    let activeCategory = 'all';

    // ============================================
    // RESIZE HANDLER
    // ============================================
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        minimapCanvas.width = 180;
        minimapCanvas.height = 120;
    }

    resize();
    window.addEventListener('resize', resize);

    // ============================================
    // MAIN RENDER LOOP
    // ============================================
    function render(timestamp) {
        // Smooth camera
        camera.x += (camera.targetX - camera.x) * 0.1;
        camera.y += (camera.targetY - camera.y) * 0.1;
        camera.zoom += (camera.targetZoom - camera.zoom) * 0.1;

        // Clear with transparent - star-field is the background
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(
            -camera.x * camera.zoom + canvas.width / 2 * (1 - camera.zoom) + canvas.width / 2 * camera.zoom,
            -camera.y * camera.zoom + canvas.height / 2 * (1 - camera.zoom) + canvas.height / 2 * camera.zoom
        );
        ctx.scale(camera.zoom, camera.zoom);

        // Draw constellation lines
        drawConstellationLines();

        // Draw star nodes
        const filteredStars = activeCategory === 'all' 
            ? starData 
            : starData.filter(s => s.type === activeCategory);

        filteredStars.forEach(star => {
            drawStarNode(star, timestamp);
        });

        ctx.restore();

        // Draw minimap
        drawMinimap(filteredStars);

        requestAnimationFrame(render);
    }

    // ============================================
    // DRAW STAR NODE
    // ============================================
    function drawStarNode(star, timestamp) {
        const isHovered = hoveredStar === star;
        const isSelected = selectedStar === star;
        const scale = isHovered ? 1.3 : isSelected ? 1.2 : 1;

        // Outer glow
        const glowRadius = 40 * scale;
        const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowRadius);
        glowGradient.addColorStop(0, star.color + '40');
        glowGradient.addColorStop(0.5, star.color + '10');
        glowGradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Pulsing ring
        if (isHovered || isSelected) {
            const pulse = Math.sin(timestamp * 0.005) * 0.3 + 0.7;
            ctx.beginPath();
            ctx.arc(star.x, star.y, 35 * scale * pulse, 0, Math.PI * 2);
            ctx.strokeStyle = star.color + '60';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        // Orbiting particles
        const particleCount = star.subType === 'favorite' ? 3 : star.subType === 'now-playing' ? 4 : 2;
        for (let i = 0; i < particleCount; i++) {
            const angle = (timestamp * 0.002 + (i * Math.PI * 2 / particleCount)) % (Math.PI * 2);
            const orbitRadius = 25 * scale;
            const px = star.x + Math.cos(angle) * orbitRadius;
            const py = star.y + Math.sin(angle) * orbitRadius;
            
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, Math.PI * 2);
            ctx.fillStyle = star.color + '30';
            ctx.fill();
        }

        // Star core
        const coreRadius = star.subType === 'favorite' ? 16 : star.subType === 'now-playing' ? 18 : 12;
        
        // Core gradient
        const coreGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, coreRadius * scale);
        coreGradient.addColorStop(0, '#ffffff');
        coreGradient.addColorStop(0.3, star.color);
        coreGradient.addColorStop(0.7, star.color + '80');
        coreGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, coreRadius * scale, 0, Math.PI * 2);
        ctx.fillStyle = coreGradient;
        ctx.fill();

        // Icon
        ctx.fillStyle = '#fff';
        ctx.font = `${12 * scale}px "Font Awesome 6 Free"`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const iconMap = {
            'fa-user-secret': '\uf21b',
            'fa-crosshairs': '\uf05b',
            'fa-helmet-battle': '\uf6bf',
            'fa-dragon': '\uf6d5',
            'fa-feather': '\uf52d',
            'fa-bullseye': '\uf140',
            'fa-hat-wizard': '\uf6e8',
            'fa-wind': '\uf72e',
            'fa-cloud-moon': '\uf6c3',
            'fa-heart-broken': '\uf7a9',
            'fa-ghost': '\uf6e2',
            'fa-tired': '\uf5c8',
            'fa-headphones': '\uf025'
        };
        ctx.fillText(iconMap[star.icon] || '\uf111', star.x, star.y);

        // Label
        if (isHovered || isSelected) {
            ctx.fillStyle = '#e2e8f0';
            ctx.font = `bold ${11 * scale}px "Exo 2", sans-serif`;
            ctx.fillText(star.name, star.x, star.y - 30 * scale);

            // Type indicator
            ctx.fillStyle = star.color;
            ctx.font = `${9 * scale}px "Exo 2", sans-serif`;
            const typeLabel = star.subType === 'favorite' ? '⭐ Favorite' : 
                              star.subType === 'playing' ? '🎮 Playing' :
                              star.subType === 'now-playing' ? '🎵 Now Playing' : '🎧 Playlist';
            ctx.fillText(typeLabel, star.x, star.y + 28 * scale);
        }
    }

    // ============================================
    // CONSTELLATION LINES
    // ============================================
    function drawConstellationLines() {
        const filteredStars = activeCategory === 'all' 
            ? starData 
            : starData.filter(s => s.type === activeCategory);

        for (let i = 0; i < filteredStars.length; i++) {
            for (let j = i + 1; j < filteredStars.length; j++) {
                const s1 = filteredStars[i];
                const s2 = filteredStars[j];
                const dx = s1.x - s2.x;
                const dy = s1.y - s2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 400) {
                    const opacity = (1 - dist / 400) * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(s1.x, s1.y);
                    ctx.lineTo(s2.x, s2.y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.setLineDash([4, 8]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        }
    }

    // ============================================
    // MINIMAP
    // ============================================
    function drawMinimap(filteredStars) {
        const mw = 180;
        const mh = 120;
        
        minimapCtx.clearRect(0, 0, mw, mh);
        minimapCtx.fillStyle = 'rgba(10, 10, 20, 0.8)';
        minimapCtx.fillRect(0, 0, mw, mh);

        filteredStars.forEach(star => {
            const mx = (star.x / worldWidth) * mw;
            const my = (star.y / worldHeight) * mh;
            
            minimapCtx.beginPath();
            minimapCtx.arc(mx, my, 1.5, 0, Math.PI * 2);
            minimapCtx.fillStyle = star.color;
            minimapCtx.fill();
        });

        const vx = (camera.x / worldWidth) * mw;
        const vy = (camera.y / worldHeight) * mh;
        const vw = (window.innerWidth / camera.zoom / worldWidth) * mw;
        const vh = (window.innerHeight / camera.zoom / worldHeight) * mh;

        const viewport = document.getElementById('minimapViewport');
        viewport.style.left = vx + 'px';
        viewport.style.top = vy + 'px';
        viewport.style.width = vw + 'px';
        viewport.style.height = vh + 'px';
    }

    // ============================================
    // SCREEN TO WORLD COORDINATES
    // ============================================
    function screenToWorld(screenX, screenY) {
        return {
            x: (screenX - canvas.width / 2) / camera.zoom + camera.x,
            y: (screenY - canvas.height / 2) / camera.zoom + camera.y
        };
    }

    // ============================================
    // FIND STAR AT POSITION
    // ============================================
    function findStarAt(worldX, worldY) {
        const filteredStars = activeCategory === 'all' 
            ? starData 
            : starData.filter(s => s.type === activeCategory);
        
        const threshold = 30 / camera.zoom;
        
        for (let i = filteredStars.length - 1; i >= 0; i--) {
            const star = filteredStars[i];
            const dx = star.x - worldX;
            const dy = star.y - worldY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < threshold) {
                return star;
            }
        }
        
        return null;
    }

    // ============================================
    // SHOW POPUP
    // ============================================
    function showPopup(star, screenX, screenY) {
        selectedStar = star;

        const statsHTML = star.stats.map(s => 
            `<span class="popup-stat">${s}</span>`
        ).join('');

        const linkHTML = star.link ? 
            `<a href="${star.link}" target="_blank" class="popup-link">
                <i class="fab fa-spotify"></i> Open in Spotify
            </a>` : '';

        popupContent.innerHTML = `
            <div class="popup-header">
                <div class="popup-icon" style="background: ${star.color}20; color: ${star.color};">
                    <i class="fas ${star.icon}"></i>
                </div>
                <div>
                    <div class="popup-name">${star.name}</div>
                    <div class="popup-type" style="color: ${star.color};">
                        ${star.subType.replace('-', ' ').toUpperCase()}
                    </div>
                </div>
            </div>
            <p class="popup-desc">${star.description}</p>
            <div class="popup-stats">${statsHTML}</div>
            ${linkHTML}
        `;

        popup.style.left = screenX + 'px';
        popup.style.top = screenY + 'px';
        popup.classList.add('active');
    }

    function hidePopup() {
        selectedStar = null;
        popup.classList.remove('active');
    }

    function updatePopupPosition(screenX, screenY) {
        if (selectedStar) {
            popup.style.left = screenX + 'px';
            popup.style.top = screenY + 'px';
        }
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================
    canvas.addEventListener('mousedown', (e) => {
        isPanning = true;
        panStart.x = e.clientX;
        panStart.y = e.clientY;
        cameraStart.x = camera.targetX;
        cameraStart.y = camera.targetY;
        page.classList.add('panning');
    });

    window.addEventListener('mousemove', (e) => {
        const world = screenToWorld(e.clientX, e.clientY);
        
        if (isPanning) {
            const dx = (e.clientX - panStart.x) / camera.zoom;
            const dy = (e.clientY - panStart.y) / camera.zoom;
            camera.targetX = cameraStart.x - dx;
            camera.targetY = cameraStart.y - dy;
            
            // Clamp
            camera.targetX = Math.max(0, Math.min(worldWidth - window.innerWidth / camera.zoom, camera.targetX));
            camera.targetY = Math.max(0, Math.min(worldHeight - window.innerHeight / camera.zoom, camera.targetY));
            
            hidePopup();
        } else {
            const star = findStarAt(world.x, world.y);
            
            if (star !== hoveredStar) {
                hoveredStar = star;
                canvas.style.cursor = star ? 'pointer' : 'grab';
            }
            
            if (selectedStar && !isPanning) {
                updatePopupPosition(e.clientX, e.clientY);
            }
        }
    });

    window.addEventListener('mouseup', () => {
        if (isPanning) {
            const dx = Math.abs(camera.targetX - cameraStart.x);
            const dy = Math.abs(camera.targetY - cameraStart.y);
            
            // If barely moved, treat as click
            if (dx < 5 && dy < 5 && hoveredStar) {
                const screenX = (hoveredStar.x - camera.x) * camera.zoom + canvas.width / 2;
                const screenY = (hoveredStar.y - camera.y) * camera.zoom + canvas.height / 2;
                showPopup(hoveredStar, screenX, screenY);
            }
        }
        
        isPanning = false;
        page.classList.remove('panning');
    });

    // DISABLE SCROLL WHEEL ZOOM - only buttons
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        // Do nothing - zoom only via buttons
    }, { passive: false });

    // Touch events
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isPanning = true;
            panStart.x = e.touches[0].clientX;
            panStart.y = e.touches[0].clientY;
            cameraStart.x = camera.targetX;
            cameraStart.y = camera.targetY;
        }
    });

    canvas.addEventListener('touchmove', (e) => {
        if (isPanning && e.touches.length === 1) {
            const dx = (e.touches[0].clientX - panStart.x) / camera.zoom;
            const dy = (e.touches[0].clientY - panStart.y) / camera.zoom;
            camera.targetX = cameraStart.x - dx;
            camera.targetY = cameraStart.y - dy;
        }
    });

    canvas.addEventListener('touchend', () => {
        isPanning = false;
    });

    // Zoom controls - BUTTONS ONLY
    document.getElementById('zoomIn').addEventListener('click', () => {
        camera.targetZoom = Math.min(3, camera.targetZoom * 1.3);
    });

    document.getElementById('zoomOut').addEventListener('click', () => {
        camera.targetZoom = Math.max(0.3, camera.targetZoom * 0.7);
    });

    document.getElementById('resetView').addEventListener('click', () => {
        camera.targetX = worldWidth / 2 - window.innerWidth / 2;
        camera.targetY = worldHeight / 2 - window.innerHeight / 2;
        camera.targetZoom = 1;
        hidePopup();
    });

    // Category legend
    document.querySelectorAll('.legend-item').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.legend-item').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            activeCategory = this.dataset.category;
            hidePopup();
        });
    });

    // Click outside to close popup
    canvas.addEventListener('click', (e) => {
        if (selectedStar && !isPanning) {
            const world = screenToWorld(e.clientX, e.clientY);
            const clickedStar = findStarAt(world.x, world.y);
            if (!clickedStar || clickedStar !== selectedStar) {
                hidePopup();
            }
        }
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
        switch(e.key) {
            case '+':
            case '=':
                e.preventDefault();
                camera.targetZoom = Math.min(3, camera.targetZoom * 1.2);
                break;
            case '-':
                e.preventDefault();
                camera.targetZoom = Math.max(0.3, camera.targetZoom * 0.8);
                break;
            case '0':
                e.preventDefault();
                camera.targetX = worldWidth / 2 - window.innerWidth / 2;
                camera.targetY = worldHeight / 2 - window.innerHeight / 2;
                camera.targetZoom = 1;
                hidePopup();
                break;
            case 'Escape':
                hidePopup();
                break;
        }
    });

    // ============================================
    // INITIALIZE
    // ============================================
    // Center camera on "now playing"
    const nowPlaying = starData.find(s => s.subType === 'now-playing');
    if (nowPlaying) {
        camera.targetX = nowPlaying.x - window.innerWidth / 2;
        camera.targetY = nowPlaying.y - window.innerHeight / 2;
        camera.x = camera.targetX;
        camera.y = camera.targetY;
    }

    requestAnimationFrame(render);
    console.log('🌌 Cosmic Memory Constellation initialized - Zoom only via buttons!');
});