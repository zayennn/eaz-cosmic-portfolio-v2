@extends('layouts.app')

@section('content')
    <!-- Hero Section -->
    <section id="hero" class="hero fade-in">
        <div class="hero-content">
            <h1 class="hero-name">Nama Kamu</h1>
            <p class="hero-role">Fullstack Developer</p>
            <p class="hero-tagline">Membangun solusi digital dengan kode yang bersih dan kosmik.</p>
            <a href="#about" class="cta-button">Lihat Portfolio</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about fade-in">
        <h2 class="section-title">Tentang Saya</h2>
        <div class="about-container">
            <div class="about-image">
                <img src="{{ asset('images/profile.jpg') }}" alt="Foto Profil">
            </div>
            <div class="about-text">
                <p>Saya seorang pengembang perangkat lunak yang bersemangat menciptakan aplikasi web modern dan efisien. Dengan pengalaman di berbagai teknologi, saya fokus pada pengalaman pengguna yang mulus dan performa tinggi.</p>
                <h3>Skill</h3>
                <ul class="skill-list">
                    <li>Laravel / PHP</li>
                    <li>Vue.js / React</li>
                    <li>Tailwind CSS</li>
                    <li>MySQL / PostgreSQL</li>
                    <li>Docker / Git</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="education fade-in">
        <h2 class="section-title">Pendidikan</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>Universitas Teknologi Nusantara</h3>
                    <span class="timeline-year">2019 - 2023</span>
                    <p>Sarjana Teknik Informatika</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>SMA Negeri 1 Galaxy</h3>
                    <span class="timeline-year">2016 - 2019</span>
                    <p>Jurusan IPA</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience fade-in">
        <h2 class="section-title">Pengalaman</h2>
        <div class="exp-cards">
            <div class="exp-card fade-in">
                <div class="exp-header">
                    <h3>PT Inovasi Digital</h3>
                    <span class="exp-year">2024 - Sekarang</span>
                </div>
                <p class="exp-role">Fullstack Developer</p>
                <p>Mengembangkan dan merawat sistem manajemen proyek internal menggunakan Laravel dan Vue.js. Meningkatkan efisiensi tim hingga 30%.</p>
            </div>
            <div class="exp-card fade-in">
                <div class="exp-header">
                    <h3>Freelance Web Project</h3>
                    <span class="exp-year">2023 - 2024</span>
                </div>
                <p class="exp-role">Web Developer</p>
                <p>Merancang dan membangun website toko online, company profile, dan dashboard admin untuk berbagai klien.</p>
            </div>
        </div>
    </section>
@endsection