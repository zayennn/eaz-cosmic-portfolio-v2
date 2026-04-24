<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elang Atha Zahran | Portfolio</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <!-- Font Awesome untuk icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>

<body>
    <!-- Canvas untuk efek partikel bintang -->
    <canvas id="starCanvas"></canvas>

    <!-- Navbar -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <!-- Brand dengan efek glare gradient -->
            <a href="#hero" class="nav-logo">
                <span class="logo-text">EAZ</span>
            </a>

            <!-- Nav Menu (Center) -->
            <div class="nav-menu" id="navMenu">
                <a href="#home" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#footer" class="nav-link">Contact</a>
            </div>

            <!-- Download CV Button (Right) -->
            <a href="#" class="nav-cv-btn">Download CV</a>

            <!-- Hamburger Mobile -->
            <div class="hamburger" id="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Konten Utama -->
    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    <footer id="footer" class="footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-brand">
                    <h3 class="footer-logo">EAZ</h3>
                    <p>Junior Fullstack Developer passionate about creating exceptional digital experiences. Let's build
                        something amazing together.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">Me, Basically</a></li>
                        <li><a href="#about">What I Use</a></li>
                        <li><a href="#experience">Projects</a></li>
                        <li><a href="#about">Behind the Code</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Get In Touch</h4>
                    <p><i class="fas fa-envelope"></i> athazahranel@gmail.com</p>
                    <p><i class="fas fa-map-marker-alt"></i> Indonesia, West Java</p>
                    <p><i class="fas fa-phone"></i> +62 8778 8612 930</p>
                    <a href="mailto:athazahranel@gmail.com" class="send-email-btn">Send Email</a>
                </div>
            </div>
            <div class="footer-built">
                <p>Built with: React Js • Framer Motion • CSS3 • JavaScript • Git • GitHub • Vercel</p>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Elang Atha Zahran. All rights reserved.</p>
                <p>Made with ❤️ and ☕</p>
            </div>
        </div>
    </footer>

    <script src="{{ asset('js/script.js') }}"></script>
</body>

</html>