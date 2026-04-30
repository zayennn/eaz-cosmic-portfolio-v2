document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // SKILLS DATA - Stellar Objects
    // ============================================
    const skillsData = [
        {
            id: 'html',
            name: 'HTML5',
            icon: 'fa-brands fa-html5',
            iconColor: '#e44d26',
            category: 'frontend',
            mastery: 95,
            description: 'Semantic markup specialist with deep understanding of accessibility standards, SEO optimization, and modern HTML5 APIs.',
            tags: ['Semantic', 'Accessibility', 'SEO', 'APIs'],
            experience: '3+ years',
            projects: 25,
            stars: 5,
            position: { x: 15, y: 25 }
        },
        {
            id: 'css',
            name: 'CSS3',
            icon: 'fa-brands fa-css3-alt',
            iconColor: '#264de4',
            category: 'frontend',
            mastery: 90,
            description: 'Advanced styling with Flexbox, Grid, animations, and custom properties. Creating responsive, pixel-perfect designs.',
            tags: ['Flexbox', 'Grid', 'Animation', 'Responsive'],
            experience: '3+ years',
            projects: 25,
            stars: 5,
            position: { x: 35, y: 15 }
        },
        {
            id: 'javascript',
            name: 'JavaScript',
            icon: 'fa-brands fa-js',
            iconColor: '#f7df1e',
            category: 'frontend',
            mastery: 88,
            description: 'Modern ES6+ development with async programming, DOM manipulation, and building complex interactive features.',
            tags: ['ES6+', 'Async', 'DOM', 'Interactive'],
            experience: '2+ years',
            projects: 20,
            stars: 4,
            position: { x: 55, y: 30 }
        },
        {
            id: 'react',
            name: 'React.js',
            icon: 'fa-brands fa-react',
            iconColor: '#61dafb',
            category: 'frontend',
            mastery: 85,
            description: 'Building scalable SPAs with hooks, context API, and modern React patterns. State management and component architecture.',
            tags: ['Hooks', 'Context', 'SPA', 'Components'],
            experience: '2+ years',
            projects: 15,
            stars: 4,
            position: { x: 70, y: 50 }
        },
        {
            id: 'bootstrap',
            name: 'Bootstrap 5',
            icon: 'fa-brands fa-bootstrap',
            iconColor: '#7952b3',
            category: 'frontend',
            mastery: 90,
            description: 'Rapid UI development with Bootstrap\'s grid system, components, and utilities. Custom theme implementation.',
            tags: ['Grid', 'Components', 'Utility', 'Responsive'],
            experience: '2+ years',
            projects: 18,
            stars: 4,
            position: { x: 25, y: 60 }
        },
        {
            id: 'tailwind',
            name: 'Tailwind CSS',
            icon: 'fa-solid fa-wind',
            iconColor: '#06b6d4',
            category: 'frontend',
            mastery: 80,
            description: 'Utility-first CSS framework for rapid UI development. Custom design systems and responsive layouts.',
            tags: ['Utility', 'Design System', 'Rapid UI'],
            experience: '1+ years',
            projects: 10,
            stars: 3,
            position: { x: 80, y: 25 }
        },
        {
            id: 'php',
            name: 'PHP',
            icon: 'fa-brands fa-php',
            iconColor: '#777bb4',
            category: 'backend',
            mastery: 88,
            description: 'Server-side scripting with OOP principles. Building robust backend systems with modern PHP practices.',
            tags: ['OOP', 'MVC', 'Server-side'],
            experience: '2+ years',
            projects: 20,
            stars: 4,
            position: { x: 45, y: 75 }
        },
        {
            id: 'laravel',
            name: 'Laravel',
            icon: 'fa-brands fa-laravel',
            iconColor: '#ff2d20',
            category: 'backend',
            mastery: 85,
            description: 'Full-stack framework expertise with Eloquent ORM, authentication systems, API development, and artisan commands.',
            tags: ['Eloquent', 'Auth', 'API', 'Artisan'],
            experience: '2+ years',
            projects: 15,
            stars: 4,
            position: { x: 65, y: 70 }
        },
        {
            id: 'python',
            name: 'Python',
            icon: 'fa-brands fa-python',
            iconColor: '#3776ab',
            category: 'backend',
            mastery: 75,
            description: 'Versatile programming for automation, scripting, and web development with modern Python frameworks.',
            tags: ['Scripting', 'Automation', 'Web'],
            experience: '1+ years',
            projects: 8,
            stars: 3,
            position: { x: 85, y: 70 }
        },
        {
            id: 'flask',
            name: 'Flask/Django',
            icon: 'fa-solid fa-code',
            iconColor: '#44b78b',
            category: 'backend',
            mastery: 70,
            description: 'Python web frameworks for building scalable applications. RESTful APIs and MVC architecture.',
            tags: ['Flask', 'Django', 'REST', 'MVC'],
            experience: '1+ years',
            projects: 5,
            stars: 3,
            position: { x: 10, y: 80 }
        },
        {
            id: 'mysql',
            name: 'MySQL',
            icon: 'fa-solid fa-database',
            iconColor: '#4479a1',
            category: 'database',
            mastery: 82,
            description: 'Database design, complex queries, optimization, and data modeling for scalable applications.',
            tags: ['SQL', 'Queries', 'Optimization'],
            experience: '2+ years',
            projects: 20,
            stars: 4,
            position: { x: 90, y: 45 }
        },
        {
            id: 'git',
            name: 'Git & GitHub',
            icon: 'fa-brands fa-git-alt',
            iconColor: '#f05032',
            category: 'tools',
            mastery: 85,
            description: 'Version control mastery with branching strategies, collaboration workflows, and CI/CD integration.',
            tags: ['Version Control', 'Branch', 'CI/CD'],
            experience: '2+ years',
            projects: 25,
            stars: 4,
            position: { x: 50, y: 85 }
        },
        {
            id: 'framer',
            name: 'Framer Motion',
            icon: 'fa-solid fa-play',
            iconColor: '#ff0055',
            category: 'tools',
            mastery: 75,
            description: 'Creating smooth, engaging animations and micro-interactions for React applications.',
            tags: ['Animation', 'React', 'Motion'],
            experience: '1+ years',
            projects: 8,
            stars: 3,
            position: { x: 30, y: 90 }
        }
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
    let nodes = [];

    // ============================================
    // CREATE SKILL NODES
    // ============================================
    function createSkillNodes(filter = 'all') {
        nodesContainer.innerHTML = '';
        nodes = [];

        const filteredSkills = filter === 'all' 
            ? skillsData 
            : skillsData.filter(s => s.category === filter);

        filteredSkills.forEach((skill, index) => {
            const node = document.createElement('div');
            node.classList.add('skill-node');
            node.style.left = skill.position.x + '%';
            node.style.top = skill.position.y + '%';
            node.style.transitionDelay = index * 0.05 + 's';
            node.dataset.skillId = skill.id;

            node.innerHTML = `
                <div class="node-ring"></div>
                <div class="node-core" style="border-color: ${skill.iconColor}40;">
                    <i class="${skill.icon} node-icon" style="color: ${skill.iconColor};"></i>
                </div>
                <div class="node-particles">
                    <div class="node-particle" style="animation-delay: 0s;"></div>
                    <div class="node-particle" style="animation-delay: -0.5s;"></div>
                    <div class="node-particle" style="animation-delay: -1s;"></div>
                </div>
                <div class="node-label">${skill.name}</div>
            `;

            node.addEventListener('click', () => selectSkill(skill, node));
            node.addEventListener('mouseenter', () => createStellarEvent(node));

            nodesContainer.appendChild(node);
            nodes.push({ el: node, skill });
        });
    }

    // ============================================
    // SELECT SKILL
    // ============================================
    function selectSkill(skill, nodeElement) {
        // Deselect previous
        if (selectedSkill) {
            const prevNode = document.querySelector(`[data-skill-id="${selectedSkill.id}"]`);
            if (prevNode) prevNode.classList.remove('active');
        }

        // Select new
        nodeElement.classList.add('active');
        selectedSkill = skill;

        // Update detail panel
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

            <div class="detail-stars">
                ${starIcons}
            </div>

            <div class="detail-experience">
                <i class="fas fa-clock"></i>
                ${skill.experience}
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

        // Animate mastery bar
        setTimeout(() => {
            const fill = document.getElementById('masteryFill');
            if (fill) {
                fill.style.width = skill.mastery + '%';
            }
        }, 100);
    }

    // ============================================
    // CATEGORY FILTER
    // ============================================
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            activeCategory = category;
            
            // Hide all nodes
            document.querySelectorAll('.skill-node').forEach(node => {
                node.classList.add('hidden');
            });

            // Show filtered nodes with delay
            setTimeout(() => {
                createSkillNodes(category);
                
                // Reset selection
                selectedSkill = null;
                detailContent.classList.remove('active');
                detailPlaceholder.style.display = '';
            }, 300);
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
        createSkillNodes(activeCategory);
    });

    function drawConstellations() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const nodeElements = document.querySelectorAll('.skill-node:not(.hidden)');
        const container = document.querySelector('.skills-constellation');
        const containerRect = container.getBoundingClientRect();

        // Draw connections between nearby nodes
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

                if (distance < 250) {
                    const opacity = Math.max(0, 0.2 - (distance / 250) * 0.2);
                    
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    
                    // Gradient line
                    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                    gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`);
                    gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity * 0.5})`);
                    
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    // Draw dot at midpoint
                    if (distance < 150) {
                        const mx = (x1 + x2) / 2;
                        const my = (y1 + y2) / 2;
                        
                        ctx.beginPath();
                        ctx.arc(mx, my, 2, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(99, 102, 241, ${opacity * 2})`;
                        ctx.fill();
                    }
                }
            });

            // Draw connection to center
            const cx = containerRect.width / 2;
            const cy = containerRect.height / 2;
            const dx = x1 - cx;
            const dy = y1 - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 400) {
                const opacity = Math.max(0, 0.05 - (dist / 400) * 0.05);
                
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(cx, cy);
                ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.setLineDash([5, 15]);
                ctx.stroke();
                ctx.setLineDash([]);
            }
        });

        requestAnimationFrame(drawConstellations);
    }

    // ============================================
    // STELLAR EVENTS (Particle Bursts)
    // ============================================
    function createStellarEvent(node) {
        const rect = node.getBoundingClientRect();
        const container = document.querySelector('.skills-constellation');
        const containerRect = container.getBoundingClientRect();
        
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top + rect.height / 2 - containerRect.top;

        const eventContainer = document.createElement('div');
        eventContainer.classList.add('stellar-event');
        eventContainer.style.left = x + 'px';
        eventContainer.style.top = y + 'px';

        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.classList.add('event-particle');
            
            const angle = (Math.PI * 2 * i) / 12;
            const distance = 30 + Math.random() * 30;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            particle.style.animationDelay = Math.random() * 0.3 + 's';
            particle.style.background = `hsl(${240 + Math.random() * 60}, 80%, 70%)`;
            
            eventContainer.appendChild(particle);
        }

        container.appendChild(eventContainer);

        setTimeout(() => {
            eventContainer.remove();
        }, 1500);
    }

    // ============================================
    // MOUSE INTERACTION
    // ============================================
    document.addEventListener('mousemove', (e) => {
        const nodes = document.querySelectorAll('.skill-node:not(.hidden)');
        const container = document.querySelector('.skills-constellation');
        const containerRect = container.getBoundingClientRect();

        nodes.forEach(node => {
            const rect = node.getBoundingClientRect();
            const nodeX = rect.left + rect.width / 2;
            const nodeY = rect.top + rect.height / 2;

            const dx = e.clientX - nodeX;
            const dy = e.clientY - nodeY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
                const force = (200 - distance) / 200;
                const moveX = dx * force * 0.03;
                const moveY = dy * force * 0.03;
                
                const originalPos = skillsData.find(s => 
                    node.dataset.skillId === s.id
                );
                
                if (originalPos) {
                    node.style.transform = `translate(${moveX}px, ${moveY}px)`;
                }
            } else {
                node.style.transform = '';
            }
        });
    });

    // ============================================
    // INITIALIZE
    // ============================================
    createSkillNodes();
    drawConstellations();

    console.log('🌌 Cosmic Nebula Skills initialized - Explore the constellation!');
});