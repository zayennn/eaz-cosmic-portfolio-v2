document.addEventListener('DOMContentLoaded', () => {
    // ========== Canvas Partikel Bintang ==========
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');
    let stars = [], maxStars = 120;
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function createStars() {
        stars = [];
        for (let i = 0; i < maxStars; i++) {
            stars.push({
                x: Math.random() * canvas.width, y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.3,
                speedX: (Math.random() - 0.5) * 0.25,
                speedY: (Math.random() - 0.5) * 0.25,
                opacity: Math.random() * 0.7 + 0.2,
            });
        }
    }
    createStars();
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
            ctx.fill();
            star.x += star.speedX; star.y += star.speedY;
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;
        });
        requestAnimationFrame(drawStars);
    }
    drawStars();

    // ========== Navbar Scroll Effect ==========
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ========== Hamburger Menu ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });

    // ========== Smooth Scroll ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ========== Fade-in Observer ==========
    const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });
    faders.forEach(el => observer.observe(el));

    // ========== Typing Effect ==========
    const typingEl = document.getElementById('typing-role');
    const roles = ["Problem Solver", "Creative Thinker"];
    let roleIndex = 0, charIndex = 0, isDeleting = false, speed = 100;
    function typeLoop() {
        const current = roles[roleIndex];
        if (typingEl) {
            typingEl.textContent = current.substring(0, charIndex);
            if (!isDeleting && charIndex < current.length) {
                charIndex++;
                speed = 120;
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                speed = 60;
            } else if (!isDeleting && charIndex === current.length) {
                speed = 1500; isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false; roleIndex = (roleIndex + 1) % roles.length;
                speed = 300;
            }
        }
        setTimeout(typeLoop, speed);
    }
    if (typingEl) typeLoop();
});