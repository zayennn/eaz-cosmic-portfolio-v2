@extends('layouts.app')

@section('title', 'What I\'m Into')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/what-im-into.css') }}">
@endpush

@section('content')
<section class="into-page" id="intoPage">
    <!-- Star Map Canvas -->
    <canvas id="starMapCanvas"></canvas>

    <!-- Header Overlay -->
    <div class="into-header-overlay">
        <div class="into-badge">
            <i class="fas fa-star"></i> Explore My Universe
        </div>
        <h1 class="into-title">
            What I'm <span class="highlight">Into</span>
        </h1>
        <p class="into-hint">
            <i class="fas fa-mouse"></i> Drag to explore &bull; Scroll to zoom &bull; Click stars to discover
        </p>
    </div>

    <!-- Category Legend -->
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

    <!-- Zoom Controls -->
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

    <!-- Minimap -->
    <div class="minimap" id="minimap">
        <canvas id="minimapCanvas"></canvas>
        <div class="minimap-viewport" id="minimapViewport"></div>
    </div>

    <!-- Star Detail Popup -->
    <div class="star-popup" id="starPopup">
        <div class="popup-content" id="popupContent"></div>
    </div>
</section>
@endsection

@push('scripts')
<script src="{{ asset('js/what-im-into.js') }}"></script>
@endpush