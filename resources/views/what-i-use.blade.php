@extends('layouts.app')

@section('content')
<!-- Cosmic Background -->
<div class="skills-cosmic-bg">
    <div class="nebula nebula-1"></div>
    <div class="nebula nebula-2"></div>
    <div class="nebula nebula-3"></div>
</div>

<section class="skills-section" id="skills">
    <h2 class="section-title" data-aos="fade-up">
        What I <span>Use</span>
    </h2>

    <!-- Filter Tabs -->
    <div class="skills-filter" data-aos="fade-up" data-aos-delay="100">
        <button class="filter-btn active" data-filter="all">
            <i class="fas fa-star filter-icon"></i> All Skills
        </button>
        <button class="filter-btn" data-filter=".frontend">
            <i class="fas fa-code filter-icon"></i> Frontend
        </button>
        <button class="filter-btn" data-filter=".backend">
            <i class="fas fa-server filter-icon"></i> Backend
        </button>
        <button class="filter-btn" data-filter=".database">
            <i class="fas fa-database filter-icon"></i> Database
        </button>
        <button class="filter-btn" data-filter=".tools">
            <i class="fas fa-tools filter-icon"></i> Tools
        </button>
    </div>

    <!-- Skills Grid -->
    <div class="skills-grid" id="skillsContainer" data-aos="fade-up" data-aos-delay="200">
        
        <!-- Frontend Skills -->
        <div class="skill-card mix frontend" data-category="frontend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fab fa-html5"></i>
                </div>
                <h3 class="skill-name">HTML5</h3>
                <span class="skill-category">Frontend</span>
            </div>
        </div>

        <div class="skill-card mix frontend" data-category="frontend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fab fa-css3-alt"></i>
                </div>
                <h3 class="skill-name">CSS3</h3>
                <span class="skill-category">Frontend</span>
            </div>
        </div>

        <div class="skill-card mix frontend" data-category="frontend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fab fa-js"></i>
                </div>
                <h3 class="skill-name">JavaScript</h3>
                <span class="skill-category">Frontend</span>
            </div>
        </div>

        <div class="skill-card mix frontend" data-category="frontend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fab fa-react"></i>
                </div>
                <h3 class="skill-name">React JS</h3>
                <span class="skill-category">Frontend</span>
            </div>
        </div>

        <div class="skill-card mix frontend" data-category="frontend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-film"></i>
                </div>
                <h3 class="skill-name">Framer Motion</h3>
                <span class="skill-category">Frontend</span>
            </div>
        </div>

        <!-- Backend Skills -->
        <div class="skill-card mix backend" data-category="backend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fab fa-python"></i>
                </div>
                <h3 class="skill-name">Python</h3>
                <span class="skill-category">Backend</span>
            </div>
        </div>

        <div class="skill-card mix backend" data-category="backend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fab fa-java"></i>
                </div>
                <h3 class="skill-name">Java</h3>
                <span class="skill-category">Backend</span>
            </div>
        </div>

        <div class="skill-card mix backend" data-category="backend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-code"></i>
                </div>
                <h3 class="skill-name">C</h3>
                <span class="skill-category">Backend</span>
            </div>
        </div>

        <div class="skill-card mix backend" data-category="backend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-flask"></i>
                </div>
                <h3 class="skill-name">Flask</h3>
                <span class="skill-category">Backend</span>
            </div>
        </div>

        <div class="skill-card mix backend frontend" data-category="backend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <h3 class="skill-name">GSAP</h3>
                <span class="skill-category">Backend</span>
            </div>
        </div>

        <div class="skill-card mix backend frontend" data-category="backend">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-cube"></i>
                </div>
                <h3 class="skill-name">Vite</h3>
                <span class="skill-category">Backend</span>
            </div>
        </div>

        <!-- Database Skills -->
        <div class="skill-card mix database" data-category="database">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-database"></i>
                </div>
                <h3 class="skill-name">MySQL</h3>
                <span class="skill-category">Database</span>
            </div>
        </div>

        <div class="skill-card mix database" data-category="database">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-database"></i>
                </div>
                <h3 class="skill-name">MariaDB</h3>
                <span class="skill-category">Database</span>
            </div>
        </div>

        <div class="skill-card mix database" data-category="database">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-database"></i>
                </div>
                <h3 class="skill-name">PostgreSQL</h3>
                <span class="skill-category">Database</span>
            </div>
        </div>

        <div class="skill-card mix database" data-category="database">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-server"></i>
                </div>
                <h3 class="skill-name">XAMPP</h3>
                <span class="skill-category">Database</span>
            </div>
        </div>

        <!-- Tools Skills -->
        <div class="skill-card mix tools" data-category="tools">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-code"></i>
                </div>
                <h3 class="skill-name">VS Code</h3>
                <span class="skill-category">Tools</span>
            </div>
        </div>

        <div class="skill-card mix tools" data-category="tools">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-code-branch"></i>
                </div>
                <h3 class="skill-name">Antigravity</h3>
                <span class="skill-category">Tools</span>
            </div>
        </div>

        <div class="skill-card mix tools" data-category="tools">
            <div class="card-bg"></div>
            <div class="orbit-ring"><div class="orbit-dot"></div></div>
            <div class="skill-card-content">
                <div class="skill-icon">
                    <i class="fas fa-brain"></i>
                </div>
                <h3 class="skill-name">IntelliJ IDEA</h3>
                <span class="skill-category">Tools</span>
            </div>
        </div>

        <!-- No Results Message -->
        <div class="no-results mix" id="noResults">
            <i class="fas fa-meteor"></i>
            <p>No skills found in this category</p>
        </div>
    </div>
</section>
@endsection

@section('scripts')
<!-- MixItUp JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize MixItUp
        const container = document.getElementById('skillsContainer');
        
        if (container) {
            const mixer = mixitup(container, {
                selectors: {
                    target: '.mix',
                    control: '[data-filter]'
                },
                animation: {
                    duration: 400,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    effects: 'fade translateY(-20px)',
                    effectsIn: 'fade translateY(0)',
                    effectsOut: 'fade translateY(30px)'
                },
                callbacks: {
                    onMixStart: function() {
                        // Adjust container height to prevent footer jumping
                        const skillsSection = document.querySelector('.skills-section');
                        if (skillsSection) {
                            const currentHeight = skillsSection.offsetHeight;
                            skillsSection.style.minHeight = currentHeight + 'px';
                        }
                    },
                    onMixEnd: function() {
                        // Reset min-height after animation
                        setTimeout(() => {
                            const skillsSection = document.querySelector('.skills-section');
                            if (skillsSection) {
                                skillsSection.style.minHeight = '';
                            }
                            
                            // Re-trigger animations for visible cards
                            const visibleCards = document.querySelectorAll('.skill-card.mix-target-enter-active');
                            visibleCards.forEach((card, index) => {
                                card.style.animation = 'none';
                                card.offsetHeight; // Trigger reflow
                                card.style.animation = `cardAppear 0.5s ease forwards`;
                                card.style.animationDelay = `${index * 0.05}s`;
                            });
                        }, 450);
                    }
                }
            });

            // Handle filter button click
            const filterButtons = document.querySelectorAll('.filter-btn');
            const noResults = document.getElementById('noResults');

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');

                    // Get filter value
                    const filter = this.getAttribute('data-filter');
                    
                    // Check if there are visible results (not including noResults)
                    setTimeout(() => {
                        const visibleCards = container.querySelectorAll('.mix:not(.no-results)[style*="display: block"], .mix:not(.no-results):not([style*="display: none"])');
                        
                        if (visibleCards.length === 0 && filter !== 'all') {
                            if (noResults) {
                                noResults.style.display = 'block';
                            }
                        } else {
                            if (noResults) {
                                noResults.style.display = 'none';
                            }
                        }
                    }, 500);
                });
            });

            // Add glare effect on mouse move
            const skillCards = document.querySelectorAll('.skill-card');
            
            skillCards.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const glareBefore = card.querySelector('::before');
                    const glareAfter = card.querySelector('::after');
                    
                    // Update glare position based on mouse
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                    
                    // Rotate card slightly towards mouse
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (x - centerX) / 20;
                    
                    card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
                });
                
                card.addEventListener('mouseleave', function() {
                    card.style.transform = '';
                    card.style.setProperty('--mouse-x', '50%');
                    card.style.setProperty('--mouse-y', '50%');
                });
            });
        }
    });
</script>
@endsection