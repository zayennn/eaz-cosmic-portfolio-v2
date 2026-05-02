@extends('layouts.app')

@section('title', 'What I\'ve Built')

@section('content')
    <section class="projects-page">
        <div class="projects-header">
            <div class="projects-badge">
                Project Galaxy
            </div>
            <h1 class="projects-title">
                What I've <span class="highlight">Built</span>
            </h1>
            <p class="projects-subtitle">
                Explore my projects orbiting the sun
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
                <div class="orbit-ring r1"></div>
                <div class="orbit-ring r2"></div>
                <div class="orbit-ring r3"></div>
                <div class="orbit-ring r4"></div>

                <div class="central-sun">
                    <div class="sun-glow"></div>
                    <div class="sun-core">
                        <div class="sun-label">MY<br>WORK</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- zoom controls -->
        <div class="zoom-controls">
            <div class="control-group">
                <span class="control-label">Orrery</span>
                <button class="zoom-btn" id="zoomInOrrery" title="Zoom In Orrery"><i
                        class="fas fa-search-plus"></i></button>
                <button class="zoom-btn" id="zoomOutOrrery" title="Zoom Out Orrery"><i
                        class="fas fa-search-minus"></i></button>
                <button class="zoom-btn" id="resetOrrery" title="Reset Orrery"><i class="fas fa-compress"></i></button>
            </div>
            <div class="control-group">
                <span class="control-label">Planet</span>
                <button class="zoom-btn" id="zoomInPlanet" title="Zoom In Planet"><i
                        class="fas fa-circle-plus"></i></button>
                <button class="zoom-btn" id="zoomOutPlanet" title="Zoom Out Planet"><i
                        class="fas fa-circle-minus"></i></button>
                <button class="zoom-btn" id="resetPlanet" title="Reset Planet"><i class="fas fa-circle"></i></button>
            </div>
        </div>

        <!-- detail modal -->
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
                    <div class="detail-links" id="detailLinks"></div>
                </div>
            </div>
        </div>
    </section>
@endsection
