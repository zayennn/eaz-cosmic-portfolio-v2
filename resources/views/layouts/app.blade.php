<!DOCTYPE html>
<html lang="id">
<head>
    {{-- ========== META DASAR ========== --}}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#0f0f1a" media="(prefers-color-scheme: dark)">
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
    <meta name="author" content="Elang Atha Zahran">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="referrer" content="strict-origin-when-cross-origin">

    {{-- ========== TITLE & DESCRIPTION DINAMIS ========== --}}
    <title>@yield('meta_title', 'Elang Atha Zahran | ' . (trim($__env->yieldContent('title')) ?: 'Cosmic Portfolio'))</title>
    <meta name="description" content="@yield('meta_description', 'Explore the cosmic portfolio of Elang Atha Zahran — a junior fullstack developer crafting immersive web experiences with Laravel, GSAP, and creative code.')">
    <meta name="keywords" content="@yield('meta_keywords', 'Elang Atha Zahran, portfolio, web developer, fullstack, Laravel, GSAP, cosmic, interactive portfolio, Indonesia')">

    {{-- ========== CANONICAL URL ========== --}}
    <link rel="canonical" href="@yield('canonical_url', url()->current())">

    {{-- ========== OPEN GRAPH (Facebook, WhatsApp, LinkedIn) ========== --}}
    <meta property="og:title" content="@yield('og_title', 'Elang Atha Zahran — Cosmic Portfolio')">
    <meta property="og:description" content="@yield('og_description', 'Step into a cosmic web experience. Interactive portfolio with constellation skills, orbiting projects, star map interests, and holographic contact terminal.')">
    <meta property="og:image" content="@yield('og_image', asset('images/og-preview.jpg'))">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Elang Atha Zahran Cosmic Portfolio Preview">
    <meta property="og:url" content="@yield('og_url', url()->current())">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="EAZ Cosmic Portfolio v2">
    <meta property="og:locale" content="id_ID">
    <meta property="og:locale:alternate" content="en_US">

    {{-- ========== TWITTER CARDS ========== --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@zaayeenn_">
    <meta name="twitter:creator" content="@zaayeenn_">
    <meta name="twitter:title" content="@yield('twitter_title', 'EAZ Cosmic Portfolio v2')">
    <meta name="twitter:description" content="@yield('twitter_description', 'Immersive cosmic portfolio with GSAP animations, constellation skills, and interactive projects. Built with Laravel 10.')">
    <meta name="twitter:image" content="@yield('twitter_image', asset('images/og-preview.jpg'))">
    <meta name="twitter:image:alt" content="Cosmic Portfolio Preview — Elang Atha Zahran">

    {{-- ========== FAVICON & APPLE TOUCH ========== --}}
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">

    {{-- ========== PRELOAD & PERFORMANCE ========== --}}
    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="preload" href="{{ asset('css/app.css') }}" as="style">
    <link rel="preload" href="{{ asset('js/script.js') }}" as="script">

    {{-- ========== STRUCTURED DATA (JSON-LD) ========== --}}
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Elang Atha Zahran",
        "alternateName": "zayennn",
        "jobTitle": "Junior Fullstack Developer",
        "url": "{{ url('/') }}",
        "sameAs": [
            "https://github.com/zayennn",
            "https://www.linkedin.com/in/elang-atha-zahran-100459220/",
            "https://www.instagram.com/zaayeenn_/",
            "https://www.tiktok.com/@.publicstatic"
        ],
        "email": "athazahranel@gmail.com",
        "telephone": "+6287788612930",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "Indonesia",
            "addressRegion": "West Java"
        },
        "knowsAbout": ["Laravel", "PHP", "JavaScript", "GSAP", "React.js", "MySQL", "CSS3", "HTML5"],
        "description": "Junior Fullstack Web Developer building immersive cosmic web experiences with modern technologies."
    }
    </script>

    @stack('json_ld')

    {{-- ========== CSS & FONT AWESOME (YANG SUDAH ADA) ========== --}}
    <link rel="stylesheet" href="{{ asset('css/stars.css') }}">
    <link rel="stylesheet" href="{{ asset('css/loading.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/footer.css') }}">

    @if (request()->routeIs('home'))
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    @elseif(request()->routeIs('what-i-use'))
        <link rel="stylesheet" href="{{ asset('css/what-i-use.css') }}">
    @elseif(request()->routeIs('what-ive-built'))
        <link rel="stylesheet" href="{{ asset('css/what-i\'ve-built.css') }}">
    @elseif(request()->routeIs('what-im-into'))
        <link rel="stylesheet" href="{{ asset('css/what-im-into.css') }}">
    @elseif(request()->routeIs('behind-the-code'))
        <link rel="stylesheet" href="{{ asset('css/behind-the-code.css') }}">
    @elseif(request()->routeIs('get-in-touch'))
        <link rel="stylesheet" href="{{ asset('css/get-in-touch.css') }}">
    @endif

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&display=swap" rel="stylesheet">

    @stack('head_scripts')
</head>

<body data-stars="{{ $starsCount ?? 200 }}">
    @include('components.loading')
    <div id="star-field"></div>
    @include('partials.navbar')

    <main>
        @yield('content')
    </main>

    @include('partials.footer')

    {{-- GSAP --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js"></script>

    @if (request()->routeIs('home'))
        <script src="{{ asset('js/about-image.js') }}"></script>
    @elseif (request()->routeIs('what-i-use'))
        <script src="{{ asset('js/what-i-use.js') }}"></script>
    @elseif (request()->routeIs('what-ive-built'))
        <script src="{{ asset('js/what-ive-built.js') }}"></script>
    @elseif (request()->routeIs('what-im-into'))
        <script src="{{ asset('js/what-im-into.js') }}"></script>
    @elseif (request()->routeIs('behind-the-code'))
        <script src="{{ asset('js/behind-the-code.js') }}"></script>
    @elseif(request()->routeIs('get-in-touch'))
        <script src="{{ asset('js/get-in-touch.js') }}"></script>
    @endif

    <script src="{{ asset('js/script.js') }}"></script>
    <script src="{{ asset('js/navbar.js') }}"></script>
    <script src="{{ asset('js/loading.js') }}"></script>

    @stack('body_scripts')
</body>
</html>