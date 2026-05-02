@extends('layouts.app')

@section('title', 'What I\'m Into')

@section('content')
    <section class="into-page" id="intoPage">
        <canvas id="starMapCanvas"></canvas>

        <div class="into-header-overlay">
            <div class="into-badge">
                <i class="fas fa-star"></i> Explore My Universe
            </div>
            <h1 class="into-title">
                What I'm <span class="highlight">Into</span>
            </h1>
            <p class="into-hint">
                <i class="fas fa-mouse"></i> Drag to explore &bull; Use buttons to zoom &bull; Click stars to discover
            </p>
        </div>

        <div class="category-legend" id="categoryLegend">
            <button class="legend-item active" data-category="all">
                <span class="legend-dot all"></span> All
            </button>
            <button class="legend-item" data-category="gaming">
                <span class="legend-dot gaming"></span> Gaming
            </button>
            <button class="legend-item" data-category="music">
                <span class="legend-dot music"></span> Music
            </button>
        </div>

        <div class="map-controls">
            <button class="map-btn" id="zoomIn" title="Zoom In">
                <i class="fas fa-plus"></i>
            </button>
            <button class="map-btn" id="zoomOut" title="Zoom Out">
                <i class="fas fa-minus"></i>
            </button>
            <button class="map-btn" id="resetView" title="Reset View">
                <i class="fas fa-home"></i>
            </button>
        </div>

        <div class="minimap" id="minimap">
            <canvas id="minimapCanvas"></canvas>
            <div class="minimap-viewport" id="minimapViewport"></div>
        </div>

        <div class="star-popup" id="starPopup">
            <div class="popup-content" id="popupContent"></div>
        </div>
    </section>
@endsection