<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Kosmik</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <!-- Canvas untuk efek partikel bintang -->
    <canvas id="starCanvas"></canvas>

    <!-- Navbar -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#hero" class="nav-logo">NamaKamu</a>
            <div class="nav-menu" id="navMenu">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#experience" class="nav-link">Experience</a>
            </div>
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
    <footer class="footer">
        <div class="footer-container">
            <p>&copy; 2026 NamaKamu. All rights reserved.</p>
            <div class="social-icons">
                <a href="#" aria-label="GitHub"><i class="icon-github"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="icon-linkedin"></i></a>
                <a href="#" aria-label="Instagram"><i class="icon-instagram"></i></a>
            </div>
        </div>
    </footer>

    <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>