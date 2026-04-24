<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Cosmic Portfolio')</title>
    <!-- Tailwind CSS (gunakan CDN untuk demo, production pakai build) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        // Konfigurasi tambahan untuk animasi custom
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'glow-pulse': 'glowPulse 2s infinite',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        glowPulse: {
                            '0%, 100%': { boxShadow: '0 0 5px #4f46e5, 0 0 15px #7c3aed' },
                            '50%': { boxShadow: '0 0 20px #4f46e5, 0 0 40px #7c3aed' },
                        },
                    }
                }
            }
        }
    </script>
    <style>
        /* === Cosmic Background Global === */
        body {
            background: radial-gradient(ellipse at bottom, #0b0d2a 0%, #020111 70%);
            color: #e0e7ff;
        }

        /* Starry background (CSS only) */
        .stars-container::before {
            content: '';
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: transparent;
            box-shadow: 
                200px 100px 0 0 rgba(255,255,255,0.4),
                600px 250px 0 0 rgba(255,255,255,0.3),
                1000px 80px 0 0 rgba(255,255,255,0.2),
                1200px 600px 0 0 rgba(255,255,255,0.5),
                300px 500px 0 0 rgba(255,255,255,0.2),
                800px 700px 0 0 rgba(255,255,255,0.1),
                1400px 350px 0 0 rgba(255,255,255,0.4),
                400px 800px 0 0 rgba(255,255,255,0.3),
                100px 300px 0 0 rgba(255,255,255,0.2),
                900px 400px 0 0 rgba(255,255,255,0.1),
                1500px 100px 0 0 rgba(255,255,255,0.2),
                700px 20px 0 0 rgba(255,255,255,0.3);
            border-radius: 50%;
            animation: twinkle 4s infinite alternate;
            z-index: 0;
            pointer-events: none;
        }

        @keyframes twinkle {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
        }

        /* Glow effect helpers */
        .text-glow {
            text-shadow: 0 0 10px rgba(139, 92, 246, 0.6), 0 0 20px rgba(99, 102, 241, 0.4);
        }
        .btn-glow {
            transition: all 0.3s ease;
        }
        .btn-glow:hover {
            box-shadow: 0 0 15px #4f46e5, 0 0 30px #7c3aed;
            transform: scale(1.05);
        }
        .card-glow {
            transition: all 0.3s ease;
        }
        .card-glow:hover {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
            transform: translateY(-5px);
        }
    </style>
</head>
<body class="antialiased">
    <div class="stars-container">
        <!-- Navbar -->
        <x-navbar />

        <!-- Main Content -->
        <main class="relative z-10">
            @yield('content')
        </main>

        <!-- Footer -->
        <x-footer />
    </div>
</body>
</html>