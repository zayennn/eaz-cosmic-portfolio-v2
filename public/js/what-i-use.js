document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // SKILLS DATA
    // ============================================
    const skillsData = [
        { id: 'html', name: 'HTML5', icon: 'fa-brands fa-html5', iconColor: '#e44d26', category: 'frontend', mastery: 95, description: 'Semantic markup specialist with deep understanding of accessibility standards, SEO optimization, and modern HTML5 APIs.', tags: ['Semantic', 'Accessibility', 'SEO', 'APIs'], experience: '3+ years', projects: 25, stars: 5 },
        { id: 'css', name: 'CSS3', icon: 'fa-brands fa-css3-alt', iconColor: '#264de4', category: 'frontend', mastery: 90, description: 'Advanced styling with Flexbox, Grid, animations, and custom properties.', tags: ['Flexbox', 'Grid', 'Animation', 'Responsive'], experience: '3+ years', projects: 25, stars: 5 },
        { id: 'javascript', name: 'JavaScript', icon: 'fa-brands fa-js', iconColor: '#f7df1e', category: 'frontend', mastery: 88, description: 'Modern ES6+ development with async programming and DOM manipulation.', tags: ['ES6+', 'Async', 'DOM', 'Interactive'], experience: '2+ years', projects: 20, stars: 4 },
        { id: 'bootstrap', name: 'Bootstrap 5', icon: 'fa-brands fa-bootstrap', iconColor: '#7952b3', category: 'frontend', mastery: 90, description: 'Rapid UI development with grid system and components.', tags: ['Grid', 'Components', 'Utility'], experience: '2+ years', projects: 18, stars: 4 },
        { id: 'tailwind', name: 'Tailwind CSS', icon: 'fa-solid fa-wind', iconColor: '#06b6d4', category: 'frontend', mastery: 80, description: 'Utility-first CSS for rapid UI development.', tags: ['Utility', 'Design System'], experience: '1+ years', projects: 10, stars: 3 },
        { id: 'react', name: 'React.js', icon: 'fa-brands fa-react', iconColor: '#61dafb', category: 'frontend', mastery: 85, description: 'Building scalable SPAs with hooks and context API.', tags: ['Hooks', 'Context', 'SPA'], experience: '2+ years', projects: 15, stars: 4 },
        { id: 'php', name: 'PHP', icon: 'fa-brands fa-php', iconColor: '#777bb4', category: 'backend', mastery: 88, description: 'Server-side scripting with OOP principles.', tags: ['OOP', 'MVC', 'Server-side'], experience: '2+ years', projects: 20, stars: 4 },
        { id: 'laravel', name: 'Laravel', icon: 'fa-brands fa-laravel', iconColor: '#ff2d20', category: 'backend', mastery: 85, description: 'Full-stack framework with Eloquent ORM and API development.', tags: ['Eloquent', 'Auth', 'API'], experience: '2+ years', projects: 15, stars: 4 },
        { id: 'python', name: 'Python', icon: 'fa-brands fa-python', iconColor: '#3776ab', category: 'backend', mastery: 75, description: 'Versatile programming for automation and web development.', tags: ['Scripting', 'Automation'], experience: '1+ years', projects: 8, stars: 3 },
        { id: 'flask', name: 'Flask/Django', icon: 'fa-solid fa-code', iconColor: '#44b78b', category: 'backend', mastery: 70, description: 'Python web frameworks for scalable applications.', tags: ['Flask', 'Django', 'REST'], experience: '1+ years', projects: 5, stars: 3 },
        { id: 'mysql', name: 'MySQL', icon: 'fa-solid fa-database', iconColor: '#4479a1', category: 'database', mastery: 82, description: 'Database design and optimization.', tags: ['SQL', 'Queries', 'Optimization'], experience: '2+ years', projects: 20, stars: 4 },
        { id: 'git', name: 'Git & GitHub', icon: 'fa-brands fa-git-alt', iconColor: '#f05032', category: 'tools', mastery: 85, description: 'Version control and collaboration workflows.', tags: ['Version Control', 'Branch', 'CI/CD'], experience: '2+ years', projects: 25, stars: 4 },
        { id: 'framer', name: 'Framer Motion', icon: 'fa-solid fa-play', iconColor: '#ff0055', category: 'tools', mastery: 75, description: 'Smooth animations for React applications.', tags: ['Animation', 'React', 'Motion'], experience: '1+ years', projects: 8, stars: 3 },
        { id: 'vscode', name: 'VS Code', icon: 'fa-solid fa-code', iconColor: '#007acc', category: 'tools', mastery: 92, description: 'Primary code editor with extensive extensions.', tags: ['Editor', 'Extensions', 'Debugging'], experience: '3+ years', projects: 25, stars: 5 }
    ];

    // ============================================
    // DOM ELEMENTS
    // ============================================
    const nodesContainer = document.getElementById('skillsNodes');
    const detailPlaceholder = document.getElementById('detailPlaceholder');
    const detailContent = document.getElementById('detailContent');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const canvas = document.getElementById('constellationCanvas');
    const ctx = canvas.getContext('2d');

    let activeCategory = 'all';
    let selectedSkill = null;
    let allNodes = [];

    // ============================================
    // CREATE ALL NODES AT ONCE (FLEXBOX LAYOUT)
    // ============================================
    function createAllNodes() {
        nodesContainer.innerHTML = '';
        allNodes = [];

        // Shuffle untuk playful feel tapi tetap dalam flex wrap
        const shuffledSkills = [...skillsData].sort(() => Math.random() - 0.3);

        shuffledSkills.forEach((skill, index) => {
            const node = document.createElement('div');
            node.classList.add('skill-node');
            node.dataset.skillId = skill.id;
            node.dataset.category = skill.category;
            node.style.order = index;

            node.innerHTML = `
                <div class="node-ring"></div>
                <div class="node-core" style="border-color: ${skill.iconColor}40;">
                    <i class="${skill.icon} node-icon" style="color: ${skill.iconColor};"></i>
                </div>
                <div class="node-particles">
                    <div class="node-particle" style="animation-delay: 0s; background: ${skill.iconColor}; box-shadow: 0 0 6px ${skill.iconColor};"></div>
                    <div class="node-particle" style="animation-delay: -0.7s; background: ${skill.iconColor}; box-shadow: 0 0 6px ${skill.iconColor};"></div>
                    <div class="node-particle" style="animation-delay: -1.4s; background: ${skill.iconColor}; box-shadow: 0 0 6px ${skill.iconColor};"></div>
                </div>
                <div class="node-label">${skill.name}</div>
            `;

            node.addEventListener('click', (e) => {
                e.stopPropagation();
                selectSkill(skill, node);
                createClickRipple(e, node);
            });

            node.addEventListener('mouseenter', () => createStellarEvent(node));

            nodesContainer.appendChild(node);
            allNodes.push({ el: node, skill });
        });
    }

    // ============================================
    // FILTER WITH PLAYFUL ANIMATION
    // ============================================
    function filterSkills(category) {
        const visibleNodes = [];
        const hiddenNodes = [];

        allNodes.forEach(({ el, skill }) => {
            if (category === 'all' || skill.category === category) {
                visibleNodes.push(el);
                el.classList.remove('hidden');
            } else {
                hiddenNodes.push(el);
                el.classList.add('hidden');
            }
        });

        // Create filter burst particles
        createFilterBurst();

        // Animate visible nodes with stagger
        visibleNodes.forEach((node, index) => {
            node.classList.remove('filter-in');
            // Force reflow
            void node.offsetWidth;
            node.classList.add('filter-in');
            node.style.order = index;
        });

        // Update category counts
        updateCategoryCounts(category);
    }

    // ============================================
    // FILTER BURST PARTICLES
    // ============================================
    function createFilterBurst() {
        const container = document.querySelector('.skills-constellation');
        const rect = container.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('filter-particle');
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;
            const fx = Math.cos(angle) * distance;
            const fy = Math.sin(angle) * distance;
            
            particle.style.cssText = `
                left: ${cx}px;
                top: ${cy}px;
                --fx: ${fx}px;
                --fy: ${fy}px;
                animation-delay: ${Math.random() * 0.3}s;
                background: hsl(${240 + Math.random() * 60}, 80%, 70%);
            `;
            
            container.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    }

    // ============================================
    // CLICK RIPPLE
    // ============================================
    function createClickRipple(e, node) {
        const ripple = document.createElement('div');
        ripple.classList.add('filter-ripple');
        
        const rect = node.getBoundingClientRect();
        const containerRect = document.querySelector('.skills-constellation').getBoundingClientRect();
        
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top + rect.height / 2 - containerRect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        document.querySelector('.skills-constellation').appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1000);
    }

    // ============================================
    // UPDATE CATEGORY COUNTS
    // ============================================
    function updateCategoryCounts(activeCat) {
        const counts = {
            all: skillsData.length,
            frontend: skillsData.filter(s => s.category === 'frontend').length,
            backend: skillsData.filter(s => s.category === 'backend').length,
            database: skillsData.filter(s => s.category === 'database').length,
            tools: skillsData.filter(s => s.category === 'tools').length
        };

        categoryBtns.forEach(btn => {
            const cat = btn.dataset.category;
            const countEl = btn.querySelector('.category-count');
            if (countEl && counts[cat] !== undefined) {
                countEl.textContent = counts[cat];
            }
        });
    }

    // ============================================
    // SELECT SKILL
    // ============================================
    function selectSkill(skill, nodeElement) {
        if (selectedSkill) {
            const prevNode = allNodes.find(n => n.skill.id === selectedSkill.id);
            if (prevNode) prevNode.el.classList.remove('active');
        }

        nodeElement.classList.add('active');
        selectedSkill = skill;
        updateDetailPanel(skill);
    }

    function updateDetailPanel(skill) {
        detailPlaceholder.style.display = 'none';
        detailContent.classList.add('active');

        const starIcons = Array.from({ length: 5 }, (_, i) => 
            `<i class="fas fa-star ${i < skill.stars ? 'active' : ''}"></i>`
        ).join('');

        detailContent.innerHTML = `
            <div class="detail-header">
                <div class="detail-icon-large" style="background: ${skill.iconColor}20; color: ${skill.iconColor};">
                    <i class="${skill.icon}"></i>
                </div>
                <div>
                    <h3 class="detail-name">${skill.name}</h3>
                    <p class="detail-type">${skill.category.toUpperCase()}</p>
                </div>
            </div>
            <div class="detail-mastery">
                <div class="mastery-header">
                    <span class="mastery-label">Mastery Level</span>
                    <span class="mastery-percent">${skill.mastery}%</span>
                </div>
                <div class="mastery-bar">
                    <div class="mastery-fill" style="width: 0%;" id="masteryFill"></div>
                </div>
            </div>
            <div class="detail-stars">${starIcons}</div>
            <div class="detail-experience">
                <i class="fas fa-clock"></i> ${skill.experience}
            </div>
            <p class="detail-description">${skill.description}</p>
            <div class="detail-tags">
                ${skill.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
            </div>
            <div class="detail-projects">
                <i class="fas fa-folder"></i>
                <span>${skill.projects}+</span> projects completed
            </div>
        `;

        setTimeout(() => {
            const fill = document.getElementById('masteryFill');
            if (fill) fill.style.width = skill.mastery + '%';
        }, 100);
    }

    // ============================================
    // CATEGORY FILTER BUTTONS
    // ============================================
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            activeCategory = category;
            
            filterSkills(category);
            
            // Reset selection
            selectedSkill = null;
            detailContent.classList.remove('active');
            detailPlaceholder.style.display = '';
        });
    });

    // ============================================
    // CONSTELLATION CANVAS
    // ============================================
    function resizeCanvas() {
        const container = document.querySelector('.skills-constellation');
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    function drawConstellations() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const nodeElements = document.querySelectorAll('.skill-node:not(.hidden)');
        const container = document.querySelector('.skills-constellation');
        const containerRect = container.getBoundingClientRect();

        nodeElements.forEach((node1, i) => {
            const rect1 = node1.getBoundingClientRect();
            const x1 = rect1.left + rect1.width / 2 - containerRect.left;
            const y1 = rect1.top + rect1.height / 2 - containerRect.top;

            nodeElements.forEach((node2, j) => {
                if (j <= i) return;

                const rect2 = node2.getBoundingClientRect();
                const x2 = rect2.left + rect2.width / 2 - containerRect.left;
                const y2 = rect2.top + rect2.height / 2 - containerRect.top;

                const dx = x1 - x2;
                const dy = y1 - y2;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const opacity = Math.max(0, 0.15 - (distance / 200) * 0.15);
                    
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    
                    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                    gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`);
                    gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity * 0.5})`);
                    
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(drawConstellations);
    }

    // ============================================
    // STELLAR EVENTS
    // ============================================
    function createStellarEvent(node) {
        const rect = node.getBoundingClientRect();
        const container = document.querySelector('.skills-constellation');
        const containerRect = container.getBoundingClientRect();
        
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top + rect.height / 2 - containerRect.top;
        const skillColor = allNodes.find(n => n.el === node)?.skill.iconColor || '#6366f1';

        const eventContainer = document.createElement('div');
        eventContainer.classList.add('stellar-event');
        eventContainer.style.left = x + 'px';
        eventContainer.style.top = y + 'px';

        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.classList.add('event-particle');
            
            const angle = (Math.PI * 2 * i) / 8;
            const distance = 20 + Math.random() * 25;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.cssText = `
                --tx: ${tx}px;
                --ty: ${ty}px;
                animation-delay: ${Math.random() * 0.2}s;
                background: ${skillColor};
                box-shadow: 0 0 8px ${skillColor};
            `;
            
            eventContainer.appendChild(particle);
        }

        container.appendChild(eventContainer);
        setTimeout(() => eventContainer.remove(), 1200);
    }

    // ============================================
    // MAGNETIC MOUSE INTERACTION
    // ============================================
    document.addEventListener('mousemove', (e) => {
        const nodes = document.querySelectorAll('.skill-node:not(.hidden)');
        const container = document.querySelector('.skills-constellation');
        const containerRect = container.getBoundingClientRect();

        // Check if mouse is inside constellation area
        if (
            e.clientX < containerRect.left || 
            e.clientX > containerRect.right ||
            e.clientY < containerRect.top || 
            e.clientY > containerRect.bottom
        ) {
            nodes.forEach(node => node.style.transform = '');
            return;
        }

        nodes.forEach(node => {
            const rect = node.getBoundingClientRect();
            const nodeX = rect.left + rect.width / 2;
            const nodeY = rect.top + rect.height / 2;

            const dx = e.clientX - nodeX;
            const dy = e.clientY - nodeY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 180) {
                const force = (180 - distance) / 180;
                const angle = Math.atan2(dy, dx);
                // Push away from cursor (repel effect)
                const moveX = -Math.cos(angle) * force * 25;
                const moveY = -Math.sin(angle) * force * 25;
                const rotate = force * 10;
                
                node.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
                node.style.zIndex = '10';
            } else {
                node.style.transform = '';
                node.style.zIndex = '3';
            }
        });
    });

    // ============================================
    // INITIALIZE
    // ============================================
    createAllNodes();
    drawConstellations();
    updateCategoryCounts('all');

    console.log('🌌 Playful Constellation initialized - Nodes repel and dance!');
});