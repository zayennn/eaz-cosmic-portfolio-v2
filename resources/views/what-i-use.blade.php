@extends('layouts.app')

@section('title', 'What I Use')

@section('content')
<section class="skills-page">
    <div class="nebula-layer">
        <div class="nebula-blob n1"></div>
        <div class="nebula-blob n2"></div>
        <div class="nebula-blob n3"></div>
        <div class="nebula-blob n4"></div>
    </div>

    <div class="skills-header">
        <div class="skills-badge">
            Tech Constellation
        </div>
        <h1 class="skills-title">
            What I <span class="highlight">Use</span>
        </h1>
        <p class="skills-subtitle">
            Each star represents a technology in my universe
        </p>
    </div>

    <div class="skills-grid">
        <div class="skills-sidebar">
            <button class="category-btn active" data-category="all">
                <div class="category-icon"><i class="fas fa-globe"></i></div>
                All Skills
                <span class="category-count">14</span>
            </button>
            <button class="category-btn" data-category="frontend">
                <div class="category-icon"><i class="fas fa-paint-brush"></i></div>
                Frontend
                <span class="category-count">6</span>
            </button>
            <button class="category-btn" data-category="backend">
                <div class="category-icon"><i class="fas fa-server"></i></div>
                Backend
                <span class="category-count">5</span>
            </button>
            <button class="category-btn" data-category="database">
                <div class="category-icon"><i class="fas fa-database"></i></div>
                Database
                <span class="category-count">1</span>
            </button>
            <button class="category-btn" data-category="tools">
                <div class="category-icon"><i class="fas fa-tools"></i></div>
                Tools
                <span class="category-count">2</span>
            </button>
        </div>

        <div class="skills-constellation">
            <canvas id="constellationCanvas"></canvas>
            <div class="skills-nodes" id="skillsNodes">
            </div>
        </div>

        <div class="skills-detail">
            <div class="detail-card" id="detailCard">
                <div class="detail-placeholder" id="detailPlaceholder">
                    <i class="fas fa-hand-pointer"></i>
                    <p>Click on any star to explore<br>the technology in detail</p>
                </div>
                
                <div class="detail-content" id="detailContent">
                </div>
            </div>
        </div>
    </div>
</section>
@endsection