<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Elang Atha Zahran | @yield('title')
    </title>

    {{-- components --}}
    <link rel="stylesheet" href="{{ asset('css/stars.css') }}">
    <link rel="stylesheet" href="{{ asset('css/loading.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/footer.css') }}">

    {{-- pages --}}
    @if (request()->routeIs('home'))
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    @elseif(request()->routeIs('what-i-use'))
        <link rel="stylesheet" href="{{ asset('css/what-i-use.css') }}">
    @elseif(request()->routeIs('what-ive-built'))
        <link rel="stylesheet" href="{{ asset('css/what-i\'ve-built.css') }}">
    @elseif(request()->routeIs('what-im-into'))
        <link rel="stylesheet" href="{{ asset('css/what-im-into.css') }}">
    @endif

    {{-- font awesome --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    {{-- google font --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Audiowide&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&display=swap"
        rel="stylesheet">
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
    @endif

    <script src="{{ asset('js/script.js') }}"></script>
    <script src="{{ asset('js/navbar.js') }}"></script>
    <script src="{{ asset('js/loading.js') }}"></script>
</body>

</html>
