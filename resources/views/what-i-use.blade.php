@extends('layouts.app')

@section('title', 'What I Use - Elang Atha Zahran')

@section('content')
    <div class="skills-page">
        <!-- Cosmic Background Elements -->
        <div class="cosmic-bg">
            <div class="nebula nebula-1"></div>
            <div class="nebula nebula-2"></div>
            <div class="nebula nebula-3"></div>
            <div class="cosmic-dust"></div>
        </div>

        <div class="skills-container">
            <!-- Header -->
            <div class="skills-header">
                <h1 class="skills-title">
                    What I <span class="gradient-text">Use</span>
                </h1>
                <p class="skills-subtitle">
                    A curated collection of technologies, tools, and frameworks that power my development workflow.
                    Each tool has been carefully selected to deliver the best digital experiences.
                </p>
            </div>

            <!-- Filter Buttons -->
            <div class="filter-container">
                <div class="filter-wrapper" id="filterWrapper">
                    <!-- Sliding background indicator -->
                    <div class="filter-slider" id="filterSlider"></div>

                    <button class="filter-btn active" data-category="all">
                        <i class="fas fa-globe"></i>
                        <span>All</span>
                        <div class="btn-glow"></div>
                    </button>
                    <button class="filter-btn" data-category="frontend">
                        <i class="fas fa-desktop"></i>
                        <span>Frontend</span>
                        <div class="btn-glow"></div>
                    </button>
                    <button class="filter-btn" data-category="backend">
                        <i class="fas fa-server"></i>
                        <span>Backend</span>
                        <div class="btn-glow"></div>
                    </button>
                    <button class="filter-btn" data-category="database">
                        <i class="fas fa-database"></i>
                        <span>Database</span>
                        <div class="btn-glow"></div>
                    </button>
                    <button class="filter-btn" data-category="tools">
                        <i class="fas fa-tools"></i>
                        <span>Tools</span>
                        <div class="btn-glow"></div>
                    </button>
                </div>
            </div>

            <!-- Skills Grid -->
            <div class="skills-grid" id="skillsGrid">
                <!-- Frontend Skills -->
                <div class="skill-card mix frontend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-html5"></i>
                        </div>
                        <div class="card-content">
                            <h3>HTML5</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 95%"></div>
                            </div>
                            <p class="skill-percentage">95%</p>
                            <span class="skill-tag">Markup Language</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix frontend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-css3-alt"></i>
                        </div>
                        <div class="card-content">
                            <h3>CSS3</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 90%"></div>
                            </div>
                            <p class="skill-percentage">90%</p>
                            <span class="skill-tag">Styling</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix frontend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-js"></i>
                        </div>
                        <div class="card-content">
                            <h3>JavaScript</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 85%"></div>
                            </div>
                            <p class="skill-percentage">85%</p>
                            <span class="skill-tag">Programming Language</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix frontend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-react"></i>
                        </div>
                        <div class="card-content">
                            <h3>React.js</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 80%"></div>
                            </div>
                            <p class="skill-percentage">80%</p>
                            <span class="skill-tag">Framework</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix frontend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-wind"></i>
                        </div>
                        <div class="card-content">
                            <h3>Tailwind CSS</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 85%"></div>
                            </div>
                            <p class="skill-percentage">85%</p>
                            <span class="skill-tag">CSS Framework</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix frontend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-bootstrap"></i>
                        </div>
                        <div class="card-content">
                            <h3>Bootstrap 5</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 88%"></div>
                            </div>
                            <p class="skill-percentage">88%</p>
                            <span class="skill-tag">CSS Framework</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix frontend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-magic"></i>
                        </div>
                        <div class="card-content">
                            <h3>Framer Motion</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 75%"></div>
                            </div>
                            <p class="skill-percentage">75%</p>
                            <span class="skill-tag">Animation Library</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix frontend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <div class="card-content">
                            <h3>GSAP</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 72%"></div>
                            </div>
                            <p class="skill-percentage">72%</p>
                            <span class="skill-tag">Animation Library</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <!-- Backend Skills -->
                <div class="skill-card mix backend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-php"></i>
                        </div>
                        <div class="card-content">
                            <h3>PHP</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 85%"></div>
                            </div>
                            <p class="skill-percentage">85%</p>
                            <span class="skill-tag">Programming Language</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix backend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-laravel"></i>
                        </div>
                        <div class="card-content">
                            <h3>Laravel</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 82%"></div>
                            </div>
                            <p class="skill-percentage">82%</p>
                            <span class="skill-tag">Framework PHP</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix backend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-python"></i>
                        </div>
                        <div class="card-content">
                            <h3>Python</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 78%"></div>
                            </div>
                            <p class="skill-percentage">78%</p>
                            <span class="skill-tag">Programming Language</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix backend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-flask"></i>
                        </div>
                        <div class="card-content">
                            <h3>Flask</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 70%"></div>
                            </div>
                            <p class="skill-percentage">70%</p>
                            <span class="skill-tag">Micro Framework</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix backend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-python"></i>
                        </div>
                        <div class="card-content">
                            <h3>Django</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 65%"></div>
                            </div>
                            <p class="skill-percentage">65%</p>
                            <span class="skill-tag">Framework Python</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix backend">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="card-content">
                            <h3>REST API</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 80%"></div>
                            </div>
                            <p class="skill-percentage">80%</p>
                            <span class="skill-tag">Architecture</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <!-- Database Skills -->
                <div class="skill-card mix database">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <div class="card-content">
                            <h3>MySQL</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 85%"></div>
                            </div>
                            <p class="skill-percentage">85%</p>
                            <span class="skill-tag">Relational Database</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix database">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <div class="card-content">
                            <h3>MongoDB</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 60%"></div>
                            </div>
                            <p class="skill-percentage">60%</p>
                            <span class="skill-tag">NoSQL Database</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix database">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-fire"></i>
                        </div>
                        <div class="card-content">
                            <h3>Firebase</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 70%"></div>
                            </div>
                            <p class="skill-percentage">70%</p>
                            <span class="skill-tag">Backend as Service</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix database">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-server"></i>
                        </div>
                        <div class="card-content">
                            <h3>PostgreSQL</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 55%"></div>
                            </div>
                            <p class="skill-percentage">55%</p>
                            <span class="skill-tag">Relational Database</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <!-- Tools Skills -->
                <div class="skill-card mix tools">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-git-alt"></i>
                        </div>
                        <div class="card-content">
                            <h3>Git</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 88%"></div>
                            </div>
                            <p class="skill-percentage">88%</p>
                            <span class="skill-tag">Version Control</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix tools">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div class="card-content">
                            <h3>GitHub</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 85%"></div>
                            </div>
                            <p class="skill-percentage">85%</p>
                            <span class="skill-tag">Code Hosting</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix tools">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="card-content">
                            <h3>VS Code</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 90%"></div>
                            </div>
                            <p class="skill-percentage">90%</p>
                            <span class="skill-tag">Code Editor</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix tools">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fab fa-figma"></i>
                        </div>
                        <div class="card-content">
                            <h3>Figma</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 75%"></div>
                            </div>
                            <p class="skill-percentage">75%</p>
                            <span class="skill-tag">Design Tool</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix tools">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-terminal"></i>
                        </div>
                        <div class="card-content">
                            <h3>Command Line</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 80%"></div>
                            </div>
                            <p class="skill-percentage">80%</p>
                            <span class="skill-tag">CLI</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>

                <div class="skill-card mix tools">
                    <div class="card-inner">
                        <div class="card-glare"></div>
                        <div class="card-border-glow"></div>
                        <div class="card-icon">
                            <i class="fas fa-cloud"></i>
                        </div>
                        <div class="card-content">
                            <h3>Vercel</h3>
                            <div class="skill-level">
                                <div class="level-bar" style="width: 70%"></div>
                            </div>
                            <p class="skill-percentage">70%</p>
                            <span class="skill-tag">Deployment</span>
                        </div>
                        <div class="card-particles">
                            <span class="particle"></span>
                            <span class="particle"></span>
                            <span class="particle"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
