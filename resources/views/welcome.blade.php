@extends('layouts.app')

@section('content')
    <section id="home" class="hero fade-in">
        <div class="hero-grid">
            <div class="hero-left">
                <p class="hero-availability">
                    <span class="status-dot"></span> Available for work
                </p>
                <p class="hero-greeting">Hello, I'm</p>
                <h1 class="hero-name">
                    Elang Atha <span>Zahran</span>
                </h1>
                <p class="hero-role">
                    <span id="typing-text"></span><span class="cursor">|</span>
                </p>
                <p class="hero-description">
                    Building exceptional digital experiences with modern web technologies.
                    Specializing in responsive design, clean architecture, and scalable solutions.
                </p>
                <div class="hero-buttons">
                    <a href="#footer" class="cta-btn primary">Get in Touch</a>
                    <a href="#experience" class="cta-btn secondary">View Projects</a>
                </div>
                <div class="hero-social">
                    <div class="instagram">
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="tiktok">
                        <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                    </div>
                    <div class="linkedin">
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="github">
                        <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>

            <div class="hero-right">
                <div class="code-container">
                    <div class="code-header">
                        <span class="code-dot red"></span>
                        <span class="code-dot yellow"></span>
                        <span class="code-dot green"></span>
                        <span class="code-filename">Developer.java</span>
                    </div>
                    <div class="code-body">
                        <pre><code><span class="keyword">public class</span> <span class="class-name">Developer</span> {
    <span class="keyword">private</span> <span class="type">String</span> <span class="variable">name</span> = <span class="string">"Elang Atha Zahran"</span>;
    <span class="keyword">private</span> <span class="type">String</span> <span class="variable">role</span> = <span class="string">"Junior Fullstack Developer"</span>;
    <span class="keyword">private</span> <span class="type">String[]</span> <span class="variable">skills</span> = {
        <span class="string">"React.js"</span>, <span class="string">"Laravel"</span>, <span class="string">"JavaScript"</span>, <span class="string">"PHP"</span>,
        <span class="string">"Python"</span>, <span class="string">"Flask"</span>, <span class="string">"Django"</span>, <span class="string">"MySQL"</span>,
        <span class="string">"Java"</span>, <span class="string">"Git"</span>, <span class="string">"Github"</span>{{-- <span class="string">"Tailwind CSS"</span> --}}
    };
    <span class="keyword">private</span> <span class="type">String</span> <span class="variable">passion</span> = <span class="string">"Creating exceptional digital experiences"</span>;

    <span class="keyword">public void</span> <span class="method">displayInfo</span>() {
        <span class="type">System</span>.out.println(<span class="string">"Let's build something amazing!"</span>);
    }
}

<span class="comment">// Ready to collaborate?</span>
<span class="type">String</span> <span class="variable">contact</span> = <span class="string">"athazahranel@gmail.com"</span>;</code></pre>
                    </div>
                </div>
            </div>
        </div>

        <a href="#about" class="scroll-down">
            <span>Scroll Down</span>
            <i class="fas fa-chevron-down"></i>
        </a>
    </section>

    <section id="about" class="about fade-in">
        <h2 class="section-title">
            About <span>Me</span>
        </h2>
        <div class="section-devider"></div>
        <div class="about-grid">
            <div class="about-left">
                <h3 class="about-heading">
                    I'm a passionate <span>web developer</span>
                </h3>
                <p>
                    As a passionate Fullstack Web Developer, I specialize in building scalable,
                    responsive, and user-friendly web applications. I work with a modern tech stack
                    including HTML5, CSS3, Bootstrap 5, JavaScript, PHP, Laravel, and React.js.
                    I take pride in writing clean, efficient code and creating seamless user experiences.
                </p>
                <p>
                    I thrive in team environments where collaboration and continuous learning are key.
                    Keeping up with the latest technologies and best practices is part of my daily routine,
                    ensuring that the solutions I develop are not only functional but also future-ready.
                    Whether it's front-end design or back-end logic, I enjoy bringing ideas to life through
                    code and solving real-world problems with smart digital solutions. I'm always eager to
                    learn new technologies and take on new challenges, and I'm committed to delivering
                    high-quality results to my clients.
                </p>
                <div class="about-details">
                    <div class="detail-item">
                        <span class="detail-label">Name:</span>
                        <span class="detail-value">Elang Atha Zahran</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Location:</span>
                        <span class="detail-value">Indonesia</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Email:</span>
                        <span class="detail-value">athazahranel@gmail.com</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Availability:</span>
                        <span class="detail-value status-open">Open to Opportunities</span>
                    </div>
                </div>
                <a href="#" class="cta-btn primary">Download CV</a>
            </div>

            <div class="about-right">
                <div class="about-image-wrapper">
                    <img src="{{ asset('images/hero-vector.svg') }}" alt="Elang Atha Zahran">
                    <div class="image-glow"></div>
                </div>
            </div>
        </div>
    </section>

    <section id="education-experience" class="edu-exp fade-in">
        <h2 class="section-title">
            Education & <span>Experience</span>
        </h2>
        <div class="section-devider"></div>
        <div class="edu-exp-grid">
            <div class="education-column">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">2018 - 2021</span>
                        <h3>SMK Wikrama Bogor</h3>
                        <p class="timeline-major">As PPLG</p>
                        <p>The Software and Game Engineering Department at SMK Wikrama Bogor provides website and
                            application development skills, as well as practical experience in frontend and backend
                            technologies.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">August - December 2024</span>
                        <h3>Global Gengou Gakko</h3>
                        <p class="timeline-major">Learning Japanese Language</p>
                        <p>The intensive Japanese course at Global Gengou Gakko improved my Japanese language skills to N4
                            level, covering grammar, vocabulary, and speaking and writing skills.</p>
                    </div>
                </div>
            </div>

            <div class="experience-column">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">July - December 2023</span>
                        <h3>Frontend Web Developer Intern</h3>
                        <p class="timeline-company">PT. Kreasi Sawala Nusantara</p>
                        <p>As a Frontend Intern at PT Kreasi Sawala Nusantara, I develop and optimize the appearance and
                            user experience of websites using HTML, CSS, and JavaScript.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">May 2024</span>
                        <h3>Competence Test</h3>
                        <p class="timeline-company">SMK Wikrama Bogor</p>
                        <p>Taking the Competency Test by creating a website using Laravel as an evaluation of the
                            eligibility of graduating from SMK. This process involves designing, developing, and completing
                            projects according to industry standards.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">March 2024 - Present</span>
                        <h3>Freelance</h3>
                        <p class="timeline-company">Junior Web Developer</p>
                        <p>As a freelance web developer, I work on website development projects with a focus on responsive
                            design and optimal user experience, as well as communicating directly with clients.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
