document.addEventListener('DOMContentLoaded', function () {
    const projectsData = [
        { id: 1, title: 'E-Commerce Platform', type: 'freelance', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', desc: 'Full-stack e-commerce with payment gateway, admin dashboard, and inventory management.', tech: ['Laravel', 'MySQL', 'Bootstrap'] },
        { id: 2, title: 'Portfolio Website', type: 'personal', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', desc: 'Personal portfolio with cosmic theme, smooth animations, and interactive UI.', tech: ['React', 'Framer Motion', 'GSAP'] },
        { id: 3, title: 'School Management', type: 'freelance', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop', desc: 'School system with student records, attendance, and grade management.', tech: ['PHP', 'MySQL', 'JavaScript'] },
        { id: 4, title: 'Weather Dashboard', type: 'personal', image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop', desc: 'Real-time weather dashboard with location search and interactive maps.', tech: ['React', 'API', 'CSS3'] },
        { id: 5, title: 'Laravel Certification', type: 'certification', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop', desc: 'Official Laravel certification for robust web application development.', tech: ['Laravel', 'PHP', 'Testing'] },
        { id: 6, title: 'Restaurant POS', type: 'freelance', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', desc: 'POS system with table management, orders, and kitchen display.', tech: ['Laravel', 'Vue.js', 'MySQL'] },
        { id: 7, title: 'Task Manager App', type: 'personal', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop', desc: 'Kanban task manager with drag-and-drop and real-time collaboration.', tech: ['React', 'Node.js', 'Socket.io'] },
        { id: 8, title: 'JavaScript Cert', type: 'certification', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop', desc: 'Advanced JavaScript certification covering ES6+ and modern patterns.', tech: ['JavaScript', 'ES6+', 'DOM'] },
        { id: 9, title: 'Blog CMS', type: 'personal', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop', desc: 'Custom blog CMS with markdown editor and SEO optimization.', tech: ['Laravel', 'Alpine.js', 'Tailwind'] },
        { id: 10, title: 'Company Profile', type: 'freelance', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop', desc: 'Professional company profile with services and contact form.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
        { id: 11, title: 'Python Certification', type: 'certification', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop', desc: 'Python certification covering OOP, data structures, and algorithms.', tech: ['Python', 'OOP', 'Algorithms'] },
        { id: 12, title: 'Inventory System', type: 'freelance', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop', desc: 'Multi-warehouse inventory with barcode and stock alerts.', tech: ['PHP', 'MySQL', 'jQuery'] }
    ];

    const orreryContainer = document.getElementById('orreryContainer');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const detailOverlay = document.getElementById('detailOverlay');
    const closeDetail = document.getElementById('closeDetail');

    const zoomInOrrery = document.getElementById('zoomInOrrery');
    const zoomOutOrrery = document.getElementById('zoomOutOrrery');
    const resetOrrery = document.getElementById('resetOrrery');
    const zoomInPlanet = document.getElementById('zoomInPlanet');
    const zoomOutPlanet = document.getElementById('zoomOutPlanet');
    const resetPlanet = document.getElementById('resetPlanet');

    let activeFilter = 'all';
    let allPlanets = [];
    let orreryZoom = 1;
    let targetOrreryZoom = 1;
    let planetScale = 1;
    let targetPlanetScale = 1;

    function createOrrery() {
        const existingGroups = orreryContainer.querySelectorAll('.orbit-group');
        existingGroups.forEach(g => g.remove());
        allPlanets = [];

        const distributed = [[], [], [], []];
        projectsData.forEach((project, index) => {
            distributed[index % 4].push(project);
        });

        for (let i = 0; i < 4; i++) {
            const group = document.createElement('div');
            group.classList.add('orbit-group', 'og' + (i + 1));
            orreryContainer.appendChild(group);

            const positions = ['pos-0', 'pos-1', 'pos-2'];
            distributed[i].forEach((project, pIndex) => {
                const planet = createPlanetElement(project, positions[pIndex]);
                group.appendChild(planet);
                allPlanets.push({ el: planet, project });
            });
        }

        updateOrreryZoom();
        updatePlanetScale();
    }

    function createPlanetElement(project, posClass) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('planet-wrapper', posClass);

        const planet = document.createElement('div');
        planet.classList.add('project-planet');
        planet.dataset.projectId = project.id;
        planet.dataset.type = project.type;

        const typeColors = {
            freelance: { dot: '#3b82f6', glow: '#60a5fa' },
            personal: { dot: '#8b5cf6', glow: '#a78bfa' },
            certification: { dot: '#22c55e', glow: '#4ade80' }
        };
        const colors = typeColors[project.type] || { dot: '#6366f1', glow: '#a5b4fc' };

        planet.innerHTML = `
            <div class="planet-body">
                <img src="${project.image}" alt="${project.title}" 
                     onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 30% 30%, #1e293b, #0f172a);color:#64748b;font-size:1.3rem;\\'><i class=\\'fas fa-rocket\\'></i></div>';">
                <div class="planet-atmosphere" style="border-color: ${colors.dot}40;"></div>
            </div>
            <div class="planet-ring" style="border-color: ${colors.dot}25;"></div>
            <div class="planet-moons">
                <div class="planet-moon moon-1" style="background: ${colors.dot}; box-shadow: 0 0 4px ${colors.glow};"></div>
                <div class="planet-moon moon-2" style="background: ${colors.glow}; box-shadow: 0 0 4px ${colors.glow};"></div>
            </div>
            <div class="planet-label">
                <span class="planet-type-dot ${project.type}"></span>${project.title}
            </div>
        `;

        planet.addEventListener('click', (e) => {
            e.stopPropagation();
            openDetail(project, e);
        });

        wrapper.appendChild(planet);
        return wrapper;
    }

    function filterProjects(filter) {
        const planetsToHide = [];
        const planetsToShow = [];

        allPlanets.forEach(({ el, project }) => {
            const planetEl = el.querySelector('.project-planet');
            const shouldBeVisible = (filter === 'all' || project.type === filter);
            const isCurrentlyVisible = !planetEl.classList.contains('hidden');
            if (!shouldBeVisible && isCurrentlyVisible && !planetEl.classList.contains('falling')) {
                planetsToHide.push(planetEl);
            } else if (shouldBeVisible && !isCurrentlyVisible) {
                planetsToShow.push(planetEl);
            }
        });

        planetsToHide.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('falling');
                el.classList.remove('rising');
                setTimeout(() => { el.classList.add('hidden'); el.classList.remove('falling'); }, 850);
            }, i * 50);
        });

        const hideDuration = planetsToHide.length * 50 + 850;
        setTimeout(() => {
            planetsToShow.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.remove('hidden', 'falling');
                    el.classList.add('rising');
                    setTimeout(() => { el.classList.remove('rising'); }, 700);
                }, i * 70);
            });
        }, hideDuration);
    }

    function updateOrreryZoom() {
        orreryContainer.style.transform = `scale(${orreryZoom})`;
    }

    function animateOrreryZoom() {
        orreryZoom += (targetOrreryZoom - orreryZoom) * 0.12;
        updateOrreryZoom();
        requestAnimationFrame(animateOrreryZoom);
    }

    function orreryZoomIn() { targetOrreryZoom = Math.min(1.8, targetOrreryZoom + 0.15); }
    function orreryZoomOut() { targetOrreryZoom = Math.max(0.4, targetOrreryZoom - 0.15); }
    function orreryZoomReset() { targetOrreryZoom = 1; }

    function updatePlanetScale() {
        orreryContainer.style.setProperty('--planet-scale', planetScale);
    }

    function animatePlanetScale() {
        planetScale += (targetPlanetScale - planetScale) * 0.12;
        updatePlanetScale();
        requestAnimationFrame(animatePlanetScale);
    }

    function planetZoomIn() { targetPlanetScale = Math.min(1.8, targetPlanetScale + 0.15); }
    function planetZoomOut() { targetPlanetScale = Math.max(0.4, targetPlanetScale - 0.15); }
    function planetZoomReset() { targetPlanetScale = 1; }

    zoomInOrrery.addEventListener('click', orreryZoomIn);
    zoomOutOrrery.addEventListener('click', orreryZoomOut);
    resetOrrery.addEventListener('click', orreryZoomReset);
    zoomInPlanet.addEventListener('click', planetZoomIn);
    zoomOutPlanet.addEventListener('click', planetZoomOut);
    resetPlanet.addEventListener('click', planetZoomReset);

    function openDetail(project, event) {
        const typeColors = { freelance: '#3b82f6', personal: '#8b5cf6', certification: '#22c55e' };
        const color = typeColors[project.type] || '#6366f1';
        createSparkles(event.clientX, event.clientY, color);

        const detailImage = document.getElementById('detailImage');
        const imgEl = detailImage.querySelector('img');
        imgEl.src = project.image;
        imgEl.style.display = '';
        imgEl.onerror = function () {
            this.style.display = 'none';
            detailImage.style.background = 'linear-gradient(135deg, #1e293b, #0f172a)';
            detailImage.style.display = 'flex';
            detailImage.style.alignItems = 'center';
            detailImage.style.justifyContent = 'center';
            if (!detailImage.querySelector('.fallback-icon')) {
                const icon = document.createElement('i');
                icon.classList.add('fas', 'fa-rocket', 'fallback-icon');
                icon.style.cssText = 'font-size: 2.5rem; color: #64748b;';
                detailImage.appendChild(icon);
            }
        };

        document.getElementById('detailTitle').textContent = project.title;
        document.getElementById('detailDesc').textContent = project.desc;
        const typeBadge = document.getElementById('detailType');
        typeBadge.textContent = project.type;
        typeBadge.className = 'detail-type-badge ' + project.type;
        document.getElementById('detailTech').innerHTML = project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');

        detailOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDetailModal() {
        detailOverlay.classList.remove('active');
        document.body.style.overflow = '';
        const detailImage = document.getElementById('detailImage');
        const fallbackIcon = detailImage.querySelector('.fallback-icon');
        if (fallbackIcon) fallbackIcon.remove();
        detailImage.style.background = '';
        detailImage.style.display = '';
        detailImage.querySelector('img').style.display = '';
    }

    closeDetail.addEventListener('click', (e) => { e.stopPropagation(); closeDetailModal(); });
    detailOverlay.addEventListener('click', (e) => { if (e.target === detailOverlay) closeDetailModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDetailModal(); });

    function createSparkles(x, y, color) {
        const colors = [color, '#6366f1', '#8b5cf6', '#a5b4fc', '#ffffff', '#fbbf24'];
        for (let i = 0; i < 14; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('click-sparkle');
            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 55;
            sparkle.style.cssText = `
                left: ${x}px; top: ${y}px;
                width: ${2 + Math.random() * 4}px; height: ${2 + Math.random() * 4}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                --sx: ${Math.cos(angle) * distance}px; --sy: ${Math.sin(angle) * distance}px;
                animation-delay: ${Math.random() * 0.2}s;
                box-shadow: 0 0 ${3 + Math.random() * 4}px currentColor;
            `;
            document.body.appendChild(sparkle);
            setTimeout(() => { if (sparkle.isConnected) sparkle.remove(); }, 900);
        }
    }

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            if (this.classList.contains('active')) return;
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            activeFilter = this.dataset.filter;
            filterProjects(activeFilter);
            closeDetailModal();
        });
    });

    // ============================================
    // INITIALIZE
    // ============================================
    createOrrery();
    animateOrreryZoom();
    animatePlanetScale();
});