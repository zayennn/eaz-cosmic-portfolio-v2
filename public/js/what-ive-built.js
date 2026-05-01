document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // PROJECTS DATA
    // ============================================
    const projectsData = [
        { id: 1, title: 'E-Commerce Platform', type: 'freelance', image: '/images/projects/ecommerce.jpg', desc: 'Full-stack e-commerce platform with payment gateway integration, admin dashboard, and inventory management.', tech: ['Laravel', 'MySQL', 'Bootstrap'], orbit: 'inner' },
        { id: 2, title: 'Portfolio Website', type: 'personal', image: '/images/projects/portfolio.jpg', desc: 'Personal portfolio with cosmic theme, smooth animations, and interactive 3D elements.', tech: ['React', 'Framer Motion', 'GSAP'], orbit: 'middle' },
        { id: 3, title: 'School Management System', type: 'freelance', image: '/images/projects/school.jpg', desc: 'Web-based school management system with student records, attendance tracking, and grade management.', tech: ['PHP', 'MySQL', 'JavaScript'], orbit: 'outer' },
        { id: 4, title: 'Weather Dashboard', type: 'personal', image: '/images/projects/weather.jpg', desc: 'Real-time weather dashboard with location search, forecasts, and interactive maps.', tech: ['React', 'API', 'CSS3'], orbit: 'inner' },
        { id: 5, title: 'Laravel Certification', type: 'certification', image: '/images/projects/cert-laravel.jpg', desc: 'Official Laravel certification demonstrating proficiency in building robust web applications.', tech: ['Laravel', 'PHP', 'Testing'], orbit: 'middle' },
        { id: 6, title: 'Restaurant POS System', type: 'freelance', image: '/images/projects/pos.jpg', desc: 'Point of sale system for restaurants with table management, orders, and kitchen display.', tech: ['Laravel', 'Vue.js', 'MySQL'], orbit: 'outer' },
        { id: 7, title: 'Task Manager App', type: 'personal', image: '/images/projects/task.jpg', desc: 'Kanban-style task manager with drag-and-drop, teams, and real-time collaboration.', tech: ['React', 'Node.js', 'Socket.io'], orbit: 'inner' },
        { id: 8, title: 'JavaScript Certification', type: 'certification', image: '/images/projects/cert-js.jpg', desc: 'Advanced JavaScript certification covering ES6+, async patterns, and modern development.', tech: ['JavaScript', 'ES6+', 'DOM'], orbit: 'middle' },
        { id: 9, title: 'Blog CMS', type: 'personal', image: '/images/projects/blog.jpg', desc: 'Custom blog CMS with markdown editor, categories, tags, and SEO optimization.', tech: ['Laravel', 'Alpine.js', 'Tailwind'], orbit: 'outer' },
        { id: 10, title: 'Company Profile Website', type: 'freelance', image: '/images/projects/company.jpg', desc: 'Professional company profile with service pages, team section, and contact form.', tech: ['HTML5', 'CSS3', 'JavaScript'], orbit: 'inner' },
        { id: 11, title: 'Python Certification', type: 'certification', image: '/images/projects/cert-python.jpg', desc: 'Python programming certification covering OOP, data structures, and algorithms.', tech: ['Python', 'OOP', 'Algorithms'], orbit: 'middle' },
        { id: 12, title: 'Inventory Management', type: 'freelance', image: '/images/projects/inventory.jpg', desc: 'Multi-warehouse inventory system with barcode scanning, stock alerts, and reporting.', tech: ['PHP', 'MySQL', 'jQuery'], orbit: 'outer' }
    ];

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const orreryContainer = document.getElementById('orreryContainer');
    const planetsContainer = document.getElementById('planetsContainer');
    const hologramPanel = document.getElementById('hologramPanel');
    const closeHologram = document.getElementById('closeHologram');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetViewBtn = document.getElementById('resetView');

    let activeFilter = 'all';
    let allPlanets = [];
    let isDragging = false;
    let startX, startY;
    let rotationX = 0, rotationY = 0;
    let currentZoom = 1;
    let targetZoom = 1;

    // ============================================
    // CREATE PLANETS
    // ============================================
    function createPlanets() {
        planetsContainer.innerHTML = '';
        allPlanets = [];

        projectsData.forEach((project, index) => {
            const planet = document.createElement('div');
            planet.classList.add('project-planet');
            planet.dataset.projectId = project.id;
            planet.dataset.type = project.type;
            planet.dataset.orbit = project.orbit;

            // Position based on orbit
            const orbitRadius = project.orbit === 'inner' ? 140 : 
                              project.orbit === 'middle' ? 220 : 300;
            const angle = (index / projectsData.length) * Math.PI * 2 + (Math.random() * 0.5);
            const x = 50 + (orbitRadius / 6) * Math.cos(angle);
            const y = 50 + (orbitRadius / 6) * Math.sin(angle);

            planet.style.left = x + '%';
            planet.style.top = y + '%';

            // Hanging string length
            const stringHeight = 40 + Math.random() * 60;
            
            planet.innerHTML = `
                <div class="planet-string" style="height: ${stringHeight}px; bottom: 85%;"></div>
                <div class="planet-body">
                    <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #1e293b, #0f172a)';">
                    <div class="planet-atmosphere"></div>
                </div>
                <div class="planet-ring"></div>
                <div class="planet-moons">
                    ${project.tech.map((t, i) => `
                        <div class="planet-moon" style="
                            animation-delay: -${i * 0.8}s;
                            animation-duration: ${2 + Math.random() * 2}s;
                            background: hsl(${200 + i * 40}, 70%, 55%);
                        "></div>
                    `).join('')}
                </div>
                <div class="planet-label">
                    ${project.title}
                    <span class="planet-type">${project.type}</span>
                </div>
            `;

            planet.addEventListener('click', (e) => {
                e.stopPropagation();
                showHologram(project);
            });

            planet.addEventListener('mouseenter', () => {
                createDustTrail(planet);
            });

            planetsContainer.appendChild(planet);
            allPlanets.push({ el: planet, project });
        });
    }

    // ============================================
    // FILTER WITH FALL/RISE ANIMATION
    // ============================================
    function filterProjects(filter) {
        const planetsToFall = [];
        const planetsToRise = [];

        allPlanets.forEach(({ el, project }) => {
            if (filter === 'all' || project.type === filter) {
                if (el.classList.contains('hidden')) {
                    planetsToRise.push(el);
                }
                el.classList.remove('hidden', 'falling');
            } else {
                if (!el.classList.contains('hidden') && !el.classList.contains('falling')) {
                    planetsToFall.push(el);
                }
            }
        });

        // Phase 1: Falling planets
        planetsToFall.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('falling');
                setTimeout(() => {
                    el.classList.add('hidden');
                    el.classList.remove('falling');
                }, 1200);
            }, i * 80);
        });

        // Phase 2: Rising planets
        setTimeout(() => {
            planetsToRise.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.remove('hidden');
                    el.classList.add('rising');
                    setTimeout(() => {
                        el.classList.remove('rising');
                    }, 1000);
                }, i * 100);
            });
        }, planetsToFall.length * 80 + 400);
    }

    // ============================================
    // DUST TRAIL ON HOVER
    // ============================================
    function createDustTrail(planet) {
        const trailContainer = document.getElementById('dustTrail');
        const rect = planet.getBoundingClientRect();
        const containerRect = orreryContainer.getBoundingClientRect();
        
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top + rect.height / 2 - containerRect.top;

        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.classList.add('dust-trail-particle');
            
            particle.style.cssText = `
                left: ${x}px;
                top: ${y}px;
                --dx: ${(Math.random() - 0.5) * 30}px;
                --dy: ${-20 - Math.random() * 30}px;
                animation-delay: ${Math.random() * 0.5}s;
                background: hsl(${240 + Math.random() * 60}, 80%, 70%);
                box-shadow: 0 0 4px rgba(99, 102, 241, 0.6);
            `;
            
            trailContainer.appendChild(particle);
            setTimeout(() => particle.remove(), 3000);
        }
    }

    // ============================================
    // HOLOGRAM PANEL
    // ============================================
    function showHologram(project) {
        document.getElementById('hologramImage').querySelector('img').src = project.image;
        document.getElementById('hologramTitle').textContent = project.title;
        document.getElementById('hologramDesc').textContent = project.desc;
        
        const typeEl = document.getElementById('hologramType');
        typeEl.textContent = project.type;
        typeEl.className = 'hologram-type ' + project.type;
        
        hologramPanel.classList.add('active');
    }

    closeHologram.addEventListener('click', () => {
        hologramPanel.classList.remove('active');
    });

    // ============================================
    // DRAG TO ROTATE
    // ============================================
    orreryContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        orreryContainer.classList.add('dragging');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        rotationY += dx * 0.3;
        rotationX -= dy * 0.2;
        
        updateTransform();
        
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        orreryContainer.classList.remove('dragging');
    });

    // Touch support
    orreryContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;
        
        rotationY += dx * 0.3;
        rotationX -= dy * 0.2;
        
        updateTransform();
        
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Scroll to zoom
    orreryContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        targetZoom += e.deltaY * -0.001;
        targetZoom = Math.max(0.5, Math.min(2, targetZoom));
    }, { passive: false });

    // Zoom buttons
    zoomInBtn.addEventListener('click', () => {
        targetZoom = Math.min(2, targetZoom + 0.2);
    });

    zoomOutBtn.addEventListener('click', () => {
        targetZoom = Math.max(0.5, targetZoom - 0.2);
    });

    resetViewBtn.addEventListener('click', () => {
        rotationX = 0;
        rotationY = 0;
        targetZoom = 1;
        updateTransform();
    });

    function updateTransform() {
        planetsContainer.style.transform = `
            rotateX(${rotationX}deg) 
            rotateY(${rotationY}deg)
            scale(${currentZoom})
        `;
    }

    // Smooth zoom animation
    function animateZoom() {
        currentZoom += (targetZoom - currentZoom) * 0.1;
        updateTransform();
        requestAnimationFrame(animateZoom);
    }

    // ============================================
    // FILTER TABS
    // ============================================
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            activeFilter = filter;
            filterProjects(filter);
            
            // Close hologram
            hologramPanel.classList.remove('active');
        });
    });

    // ============================================
    // KEYBOARD CONTROLS
    // ============================================
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowLeft': rotationY -= 10; break;
            case 'ArrowRight': rotationY += 10; break;
            case 'ArrowUp': rotationX -= 5; break;
            case 'ArrowDown': rotationX += 5; break;
            case '+': case '=': targetZoom = Math.min(2, targetZoom + 0.1); break;
            case '-': targetZoom = Math.max(0.5, targetZoom - 0.1); break;
            case '0': rotationX = 0; rotationY = 0; targetZoom = 1; break;
            case 'Escape': hologramPanel.classList.remove('active'); break;
        }
        updateTransform();
    });

    // ============================================
    // INITIALIZE
    // ============================================
    createPlanets();
    animateZoom();
    updateTransform();

    console.log('🪐 Cosmic Project Orrery initialized!');
});