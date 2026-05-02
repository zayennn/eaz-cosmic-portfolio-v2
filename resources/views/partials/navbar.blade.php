<nav class="navbar" id="navbar">
    <div class="nav-container">
        <a href="{{ route('home') }}" class="nav-logo">
            <span class="logo-text">EAZ</span>
        </a>

        <!-- Desktop Menu -->
        <div class="nav-menu" id="navMenu">
            <a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}">Me, Basically</a>
            <a href="{{ route('what-i-use') }}" class="nav-link {{ request()->routeIs('what-i-use') ? 'active' : '' }}">What I Use</a>
            <a href="{{ route('what-ive-built') }}" class="nav-link {{ request()->routeIs('what-ive-built') ? 'active' : '' }}">What I've Built</a>
            <a href="{{ route('what-im-into') }}" class="nav-link {{ request()->routeIs('what-im-into') ? 'active' : '' }}">What I'm Into</a>
            <a href="" class="nav-link {{ request()->routeIs('behind-the-code') ? 'active' : '' }}">Behind The Code</a>
            <a href="" class="nav-link {{ request()->routeIs('get-in-touch') ? 'active' : '' }}">Get In Touch</a>
        </div>

        <a href="#" class="nav-cv-btn">Download CV</a>

        <!-- Hamburger Button -->
        <label class="hamburger" id="hamburger">
            <input type="checkbox" id="hamburger-checkbox">
            <svg viewBox="0 0 32 32">
                <path class="line line-top-bottom" 
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                </path>
                <path class="line" d="M7 16 27 16"></path>
            </svg>
        </label>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu-overlay" id="mobileMenuOverlay">
            <!-- Cosmic Particles -->
            <div class="mobile-menu-particles">
                <span class="mobile-menu-particle"></span>
                <span class="mobile-menu-particle"></span>
                <span class="mobile-menu-particle"></span>
                <span class="mobile-menu-particle"></span>
                <span class="mobile-menu-particle"></span>
            </div>
            
            <div class="mobile-menu-content">
                <a href="{{ route('home') }}" class="mobile-nav-link {{ request()->routeIs('home') ? 'active' : '' }}">Me, Basically</a>
                <a href="{{ route('what-i-use') }}" class="mobile-nav-link {{ request()->routeIs('what-i-use') ? 'active' : '' }}">What I Use</a>
                <a href="{{ route('what-ive-built') }}" class="mobile-nav-link {{ request()->routeIs('what-ive-built') ? 'active' : '' }}">What I've Built</a>
                <a href="{{ route('what-im-into') }}" class="mobile-nav-link {{ request()->routeIs('what-im-into') ? 'active' : '' }}">What I'm Into</a>
                <a href="" class="mobile-nav-link {{ request()->routeIs('behind-the-code') ? 'active' : '' }}">Behind The Code</a>
                <a href="" class="mobile-nav-link {{ request()->routeIs('get-in-touch') ? 'active' : '' }}">Get In Touch</a>
                <a href="#" class="mobile-cv-btn">
                    Download CV 
                    <i class="fa-solid fa-download"></i>
                </a>
            </div>
        </div>
    </div>
</nav>