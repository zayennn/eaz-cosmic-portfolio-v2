@extends('layouts.app')

@section('title', 'What I\'m Into')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/what-im-into.css') }}">
@endpush

@section('content')
<section class="into-page">
    <!-- Nebula Background -->
    <div class="into-nebula">
        <div class="nebula-cloud nc1"></div>
        <div class="nebula-cloud nc2"></div>
        <div class="nebula-cloud nc3"></div>
    </div>

    <!-- Header -->
    <div class="into-header">
        <div class="into-badge">
            <i class="fas fa-star"></i> Beyond the Code
        </div>
        <h1 class="into-title">
            What I'm <span class="highlight">Into</span>
        </h1>
        <p class="into-subtitle">
            Beyond the code, here's what fuels my creativity and keeps me entertained.
            From late-night gaming sessions to mood-setting playlists.
        </p>
        <div class="section-divider"></div>
    </div>

    <!-- Music Player - Stellar Core -->
    <div class="music-core">
        <div class="core-card">
            <div class="music-content">
                <div class="music-visual">
                    <div class="vinyl-glow"></div>
                    <div class="vinyl-disc"></div>
                </div>
                <div class="music-info">
                    <span class="now-label">NOW PLAYING</span>
                    <h3 class="song-title">Timeless</h3>
                    <p class="song-artist">The Weeknd</p>
                    <p class="song-quote">
                        "I'll be timeless, I swear I'll be timeless" - Perfect blend of melancholy and hope
                    </p>
                    <div class="music-progress">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                    <div class="time-info">
                        <span>2:45</span>
                        <span>3:35</span>
                    </div>
                    <div class="player-controls">
                        <button class="player-btn"><i class="fas fa-step-backward"></i></button>
                        <button class="player-btn play"><i class="fas fa-play"></i></button>
                        <button class="player-btn"><i class="fas fa-step-forward"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Currently Grinding - Games -->
    <div class="into-section">
        <div class="section-head">
            <div class="section-icon">
                <i class="fas fa-gamepad"></i>
            </div>
            <div>
                <h2>Currently Grinding</h2>
                <p>Games that are currently taking up my free time. Always down for co-op!</p>
            </div>
        </div>
        
        <div class="games-grid">
            <!-- Assassin's Creed Unity -->
            <div class="game-planet">
                <div class="game-orbit"><div class="game-orbit-dot"></div></div>
                <div class="game-planet-core">
                    <div class="game-image">
                        <img src="{{ asset('images/games/ACUnity.png') }}" alt="AC Unity">
                        <div class="game-overlay">
                            <span class="game-status" style="background: #8B0000;">Story</span>
                        </div>
                    </div>
                    <div class="game-info">
                        <h3 class="game-name">Assassin's Creed Unity</h3>
                        <p class="game-platform"><i class="fas fa-desktop"></i> PC</p>
                        <p class="game-desc">Parisian parkour and revolutionary intrigue</p>
                        <div class="game-stats">
                            <span class="game-stat"><i class="fas fa-clock"></i> 25h</span>
                            <span class="game-stat"><i class="fas fa-chart-line"></i> 65%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Valorant -->
            <div class="game-planet">
                <div class="game-orbit"><div class="game-orbit-dot"></div></div>
                <div class="game-planet-core">
                    <div class="game-image">
                        <img src="{{ asset('images/games/valorant.png') }}" alt="Valorant">
                        <div class="game-overlay">
                            <span class="game-status" style="background: #FD4556;">Competitive</span>
                        </div>
                    </div>
                    <div class="game-info">
                        <h3 class="game-name">Valorant</h3>
                        <p class="game-platform"><i class="fas fa-desktop"></i> PC</p>
                        <p class="game-desc">Tactical FPS with precise gunplay and abilities</p>
                        <div class="game-stats">
                            <span class="game-stat"><i class="fas fa-clock"></i> 300+h</span>
                            <span class="game-stat"><i class="fas fa-trophy"></i> Platinum</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- AC Valhalla -->
            <div class="game-planet">
                <div class="game-orbit"><div class="game-orbit-dot"></div></div>
                <div class="game-planet-core">
                    <div class="game-image">
                        <img src="{{ asset('images/games/ACValhalla.png') }}" alt="AC Valhalla">
                        <div class="game-overlay">
                            <span class="game-status" style="background: #003366;">Open World</span>
                        </div>
                    </div>
                    <div class="game-info">
                        <h3 class="game-name">AC Valhalla</h3>
                        <p class="game-platform"><i class="fas fa-desktop"></i> PC</p>
                        <p class="game-desc">Viking adventure in Dark Ages England</p>
                        <div class="game-stats">
                            <span class="game-stat"><i class="fas fa-clock"></i> 80h</span>
                            <span class="game-stat"><i class="fas fa-chart-line"></i> 45%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Skyrim -->
            <div class="game-planet">
                <div class="game-orbit"><div class="game-orbit-dot"></div></div>
                <div class="game-planet-core">
                    <div class="game-image">
                        <img src="{{ asset('images/games/The Elder Scrolls V Skyrim.png') }}" alt="Skyrim">
                        <div class="game-overlay">
                            <span class="game-status" style="background: #2F4F4F;">Modding</span>
                        </div>
                    </div>
                    <div class="game-info">
                        <h3 class="game-name">Skyrim Anniversary</h3>
                        <p class="game-platform"><i class="fas fa-desktop"></i> PC</p>
                        <p class="game-desc">Endless adventures in Tamriel with mods</p>
                        <div class="game-stats">
                            <span class="game-stat"><i class="fas fa-clock"></i> 500+h</span>
                            <span class="game-stat"><i class="fas fa-puzzle-piece"></i> 50+ mods</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- All-Time Classics -->
    <div class="into-section">
        <div class="section-head">
            <div class="section-icon">
                <i class="fas fa-heart"></i>
            </div>
            <div>
                <h2>All-Time Classics</h2>
                <p>Games that have a special place in my heart. The ones I'd replay any day.</p>
            </div>
        </div>

        <div class="favorites-grid">
            <!-- Ezio Trilogy -->
            <div class="favorite-card">
                <div class="favorite-image">
                    <img src="{{ asset('images/games/ezio-trilogy.png') }}" alt="Ezio Trilogy">
                    <div class="favorite-badges">
                        <span class="fav-genre" style="background: #B8860B;">Action / Stealth</span>
                        <span class="fav-hours"><i class="fas fa-clock"></i> 150+h</span>
                    </div>
                </div>
                <div class="favorite-content">
                    <h3 class="favorite-title">Assassin's Creed Ezio Trilogy</h3>
                    <p class="favorite-desc">Nothing is true, everything is permitted. We work in the dark, to serve the light.</p>
                    <div class="favorite-details">
                        <span class="fav-detail"><i class="fas fa-star"></i> Favorite: AC Revelations</span>
                    </div>
                    <div class="favorite-footer">
                        <div class="stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="replay-badge"><i class="fas fa-redo"></i> Would replay forever</span>
                    </div>
                </div>
            </div>

            <!-- Valorant -->
            <div class="favorite-card">
                <div class="favorite-image">
                    <img src="{{ asset('images/games/valorant.png') }}" alt="Valorant">
                    <div class="favorite-badges">
                        <span class="fav-genre" style="background: #FD4556;">Tactical FPS</span>
                        <span class="fav-hours"><i class="fas fa-clock"></i> 400+h</span>
                    </div>
                </div>
                <div class="favorite-content">
                    <h3 class="favorite-title">Valorant</h3>
                    <p class="favorite-desc">My go-to competitive shooter with friends</p>
                    <div class="favorite-details">
                        <span class="fav-detail"><i class="fas fa-user"></i> Main: Raze / Jett</span>
                    </div>
                    <div class="favorite-footer">
                        <div class="stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="replay-badge"><i class="fas fa-redo"></i> Would replay forever</span>
                    </div>
                </div>
            </div>

            <!-- Skyrim -->
            <div class="favorite-card">
                <div class="favorite-image">
                    <img src="{{ asset('images/games/The Elder Scrolls V Skyrim.png') }}" alt="Skyrim">
                    <div class="favorite-badges">
                        <span class="fav-genre" style="background: #2F4F4F;">RPG / Open World</span>
                        <span class="fav-hours"><i class="fas fa-clock"></i> 600+h</span>
                    </div>
                </div>
                <div class="favorite-content">
                    <h3 class="favorite-title">The Elder Scrolls V: Skyrim</h3>
                    <p class="favorite-desc">A game I can always return to, no matter how many times</p>
                    <div class="favorite-details">
                        <span class="fav-detail"><i class="fas fa-fire"></i> Battlemage | Stealth Barbarian</span>
                    </div>
                    <div class="favorite-footer">
                        <div class="stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="replay-badge"><i class="fas fa-redo"></i> Would replay forever</span>
                    </div>
                </div>
            </div>

            <!-- Ghost of Tsushima -->
            <div class="favorite-card">
                <div class="favorite-image">
                    <img src="{{ asset('images/games/Ghost Of Tsushima.png') }}" alt="Ghost of Tsushima">
                    <div class="favorite-badges">
                        <span class="fav-genre" style="background: #DC143C;">Action / Adventure</span>
                        <span class="fav-hours"><i class="fas fa-clock"></i> 60h</span>
                    </div>
                </div>
                <div class="favorite-content">
                    <h3 class="favorite-title">Ghost of Tsushima</h3>
                    <p class="favorite-desc">Visually stunning samurai masterpiece with emotional story</p>
                    <div class="favorite-details">
                        <span class="fav-detail"><i class="fas fa-eye"></i> Best: Combat & Visuals</span>
                    </div>
                    <div class="favorite-footer">
                        <div class="stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <span class="replay-badge"><i class="fas fa-redo"></i> Would replay forever</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Mood Playlists -->
    <div class="into-section">
        <div class="section-head">
            <div class="section-icon">
                <i class="fas fa-music"></i>
            </div>
            <div>
                <h2>Mood Playlists</h2>
                <p>Curated soundtracks for different emotions and moments. Mostly sadboi hours.</p>
            </div>
        </div>

        <div class="playlists-grid">
            <!-- baskara. -->
            <div class="playlist-tape">
                <div class="tape-body">
                    <div class="tape-image">
                        <img src="{{ asset('images/playlist/baskara.png') }}" alt="baskara.">
                        <div class="tape-mood">Reflective</div>
                        <div class="tape-play"><i class="fas fa-play"></i></div>
                    </div>
                    <div class="tape-content">
                        <h3 class="tape-title">baskara.</h3>
                        <p class="tape-desc">Melancholic tunes for introspective moments</p>
                        <a href="https://open.spotify.com/playlist/4v9HS6PjoLBgDrU5L6GexX" target="_blank" class="tape-link">
                            <i class="fab fa-spotify"></i> Open in Spotify
                        </a>
                    </div>
                </div>
            </div>

            <!-- hurts to remember -->
            <div class="playlist-tape">
                <div class="tape-body">
                    <div class="tape-image">
                        <img src="{{ asset('images/playlist/hurts to remember.png') }}" alt="hurts to remember">
                        <div class="tape-mood">Nostalgic</div>
                        <div class="tape-play"><i class="fas fa-play"></i></div>
                    </div>
                    <div class="tape-content">
                        <h3 class="tape-title">hurts to remember</h3>
                        <p class="tape-desc">Songs that hit different when you're reminiscing</p>
                        <a href="https://open.spotify.com/playlist/5ioXfjHb5peyoN3qJtAvZO" target="_blank" class="tape-link">
                            <i class="fab fa-spotify"></i> Open in Spotify
                        </a>
                    </div>
                </div>
            </div>

            <!-- wish we never met -->
            <div class="playlist-tape">
                <div class="tape-body">
                    <div class="tape-image">
                        <img src="{{ asset('images/playlist/wish we never met.png') }}" alt="wish we never met">
                        <div class="tape-mood">Regretful</div>
                        <div class="tape-play"><i class="fas fa-play"></i></div>
                    </div>
                    <div class="tape-content">
                        <h3 class="tape-title">wish we never met</h3>
                        <p class="tape-desc">Melodies for the what-ifs and could-have-beens</p>
                        <a href="https://open.spotify.com/playlist/0K5jIqQY4tp0S8zfX9QIGB" target="_blank" class="tape-link">
                            <i class="fab fa-spotify"></i> Open in Spotify
                        </a>
                    </div>
                </div>
            </div>

            <!-- trying, tired, crying, dying -->
            <div class="playlist-tape">
                <div class="tape-body">
                    <div class="tape-image">
                        <img src="{{ asset('images/playlist/trying, tired, crying, dying.png') }}" alt="ttcd">
                        <div class="tape-mood">Exhausted</div>
                        <div class="tape-play"><i class="fas fa-play"></i></div>
                    </div>
                    <div class="tape-content">
                        <h3 class="tape-title">trying, tired, crying, dying</h3>
                        <p class="tape-desc">For those emotionally exhausting days</p>
                        <a href="https://open.spotify.com/playlist/41cAYIu6YBwvXq9Uq2YQlD" target="_blank" class="tape-link">
                            <i class="fab fa-spotify"></i> Open in Spotify
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection