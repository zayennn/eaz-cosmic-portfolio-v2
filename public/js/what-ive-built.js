document.addEventListener('DOMContentLoaded', function () {
    // ============================================
    // PROJECTS DATA - PORTFOLIO PROJECTS
    // ============================================
    const projectsData = [
        {
            id: 1,
            title: 'Budget Tracker',
            type: 'personal',
            image: '/images/projects/budget_tracker.png',
            desc: 'A powerful web app for managing finances. Track expenses, categorize spending, set budgets, and generate detailed reports with offline access.',
            tech: ['PHP', 'Laravel'],
            github: 'https://github.com/zayennn/budget-tracker',
            featured: true
        },
        {
            id: 2,
            title: 'Certiport - HTML & CSS',
            type: 'certification',
            image: '/images/projects/certiport.jpg',
            desc: 'After completing HTML and CSS basics test learning, I successfully obtained this certification.',
            tech: ['HTML5', 'CSS3'],
            issuer: 'Certiport',
            featured: true
        },
        {
            id: 3,
            title: 'SOLID Programming Principles',
            type: 'certification',
            image: '/images/projects/dicoding.png',
            desc: 'A course on Dicoding that teaches the principles of SOLID programming for clean and maintainable code.',
            tech: ['SOLID', 'OOP'],
            issuer: 'Dicoding',
            featured: false
        },
        {
            id: 4,
            title: 'Landing Page PT. DHP',
            type: 'freelance',
            image: '/images/projects/freelance-1.jpg',
            desc: 'Built a professional landing page for PT. DHP using Laravel and Bootstrap 5 with responsive design.',
            tech: ['PHP', 'Laravel', 'Bootstrap'],
            featured: true
        },
        {
            id: 5,
            title: 'Landing Page SMPN 157 Jakarta',
            type: 'freelance',
            image: '/images/projects/freelance-2.jpg',
            desc: 'A landing page designed for SMPN Negri 157 Jakarta with modern UI and responsive layout.',
            tech: ['PHP', 'Laravel', 'Bootstrap'],
            featured: false
        },
        {
            id: 6,
            title: 'Gmetrix - HTML5 & CSS3',
            type: 'certification',
            image: '/images/projects/gmtrix.jpg',
            desc: 'Certification obtained after passing HTML5 and CSS3 tests through Gmetrix platform.',
            tech: ['HTML5', 'CSS3'],
            issuer: 'Gmetrix',
            featured: true
        },
        {
            id: 7,
            title: 'Internship PT. Kreasi Sawala Nusantara',
            type: 'certification',
            image: '/images/projects/PKL.jpg',
            desc: 'Internship program where I gained practical experience in web development as a Junior Frontend Developer.',
            tech: ['Junior FrontEnd'],
            issuer: 'PT. Kreasi Sawala Nusantara',
            featured: true
        },
        {
            id: 8,
            title: 'Python Learning Platform',
            type: 'personal',
            image: '/images/projects/python learning.png',
            desc: 'Interactive React website for learning Python basics with engaging UI and step-by-step tutorials.',
            tech: ['React Js'],
            github: 'https://github.com/zayennn/react-web-python-learning',
            live: 'https://react-web-python-learning.vercel.app/',
            featured: true
        },
        {
            id: 9,
            title: 'Vite Portfolio',
            type: 'personal',
            image: '/images/projects/vite-portfolio.png',
            desc: 'A personal portfolio website built with Vite featuring fast performance and modern design.',
            tech: ['Vite Js'],
            github: 'https://github.com/zaayeenn/vite-portfolio',
            live: 'https://vite-portfolio-drab.vercel.app/',
            featured: false
        },
        {
            id: 10,
            title: 'React Js Portfolio',
            type: 'personal',
            image: '/images/projects/react portfolio.png',
            desc: 'Portfolio website built with React showcasing projects and skills with smooth animations.',
            tech: ['React Js'],
            github: 'https://github.com/zaayeenn/reactjs-portfolio',
            live: 'https://els-reactjs-portfolio.vercel.app/',
            featured: false
        },
        {
            id: 11,
            title: 'Cosmic Portfolio',
            type: 'personal',
            image: '/images/projects/react cosmic.png',
            desc: 'Portfolio built with Vite JS featuring cosmic theme, parallax animations, and interactive UI.',
            tech: ['Vite Js'],
            github: 'https://github.com/zayennn/vite-cosmic-portfolio',
            live: 'https://cosmic-portfolio-iota.vercel.app/',
            featured: false
        },
        {
            id: 12,
            title: 'Cafe Coffee Website',
            type: 'freelance',
            image: '/images/projects/freelance-3.png',
            desc: 'Freelance cafe website project built with HTML, CSS, and JavaScript featuring menu and contact sections.',
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            featured: true
        }
    ];

    // ============================================
    // DOM ELEMENTS
    // ============================================
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

    // ============================================
    // CREATE ORRERY SYSTEM
    // ============================================
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
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 30% 30%, #1e293b, #0f172a);color:#64748b;font-size:1.3rem;\\'><i class=\\'fas fa-' + (project.type === 'certification' ? 'award' : 'rocket') + '\\'></i></div>';">
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

    // ============================================
    // FILTER PROJECTS
    // ============================================
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

    // ============================================
    // ZOOM CONTROLS
    // ============================================
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

    // ============================================
    // DETAIL MODAL
    // ============================================
    function openDetail(project, event) {
        const typeColors = { freelance: '#3b82f6', personal: '#8b5cf6', certification: '#22c55e' };
        const color = typeColors[project.type] || '#6366f1';
        createSparkles(event.clientX, event.clientY, color);

        const detailImage = document.getElementById('detailImage');
        const imgEl = detailImage.querySelector('img');
        imgEl.src = project.image;
        imgEl.style.display = '';
        
        // Remove fallback icon if exists
        const fallbackIcon = detailImage.querySelector('.fallback-icon');
        if (fallbackIcon) fallbackIcon.remove();
        detailImage.style.background = '';
        detailImage.style.display = '';
        detailImage.style.alignItems = '';
        detailImage.style.justifyContent = '';
        
        imgEl.onerror = function () {
            this.style.display = 'none';
            detailImage.style.background = 'linear-gradient(135deg, #1e293b, #0f172a)';
            detailImage.style.display = 'flex';
            detailImage.style.alignItems = 'center';
            detailImage.style.justifyContent = 'center';
            const icon = document.createElement('i');
            icon.classList.add('fas', project.type === 'certification' ? 'fa-award' : 'fa-rocket', 'fallback-icon');
            icon.style.cssText = 'font-size: 2.5rem; color: #64748b;';
            detailImage.appendChild(icon);
        };

        document.getElementById('detailTitle').textContent = project.title;
        document.getElementById('detailDesc').textContent = project.desc;
        
        const typeBadge = document.getElementById('detailType');
        typeBadge.textContent = project.type.charAt(0).toUpperCase() + project.type.slice(1);
        typeBadge.className = 'detail-type-badge ' + project.type;
        
        document.getElementById('detailTech').innerHTML = project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');

        // Add links if available
        const detailLinks = document.getElementById('detailLinks');
        if (detailLinks) {
            let linksHTML = '';
            if (project.github) {
                linksHTML += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="detail-link-btn">
                    <i class="fab fa-github"></i> View Code
                </a>`;
            }
            if (project.live) {
                linksHTML += `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="detail-link-btn live">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>`;
            }
            detailLinks.innerHTML = linksHTML;
        }

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
        detailImage.style.alignItems = '';
        detailImage.style.justifyContent = '';
        detailImage.querySelector('img').style.display = '';
    }

    closeDetail.addEventListener('click', (e) => { e.stopPropagation(); closeDetailModal(); });
    detailOverlay.addEventListener('click', (e) => { if (e.target === detailOverlay) closeDetailModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDetailModal(); });

    // ============================================
    // SPARKLES EFFECT
    // ============================================
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

    // ============================================
    // FILTER TABS
    // ============================================
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
    
    console.log('🪐 Project Orrery initialized with ' + projectsData.length + ' projects!');
});