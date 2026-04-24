<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elang Atha Zahran — Portfolio Kosmik</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <canvas id="starCanvas"></canvas>

    <!-- Navbar -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#hero" class="nav-logo">
                <span class="glare-text">EAZ</span>
            </a>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#about" class="nav-link">Me, Basically</a></li>
                <li><a href="#about-tech" class="nav-link">What I Use</a></li>
                <li><a href="#projects" class="nav-link">What I've Built</a></li>
                <li><a href="#interests" class="nav-link">What I'm Into</a></li>
                <li><a href="#behind-code" class="nav-link">Behind the Code</a></li>
                <li><a href="#contact" class="nav-link">Get in Touch</a></li>
            </ul>
            <a href="#" class="btn-download-cv">Download CV</a>
            <div class="hamburger" id="hamburger">
                <span class="bar"></span><span class="bar"></span><span class="bar"></span>
            </div>
        </div>
    </nav>

    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-brand">
                <h3 class="footer-logo">EAZ</h3>
                <p>Junior Fullstack Developer passionate about creating exceptional digital experiences. Let's build something amazing together.</p>
            </div>
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#about">Me, Basically</a></li>
                    <li><a href="#about-tech">What I Use</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#behind-code">Behind the Code</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4>Get In Touch</h4>
                <p>athazahranel@gmail.com</p>
                <p>Indonesia, West Java</p>
                <p>+62 8778 8612 930</p>
                <a href="mailto:athazahranel@gmail.com" class="btn-send-email">Send Email</a>
            </div>
            <div class="footer-tech">
                <h4>Built with</h4>
                <ul>
                    <li>React Js</li><li>Framer Motion</li><li>CSS3</li>
                    <li>JavaScript</li><li>Git</li><li>GitHub</li><li>Vercel</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Elang Atha Zahran. All rights reserved.</p>
            <p class="footer-heart">Made with ❤️ and ☕</p>
        </div>
    </footer>

    <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>