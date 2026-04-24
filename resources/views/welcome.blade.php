@extends('layouts.app')

@section('content')
    <!-- Hero Section -->
    <section id="hero" class="hero">
        <div class="hero-grid">
            <div class="hero-left fade-in">
                <span class="badge-available">Available for work</span>
                <p class="hero-greeting">Hello, I'm</p>
                <h1 class="hero-name glow-text">Elang Atha Zahran</h1>
                <div class="hero-role-wrapper">
                    <span class="hero-role static-text">Junior Fullstack Developer |</span>
                    <span class="hero-role typing-text" id="typing-role"></span>
                </div>
                <p class="hero-desc">
                    Building exceptional digital experiences with modern web technologies. Specializing in responsive design, clean architecture, and scalable solutions.
                </p>
                <div class="hero-cta">
                    <a href="#contact" class="btn-primary">Get in Touch</a>
                    <a href="#projects" class="btn-outline">View Projects</a>
                </div>
                <div class="hero-social">
                    <a href="#"><i class="icon-instagram"></i></a>
                    <a href="#"><i class="icon-tiktok"></i></a>
                    <a href="#"><i class="icon-linkedin"></i></a>
                    <a href="#"><i class="icon-github"></i></a>
                </div>
            </div>
            <div class="hero-right fade-in">
                <div class="code-block">
                    <div class="code-header">Developer.java</div>
                    <pre><code><span class="keyword">public class</span> <span class="class-name">Developer</span> {
    <span class="keyword">String</span> name = <span class="string">"Elang Atha Zahran"</span>;
    <span class="keyword">String</span> role = <span class="string">"Junior Fullstack Developer"</span>;
    <span class="keyword">String[]</span> skills = {
        <span class="string">"React.js"</span>, <span class="string">"Laravel"</span>, <span class="string">"JavaScript"</span>, <span class="string">"PHP"</span>,
        <span class="string">"Python"</span>, <span class="string">"Flask"</span>, <span class="string">"Django"</span>, <span class="string">"MySQL"</span>,
        <span class="string">"Framer Motion"</span>, <span class="string">"Tailwind CSS"</span>
    };
    <span class="keyword">String</span> passion = <span class="string">"Creating exceptional digital experiences"</span>;

    <span class="keyword">public static void</span> main(<span class="keyword">String[]</span> args) {
        System.out.println(<span class="string">"Let's build something amazing!"</span>);
        <span class="comment">// Ready to collaborate?</span>
        <span class="keyword">String</span> contact = <span class="string">"athazahranel@gmail.com"</span>;
    }
}</code></pre>
                </div>
            </div>
        </div>
        <div class="scroll-down">
            <a href="#about" class="scroll-link">Scroll Down <span class="arrow">↓</span></a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="about-grid">
            <div class="about-left fade-in">
                <h2 class="big-logo">EAZ</h2>
                <ul class="about-nav-inline">
                    <li class="active"><a href="#about">Me, Basically</a></li>
                    <li><a href="#about-tech">What I Use</a></li>
                    <li><a href="#projects">What I've Built</a></li>
                    <li><a href="#interests">What I'm Into</a></li>
                    <li><a href="#behind-code">Behind the Code</a></li>
                    <li><a href="#contact">Get in Touch</a></li>
                    <li><a href="#" class="btn-download-cv-small">Download CV</a></li>
                </ul>
                <div class="about-mini-hero">
                    <span class="badge-available">Available for work</span>
                    <p class="hero-greeting">Hello, I'm</p>
                    <h1 class="hero-name glow-text">Elang Atha Zahran</h1>
                    <p class="hero-role-static">Junior Fullstack Developer |</p>
                    <p class="hero-desc">Building exceptional digital experiences...</p>
                    <div class="hero-cta">
                        <a href="#contact" class="btn-primary">Get in Touch</a>
                        <a href="#projects" class="btn-outline">View Projects</a>
                    </div>
                    <div class="scroll-down">
                        <a href="#about-me-detail" class="scroll-link">Scroll Down <span class="arrow">↓</span></a>
                    </div>
                </div>
                <div class="about-code-block">
                    <div class="code-header">portfolio.java</div>
                    <pre><code><span class="keyword">const</span> developer = {
    <span class="property">name</span>: <span class="string">"Elang Atha Zahran"</span>,
    <span class="property">role</span>: <span class="string">"Junior Fullstack Developer"</span>,
    <span class="property">skills</span>: [
        <span class="string">"React.js"</span>, <span class="string">"Laravel"</span>, <span class="string">"JavaScript"</span>, <span class="string">"PHP"</span>,
        <span class="string">"Python"</span>, <span class="string">"Flask"</span>, <span class="string">"Django"</span>, <span class="string">"MySQL"</span>,
        <span class="string">"Framer Motion"</span>, <span class="string">"Tailwind CSS"</span>
    ],
    <span class="property">passion</span>: <span class="string">"Creating exceptional digital experiences"</span>
};
console.log(<span class="string">"Let's build something amazing!"</span>);
<span class="comment">// Ready to collaborate?</span>
<span class="keyword">const</span> contact = <span class="string">"athazahranel@gmail.com"</span>;</code></pre>
                </div>
                <div class="tech-stack">
                    <h3>Tech Stack This Portfolio</h3>
                    <ul>
                        <li>React</li><li>JavaScript</li><li>CSS3</li>
                        <li>Framer Motion</li><li>Tilt.js</li>
                    </ul>
                </div>
                <div class="about-detail" id="about-me-detail">
                    <h3>About Me</h3>
                    <p>As a passionate Fullstack Web Developer, I specialize in building scalable, responsive, and user-friendly web applications...</p>
                    <ul class="about-info">
                        <li><strong>Name:</strong> Elang Atha Zahran</li>
                        <li><strong>Location:</strong> Indonesia</li>
                        <li><strong>Email:</strong> athazahranel@gmail.com</li>
                        <li><strong>Availability:</strong> Open to Opportunities</li>
                    </ul>
                    <a href="#" class="btn-download-cv-small">Download CV</a>
                </div>
            </div>
            <div class="about-right fade-in">
                <img src="{{ asset('images/profile.jpg') }}" alt="Elang Atha Zahran">
            </div>
        </div>
    </section>

    <!-- Education & Experience Section -->
    <section id="education-experience" class="edu-exp">
        <div class="edu-exp-grid">
            <div class="education-column fade-in">
                <h2>Education</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="year">2018 - 2021</span>
                        <h3>SMK Wikrama Bogor</h3>
                        <p class="major">As PPLG</p>
                        <p>The Software and Game Engineering Department provides website and application development skills, as well as practical experience in frontend and backend technologies.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="year">August - December 2024</span>
                        <h3>Global Gengou Gakko</h3>
                        <p class="major">Learning Japanese Language</p>
                        <p>The intensive Japanese course improved my skills to N4 level, covering grammar, vocabulary, speaking and writing.</p>
                    </div>
                </div>
            </div>
            <div class="experience-column fade-in">
                <h2>Experience</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="year">July - December 2023</span>
                        <h3>Frontend Web Developer Intern</h3>
                        <p class="org">PT. Kreasi Sawala Nusantara</p>
                        <p>Developed and optimized UI/UX of websites using HTML, CSS, JavaScript.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="year">May 2024</span>
                        <h3>Competence Test</h3>
                        <p class="org">SMK Wikrama Bogor</p>
                        <p>Created a website with Laravel as graduation competency evaluation.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="year">March 2024 - Present</span>
                        <h3>Freelance</h3>
                        <p class="org">Junior Web Developer</p>
                        <p>Focused on responsive design and client communication for various projects.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection