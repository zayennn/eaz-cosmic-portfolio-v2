<nav class="navbar" id="navbar">
    <div class="nav-container">
        <a href="#hero" class="nav-logo">
            <span class="logo-text">EAZ</span>
        </a>

        <div class="nav-menu" id="navMenu">
            <a href="/" class="nav-link {{ request()->is('/') ? 'active' : '' }}">Me, Basically</a>
            <a href="/" class="nav-link {{ request()->is('/what-i-use') ? 'active' : '' }}">What I Use</a>
            <a href="/" class="nav-link {{ request()->is('/what-ive-built') ? 'active' : '' }}">What I've Built</a>
            <a href="/" class="nav-link {{ request()->is('/what-im-into') ? 'active' : '' }}">What I'm Into</a>
            <a href="/" class="nav-link {{ request()->is('/behind-the-code') ? 'active' : '' }}">Behind The Code</a>
            <a href="/" class="nav-link {{ request()->is('/get-in-touch') ? 'active' : '' }}">Get In Touch</a>
        </div>

        <a href="#" class="nav-cv-btn">Download CV</a>

        <div class="hamburger" id="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</nav>