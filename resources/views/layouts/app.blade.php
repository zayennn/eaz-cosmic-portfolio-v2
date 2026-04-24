<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elang Atha Zahran | Portfolio</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>

<body>
    <canvas id="starCanvas"></canvas>

    

    <!-- Konten Utama -->
    <main>
        @yield('content')
    </main>

    

    <script src="{{ asset('js/script.js') }}"></script>
</body>

</html>