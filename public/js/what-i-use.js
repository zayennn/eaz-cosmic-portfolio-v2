document.addEventListener('DOMContentLoaded', function() {
    const skillsData = [
        // Frontend
        { id: 'html', name: 'HTML5', icon: 'fa-brands fa-html5', iconColor: '#e44d26', category: 'frontend', mastery: 95, description: 'Semantic markup specialist with deep understanding of accessibility standards, SEO optimization, and modern HTML5 APIs.', tags: ['Semantic', 'Accessibility', 'SEO', 'APIs'], experience: '3+ years', projects: 25, stars: 5 },
        { id: 'css', name: 'CSS3', icon: 'fa-brands fa-css3-alt', iconColor: '#264de4', category: 'frontend', mastery: 92, description: 'Advanced styling with Flexbox, Grid, animations, custom properties, and responsive design principles.', tags: ['Flexbox', 'Grid', 'Animation', 'Responsive'], experience: '3+ years', projects: 25, stars: 5 },
        { id: 'javascript', name: 'JavaScript', icon: 'fa-brands fa-js', iconColor: '#f7df1e', category: 'frontend', mastery: 90, description: 'Modern ES6+ development with async/await, DOM manipulation, event handling, and API integration.', tags: ['ES6+', 'Async', 'DOM', 'API'], experience: '3+ years', projects: 22, stars: 5 },
        { id: 'react', name: 'React.js', icon: 'fa-brands fa-react', iconColor: '#61dafb', category: 'frontend', mastery: 87, description: 'Building scalable SPAs with hooks, context API, Redux, and modern React patterns.', tags: ['Hooks', 'Context', 'Redux', 'SPA'], experience: '2+ years', projects: 15, stars: 4 },
        { id: 'vite', name: 'Vite', icon: 'fa-solid fa-bolt', iconColor: '#bd34fe', category: 'frontend', mastery: 82, description: 'Next-gen frontend build tool with HMR, fast cold starts, and optimized builds.', tags: ['HMR', 'Build', 'ESBuild', 'Fast'], experience: '1.5+ years', projects: 12, stars: 4 },
        
        // Frontend Animation Libraries
        { id: 'framer-motion', name: 'Framer Motion', icon: 'fa-solid fa-play', iconColor: '#ff0055', category: 'frontend', mastery: 80, description: 'Declarative animation library for React with gesture support and layout animations.', tags: ['Animation', 'Gesture', 'Layout', 'React'], experience: '1+ years', projects: 8, stars: 3 },
        { id: 'gsap', name: 'GSAP', icon: 'fa-solid fa-star', iconColor: '#88ce02', category: 'frontend', mastery: 78, description: 'Professional-grade animation library with ScrollTrigger, timelines, and high performance.', tags: ['Timeline', 'Scroll', 'Animation', 'SVG'], experience: '1+ years', projects: 6, stars: 3 },
        
        // Backend
        { id: 'nodejs', name: 'Node.js', icon: 'fa-brands fa-node-js', iconColor: '#339933', category: 'backend', mastery: 80, description: 'Server-side JavaScript runtime with event-driven architecture for scalable applications.', tags: ['Event-driven', 'NPM', 'Async', 'Scalable'], experience: '2+ years', projects: 12, stars: 4 },
        { id: 'express', name: 'Express', icon: 'fa-solid fa-server', iconColor: '#000000', category: 'backend', mastery: 78, description: 'Minimalist Node.js framework for building RESTful APIs and web applications.', tags: ['REST', 'Middleware', 'Routing', 'API'], experience: '1.5+ years', projects: 10, stars: 3 },
        { id: 'php', name: 'PHP', icon: 'fa-brands fa-php', iconColor: '#777bb4', category: 'backend', mastery: 88, description: 'Server-side scripting with OOP principles, MVC architecture, and modern PHP practices.', tags: ['OOP', 'MVC', 'Web', 'Backend'], experience: '2.5+ years', projects: 20, stars: 4 },
        { id: 'laravel', name: 'Laravel', icon: 'fa-brands fa-laravel', iconColor: '#ff2d20', category: 'backend', mastery: 85, description: 'Full-stack PHP framework with Eloquent ORM, authentication, queues, and artisan CLI.', tags: ['Eloquent', 'Auth', 'Queue', 'Artisan'], experience: '2+ years', projects: 15, stars: 4 },
        { id: 'python', name: 'Python', icon: 'fa-brands fa-python', iconColor: '#3776ab', category: 'backend', mastery: 75, description: 'Versatile programming for automation, scripting, data processing, and web development.', tags: ['Scripting', 'Automation', 'Data', 'Web'], experience: '1.5+ years', projects: 10, stars: 3 },
        { id: 'flask', name: 'Flask', icon: 'fa-solid fa-flask', iconColor: '#44b78b', category: 'backend', mastery: 72, description: 'Lightweight Python web framework for building RESTful APIs and microservices.', tags: ['REST', 'Microservice', 'Python', 'API'], experience: '1+ years', projects: 6, stars: 3 },
        { id: 'java', name: 'Java', icon: 'fa-brands fa-java', iconColor: '#ed8b00', category: 'backend', mastery: 65, description: 'Object-oriented programming for enterprise applications and Android development.', tags: ['OOP', 'Enterprise', 'Android', 'JVM'], experience: '1+ years', projects: 4, stars: 2 },
        { id: 'c', name: 'C', icon: 'fa-solid fa-microchip', iconColor: '#a8b9cc', category: 'backend', mastery: 55, description: 'Low-level programming for system applications and embedded development.', tags: ['Low-level', 'System', 'Pointer', 'Memory'], experience: '6+ months', projects: 3, stars: 2 },
        
        // Database
        { id: 'mysql', name: 'MySQL', icon: 'fa-solid fa-database', iconColor: '#4479a1', category: 'database', mastery: 84, description: 'Relational database design, complex queries, optimization, and data modeling.', tags: ['SQL', 'Queries', 'Optimization', 'Modeling'], experience: '2.5+ years', projects: 22, stars: 4 },
        { id: 'mariadb', name: 'MariaDB', icon: 'fa-solid fa-database', iconColor: '#c0765a', category: 'database', mastery: 70, description: 'Open-source relational database, compatible with MySQL with enhanced features.', tags: ['SQL', 'Open Source', 'MySQL Compatible'], experience: '1+ years', projects: 8, stars: 3 },
        
        // Tools & IDE
        { id: 'vscode', name: 'VS Code', icon: 'fa-solid fa-code', iconColor: '#007acc', category: 'tools', mastery: 95, description: 'Primary code editor with extensive extensions, debugging, and integrated terminal.', tags: ['Editor', 'Extensions', 'Debug', 'Git'], experience: '3+ years', projects: 30, stars: 5 },
        { id: 'intellij', name: 'IntelliJ IDEA', icon: 'fa-solid fa-cube', iconColor: '#fe315d', category: 'tools', mastery: 75, description: 'Powerful Java IDE with intelligent code completion and refactoring tools.', tags: ['IDE', 'Java', 'Refactoring', 'Debug'], experience: '1+ years', projects: 5, stars: 3 },
        { id: 'antigravity', name: 'Antigravity', icon: 'fa-solid fa-rocket', iconColor: '#8b5cf6', category: 'tools', mastery: 70, description: 'Modern development tool for rapid prototyping and code generation.', tags: ['Rapid', 'Prototype', 'Generate'], experience: '6+ months', projects: 4, stars: 3 },
        { id: 'figma', name: 'Figma', icon: 'fa-brands fa-figma', iconColor: '#f24e1e', category: 'tools', mastery: 78, description: 'Collaborative interface design tool for prototyping, wireframing, and design systems.', tags: ['Design', 'Prototype', 'UI/UX', 'Collaborate'], experience: '1.5+ years', projects: 15, stars: 4 },
        { id: 'framer', name: 'Framer', icon: 'fa-solid fa-pen-ruler', iconColor: '#0099ff', category: 'tools', mastery: 68, description: 'Interactive design tool for creating high-fidelity prototypes with code components.', tags: ['Design', 'Interactive', 'Prototype'], experience: '1+ years', projects: 6, stars: 3 },
        { id: 'xampp', name: 'XAMPP', icon: 'fa-solid fa-box', iconColor: '#fb7a24', category: 'tools', mastery: 85, description: 'Local development environment with Apache, MariaDB, PHP, and Perl stack.', tags: ['Local', 'Apache', 'PHP', 'MySQL'], experience: '2.5+ years', projects: 18, stars: 4 },
        { id: 'git', name: 'Git & GitHub', icon: 'fa-brands fa-git-alt', iconColor: '#f05032', category: 'tools', mastery: 88, description: 'Version control mastery with branching strategies, collaboration workflows, and CI/CD.', tags: ['Version Control', 'Branch', 'CI/CD', 'Collaborate'], experience: '3+ years', projects: 28, stars: 5 }
    ];

    const nodesContainer = document.getElementById('skillsNodes');
    const detailPlaceholder = document.getElementById('detailPlaceholder');
    const detailContent = document.getElementById('detailContent');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const canvas = document.getElementById('constellationCanvas');
    const ctx = canvas.getContext('2d');

    let activeCategory = 'all';
    let selectedSkill = null;
    let allNodes = [];
    let isFiltering = false;

    function createAllNodes() {
        nodesContainer.innerHTML = '';
        allNodes = [];

        const categories = ['frontend', 'backend', 'database', 'tools'];
        const organizedSkills = [];
        
        const maxLength = Math.max(...categories.map(cat => skillsData.filter(s => s.category === cat).length));
        
        for (let i = 0; i < maxLength; i++) {
            categories.forEach(cat => {
                const catSkills = skillsData.filter(s => s.category === cat);
                if (catSkills[i]) {
                    organizedSkills.push(catSkills[i]);
                }
            });
        }

        organizedSkills.forEach((skill, index) => {
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

    function createExplosionAtNode(node, skillColor) {
        const rect = node.getBoundingClientRect();
        const container = document.querySelector('.skills-constellation');
        const containerRect = container.getBoundingClientRect();
        
        const x = rect.left + rect.width / 2 - containerRect.left;
        const y = rect.top + rect.height / 2 - containerRect.top;
        
        const fragmentCount = 25 + Math.floor(Math.random() * 20);
        const colors = [
            skillColor,
            skillColor + 'cc',
            '#6366f1',
            '#8b5cf6',
            '#a5b4fc',
            '#ffffff'
        ];

        for (let i = 0; i < fragmentCount; i++) {
            const fragment = document.createElement('div');
            fragment.classList.add('explosion-fragment');
            
            const angle = (Math.PI * 2 * i) / fragmentCount + Math.random() * 0.3;
            const distance = 40 + Math.random() * 100;
            const fx = Math.cos(angle) * distance;
            const fy = Math.sin(angle) * distance;
            const size = 2 + Math.random() * 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const duration = 0.5 + Math.random() * 0.8;
            
            fragment.style.cssText = `
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                --fx: ${fx}px;
                --fy: ${fy}px;
                animation: explosion-burst ${duration}s ease-out forwards;
                animation-delay: ${Math.random() * 0.15}s;
                box-shadow: 0 0 ${size * 2}px ${color};
                z-index: 15;
            `;
            
            container.appendChild(fragment);
            
            setTimeout(() => {
                if (fragment.isConnected) fragment.remove();
            }, (duration + 0.2) * 1000);
        }
        
        const flash = document.createElement('div');
        flash.classList.add('explosion-flash');
        flash.style.cssText = `
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, ${skillColor}80, transparent);
        `;
        container.appendChild(flash);
        setTimeout(() => flash.remove(), 800);
    }

    function filterSkills(category) {
        if (isFiltering) return;
        isFiltering = true;

        const nodesToKeep = [];
        const nodesToExplode = [];

        allNodes.forEach(({ el, skill }) => {
            if (category === 'all' || skill.category === category) {
                if (!el.classList.contains('hidden')) {
                    nodesToKeep.push(el);
                } else {
                    nodesToKeep.push(el);
                }
            } else {
                if (!el.classList.contains('hidden')) {
                    nodesToExplode.push({ el, skill });
                }
            }
        });

        nodesToExplode.forEach(({ el, skill }, index) => {
            setTimeout(() => {
                createExplosionAtNode(el, skill.iconColor);
                
                el.style.animation = 'none';
                el.style.animation = 'node-shake 0.3s ease';
                
                setTimeout(() => {
                    el.classList.add('hidden');
                    el.style.animation = '';
                }, 150);
            }, index * 30);
        });

        const totalExplosionTime = nodesToExplode.length * 30 + 400;
        
        setTimeout(() => {
            allNodes.forEach(({ el, skill }) => {
                if (category === 'all' || skill.category === category) {
                    el.classList.remove('hidden', 'filter-in');
                }
            });

            const visibleNodes = allNodes
                .filter(({ skill }) => category === 'all' || skill.category === category)
                .sort((a, b) => {
                    return (Math.random() - 0.5) * 2;
                });

            visibleNodes.forEach(({ el }, index) => {
                el.style.order = index;
                
                el.classList.remove('filter-in');
                void el.offsetWidth;
                
                setTimeout(() => {
                    el.classList.add('filter-in');
                }, index * 40);
            });

            if (nodesToExplode.length > 0) {
                createCentralBurst();
            }

            isFiltering = false;
        }, totalExplosionTime);

        updateCategoryCounts(category);
    }

    function createCentralBurst() {
        const container = document.querySelector('.skills-constellation');
        const rect = container.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('filter-particle');
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 80;
            
            particle.style.cssText = `
                left: ${cx}px;
                top: ${cy}px;
                --fx: ${Math.cos(angle) * distance}px;
                --fy: ${Math.sin(angle) * distance}px;
                animation-delay: ${Math.random() * 0.2}s;
                width: ${2 + Math.random() * 4}px;
                height: ${2 + Math.random() * 4}px;
                background: hsl(${240 + Math.random() * 60}, 80%, ${60 + Math.random() * 20}%);
            `;
            
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
    }

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

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
            
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            activeCategory = category;
            
            filterSkills(category);
            
            selectedSkill = null;
            detailContent.classList.remove('active');
            detailPlaceholder.style.display = '';
        });
    });

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

                if (distance < 220) {
                    const opacity = Math.max(0, 0.12 - (distance / 220) * 0.12);
                    
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    
                    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                    gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`);
                    gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity * 0.5})`);
                    
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(drawConstellations);
    }

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
            const distance = 15 + Math.random() * 20;
            
            particle.style.cssText = `
                --tx: ${Math.cos(angle) * distance}px;
                --ty: ${Math.sin(angle) * distance}px;
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
    // MAGNETIC MOUSE INTERACTION (REPEL)
    // ============================================
    document.addEventListener('mousemove', (e) => {
        const nodes = document.querySelectorAll('.skill-node:not(.hidden)');
        const container = document.querySelector('.skills-constellation');
        const containerRect = container.getBoundingClientRect();

        if (
            e.clientX < containerRect.left || 
            e.clientX > containerRect.right ||
            e.clientY < containerRect.top || 
            e.clientY > containerRect.bottom
        ) {
            nodes.forEach(node => {
                if (!node.classList.contains('filter-in')) {
                    node.style.transform = '';
                    node.style.zIndex = '3';
                }
            });
            return;
        }

        nodes.forEach(node => {
            if (node.classList.contains('hidden')) return;

            const rect = node.getBoundingClientRect();
            const nodeX = rect.left + rect.width / 2;
            const nodeY = rect.top + rect.height / 2;

            const dx = e.clientX - nodeX;
            const dy = e.clientY - nodeY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 160) {
                const force = (160 - distance) / 160;
                const angle = Math.atan2(dy, dx);
                const moveX = -Math.cos(angle) * force * 20;
                const moveY = -Math.sin(angle) * force * 20;
                const rotate = force * 8;
                
                node.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
                node.style.zIndex = '10';
            } else {
                if (!node.classList.contains('filter-in')) {
                    node.style.transform = '';
                }
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

    console.log('💥 Cosmic Skills with Explosion Filter initialized!');
});