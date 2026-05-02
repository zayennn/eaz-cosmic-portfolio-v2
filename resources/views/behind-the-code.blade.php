@extends('layouts.app')

@section('title', 'Behind the Code')

@section('content')
<section class="behind-page">
    <!-- Header -->
    <div class="behind-header">
        <div class="behind-badge">
            <i class="fas fa-code-branch"></i> GitHub Analytics
        </div>
        <h1 class="behind-title">
            Behind the <span class="highlight">Code</span>
        </h1>
        <p class="behind-subtitle">
            A glimpse into my GitHub activity, contributions, and coding journey through the cosmos
        </p>
    </div>

    <!-- Profile Card -->
    <div class="profile-section">
        <div class="profile-card">
            <div class="profile-avatar-wrap">
                <div class="avatar-ring"></div>
                <img src="https://avatars.githubusercontent.com/u/122636951?v=4" alt="Profile" class="profile-avatar">
            </div>
            <div class="profile-info">
                <div class="profile-username">@zayennn</div>
                <h3>Elang Atha Zahran</h3>
                <p class="profile-bio">Junior Fullstack Web Developer | Building exceptional digital experiences with modern web technologies</p>
                <div class="profile-meta">
                    <span class="meta-item"><i class="fas fa-map-marker-alt"></i> Indonesia</span>
                    <span class="meta-item"><i class="fas fa-calendar-alt"></i> Member since 2023</span>
                </div>
                <a href="https://github.com/zayennn" target="_blank" class="profile-link">
                    <i class="fab fa-github"></i> @zayennn
                </a>
            </div>
        </div>
    </div>

    <!-- Stats Orbit -->
    <div class="stats-orbit">
        <h2 class="stats-title">Quick Stats</h2>
        <div class="stats-grid">
            <div class="stat-node">
                <div class="stat-value" id="statRepos">137</div>
                <div class="stat-label">Repositories</div>
            </div>
            <div class="stat-node">
                <div class="stat-value" id="statFollowers">--</div>
                <div class="stat-label">Followers</div>
            </div>
            <div class="stat-node">
                <div class="stat-value" id="statFollowing">--</div>
                <div class="stat-label">Following</div>
            </div>
            <div class="stat-node">
                <div class="stat-value" id="statStars">--</div>
                <div class="stat-label">Stars</div>
            </div>
            <div class="stat-node">
                <div class="stat-value" id="statForks">--</div>
                <div class="stat-label">Forks</div>
            </div>
            <div class="stat-node">
                <div class="stat-value" id="statGists">--</div>
                <div class="stat-label">Gists</div>
            </div>
        </div>
    </div>

    <!-- Contribution River -->
    <div class="contribution-section">
        <div class="contribution-card">
            <h3><i class="fas fa-chart-line"></i> Year in Code</h3>
            <p class="sub">My coding activity visualized</p>
            <div class="contribution-img-wrap">
                <img src="https://ghchart.rshah.org/zayennn" alt="Contribution Chart" id="contribImg">
            </div>
            <div class="legend-row">
                <span>Less</span>
                <div class="legend-dots">
                    <span class="legend-dot" style="background:#ebedf0"></span>
                    <span class="legend-dot" style="background:#9be9a8"></span>
                    <span class="legend-dot" style="background:#40c463"></span>
                    <span class="legend-dot" style="background:#30a14e"></span>
                    <span class="legend-dot" style="background:#216e39"></span>
                </div>
                <span>More</span>
            </div>
        </div>
    </div>

    <!-- Snake Animation -->
    <div class="snake-section">
        <div class="snake-card">
            <h3>
                <i class="fas fa-snake"></i> Contribution Snake
                <i class="fas fa-snake"></i>
            </h3>
            <img src="https://raw.githubusercontent.com/zayennn/zayennn/output/snake.svg" alt="Snake Animation">
        </div>
    </div>

    <!-- Languages Constellation -->
    <div class="languages-section">
        <div class="lang-card">
            <h3 style="font-family:'Orbitron',sans-serif;font-size:1.2rem;color:#e2e8f0;margin-bottom:1.5rem;display:flex;align-items:center;gap:0.5rem;">
                <i class="fas fa-code"></i> Top Languages
            </h3>
            <div class="lang-grid" id="langGrid">
                <!-- Filled by JS -->
            </div>
        </div>
    </div>

    <!-- Featured Repos -->
    <div class="repos-section">
        <div class="section-head">
            <h3>Featured Repos</h3>
            <a href="https://github.com/zayennn?tab=repositories" target="_blank" class="view-all">
                View all <i class="fas fa-arrow-right"></i>
            </a>
        </div>
        <div class="repos-grid" id="reposGrid">
            <!-- Filled by JS -->
        </div>
    </div>

    <!-- Development Insights -->
    <div class="activity-section">
        <div class="activity-grid">
            <div class="activity-card">
                <div class="activity-icon" style="background:rgba(99,102,241,0.15);color:#a5b4fc;">
                    <i class="fas fa-fire"></i>
                </div>
                <h4 id="insightMostActive">Most Active</h4>
                <p id="insightMostActiveDesc">Loading...</p>
            </div>
            <div class="activity-card">
                <div class="activity-icon" style="background:rgba(251,191,36,0.15);color:#fbbf24;">
                    <i class="fas fa-trophy"></i>
                </div>
                <h4>Most Popular</h4>
                <p id="insightMostPopular">Loading...</p>
            </div>
            <div class="activity-card">
                <div class="activity-icon" style="background:rgba(34,197,94,0.15);color:#4ade80;">
                    <i class="fas fa-code"></i>
                </div>
                <h4>Primary Language</h4>
                <p id="insightPrimaryLang">Loading...</p>
            </div>
        </div>
    </div>

    <!-- Weekly Insights -->
    <div class="weekly-section">
        <div class="weekly-card">
            <h3><i class="fas fa-clock"></i> This Week's Activity</h3>
            <div class="weekly-stats" id="weeklyStats">
                <div class="weekly-item">
                    <div class="weekly-label">Code Time</div>
                    <div class="weekly-value" id="weeklyCodeTime">--</div>
                    <div class="weekly-sub">hours</div>
                </div>
                <div class="weekly-item">
                    <div class="weekly-label">Top Language</div>
                    <div class="weekly-value" id="weeklyTopLang">--</div>
                    <div class="weekly-sub">most used</div>
                </div>
                <div class="weekly-item">
                    <div class="weekly-label">Top Editor</div>
                    <div class="weekly-value" id="weeklyEditor">--</div>
                    <div class="weekly-sub">favorite IDE</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Most Productive Time -->
    <div class="productive-section">
        <div class="productive-grid">
            <!-- Day of Week -->
            <div class="productive-card">
                <h4><i class="fas fa-calendar-week"></i> Most Productive Day</h4>
                <div class="day-bars" id="dayBars">
                    <!-- Filled by JS -->
                </div>
            </div>
            <!-- Time of Day -->
            <div class="productive-card">
                <h4><i class="fas fa-sun"></i> Coding Schedule</h4>
                <div class="time-bars" id="timeBars">
                    <!-- Filled by JS -->
                </div>
            </div>
        </div>
    </div>

    <!-- CTA -->
    <div class="cta-section">
        <div class="cta-card">
            <h3>Want to see more?</h3>
            <p>Explore all my projects, contributions, and coding journey directly on GitHub. Feel free to star interesting repos!</p>
            <div class="cta-btns">
                <a href="https://github.com/zayennn" target="_blank" class="cta-btn primary">
                    <i class="fab fa-github"></i> Visit GitHub Profile
                </a>
                <a href="https://github.com/zayennn?tab=repositories" target="_blank" class="cta-btn secondary">
                    <i class="fas fa-code-branch"></i> Browse All Repos
                </a>
            </div>
        </div>
    </div>
</section>
@endsection