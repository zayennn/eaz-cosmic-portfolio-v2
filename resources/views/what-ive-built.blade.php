@extends('layouts.app')

@section('title', 'What I\'ve Built')

@section('content')
<section class="projects-page">
    <div class="projects-header">
        <div class="projects-badge">
            <i class="fas fa-star"></i> Project Galaxy
        </div>
        <h1 class="projects-title">
            What I've <span class="highlight">Built</span>
        </h1>
        <p class="projects-subtitle">
            Explore my projects orbiting the sun • Scroll to zoom
        </p>
    </div>

    <div class="filter-tabs">
        <button class="filter-tab active" data-filter="all">
            <span class="filter-dot all"></span> All
        </button>
        <button class="filter-tab" data-filter="personal">
            <span class="filter-dot personal"></span> Personal
        </button>
        <button class="filter-tab" data-filter="freelance">
            <span class="filter-dot freelance"></span> Freelance
        </button>
        <button class="filter-tab" data-filter="certification">
            <span class="filter-dot certification"></span> Certifications
        </button>
    </div>

    <div class="orrery-wrapper">
        <div class="orrery-container" id="orreryContainer">
            <!-- Orbit Rings -->
            <div class="orbit-ring r1"></div>
            <div class="orbit-ring r2"></div>
            <div class="orbit-ring r3"></div>
            <div class="orbit-ring r4"></div>
            
            <!-- Central Sun -->
            <div class="central-sun">
                <div class="sun-glow"></div>
                <div class="sun-core">
                    <div class="sun-label">MY<br>WORK</div>
                </div>
            </div>

            <!-- Zoom Controls -->
            <div class="zoom-controls">
                <button class="zoom-btn" id="zoomIn" title="Zoom In"><i class="fas fa-plus"></i></button>
                <button class="zoom-btn" id="zoomOut" title="Zoom Out"><i class="fas fa-minus"></i></button>
                <button class="zoom-btn" id="resetView" title="Reset"><i class="fas fa-expand"></i></button>
            </div>
        </div>
    </div>

    <!-- Detail Modal Overlay -->
    <div class="detail-overlay" id="detailOverlay">
        <div class="detail-modal">
            <button class="detail-close" id="closeDetail"><i class="fas fa-times"></i></button>
            <div class="detail-image" id="detailImage">
                <img src="" alt="Project Preview">
                <div class="detail-image-overlay"></div>
            </div>
            <div class="detail-content">
                <span class="detail-type-badge" id="detailType"></span>
                <h3 class="detail-title" id="detailTitle"></h3>
                <p class="detail-desc" id="detailDesc"></p>
                <div class="detail-tech" id="detailTech"></div>
            </div>
        </div>
    </div>
</section>
@endsection