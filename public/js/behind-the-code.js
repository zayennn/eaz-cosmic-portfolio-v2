document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // ============================================
    // GITHUB API DATA
    // ============================================
    const GITHUB_USERNAME = 'zayennn';

    // Featured repos (fallback)
    const CUSTOM_FEATURED_REPOS = [
        'portfolio', 'react-web-python-learning', 'face-scanning',
        'camera-sensor-scrolling', 'convert-speedtest', 'sales-management-system'
    ];

    // Language colors
    const langColors = {
        JavaScript: '#f1e05a', TypeScript: '#2b7489', Python: '#3572A5',
        Java: '#b07219', PHP: '#4F5D95', CSS: '#563d7c', HTML: '#e34c26',
        Vue: '#42b883', React: '#61dafb', Dart: '#00B4AB', Go: '#00ADD8',
        Rust: '#dea584', Ruby: '#701516', 'C++': '#f34b7d', 'C#': '#178600',
        Blade: '#4F5D95', SCSS: '#c6538c', Shell: '#89e051', Dockerfile: '#384d54',
        Makefile: '#427819', Markdown: '#083fa1', JSON: '#292929',
        YAML: '#cb171e', SVG: '#ff9900', Lua: '#000080', Kotlin: '#F18E33',
        Swift: '#ffac45', Scala: '#c22d40', Elixir: '#6e4a7e',
        Clojure: '#db5855', Haskell: '#5e5086', Erlang: '#B83998',
        'F#': '#b845fc', Elm: '#60B5CC', PureScript: '#1D222D',
        Crystal: '#000100', Nim: '#37775b', OCaml: '#3be133',
        Reason: '#ff5847', Zig: '#ec915c', R: '#198CE7', Matlab: '#e16737',
        Julia: '#a270ba', Perl: '#0298c3', CoffeeScript: '#244776',
        Groovy: '#e69f56', Fortran: '#4d41b1', Ada: '#02f88c',
        Assembly: '#6E4C13', PowerShell: '#012456', Batchfile: '#C1F12E',
        TeX: '#3D6117', PLSQL: '#dad8d8', 'Visual Basic': '#945db7',
        Prolog: '#74283c', Racket: '#22228f', Scheme: '#1e4aec',
        CommonLisp: '#3fb68b', Idris: '#b30000', wisp: '#7582D1',
        X10: '#4B6BEF', Xtend: '#24255d', ZIL: '#dc75e5'
    };

    function getLangColor(lang) {
        return langColors[lang] || '#6c757d';
    }

    // ============================================
    // FETCH GITHUB DATA
    // ============================================
    async function fetchGitHubData() {
        try {
            // Fetch user data
            const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
            const userData = await userRes.json();

            // Fetch repos
            const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
            const reposData = await reposRes.json();

            // Fetch languages
            const langMap = {};
            reposData.forEach(repo => {
                if (repo.language) {
                    langMap[repo.language] = (langMap[repo.language] || 0) + 1;
                }
            });

            const languages = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
            
            // Fetch pinned repos (via GitHub GraphQL alternative - use custom list as fallback)
            const popularRepos = reposData
                .filter(r => CUSTOM_FEATURED_REPOS.includes(r.name))
                .sort((a, b) => b.stargazers_count - a.stargazers_count);

            // Update UI
            updateProfileSection(userData);
            updateStatsSection(userData, reposData);
            updateLanguagesSection(languages, reposData);
            updateReposSection(popularRepos.length > 0 ? popularRepos : 
                CUSTOM_FEATURED_REPOS.map(name => ({
                    name, html_url: `https://github.com/${GITHUB_USERNAME}/${name}`,
                    description: 'Pinned repository', language: null,
                    stargazers_count: 0, forks_count: 0, watchers_count: 0,
                    updated_at: new Date().toISOString(), private: false
                })), reposData);

        } catch (err) {
            console.error('Failed to fetch GitHub data:', err);
            // Fallback with static data
            loadStaticData();
        }
    }

    function loadStaticData() {
        // Static fallback based on README
        document.getElementById('statRepos').textContent = '137';
        document.getElementById('statFollowers').textContent = '--';
        document.getElementById('statFollowing').textContent = '--';
        document.getElementById('statStars').textContent = '--';
        document.getElementById('statForks').textContent = '--';
        document.getElementById('statGists').textContent = '--';

        // Populate languages
        const staticLangs = [
            ['JavaScript', 34], ['CSS', 31], ['Python', 12], ['Java', 3],
            ['PHP', 3], ['HTML', 2], ['Assembly', 1], ['Blade', 5]
        ];
        updateLanguagesSection(staticLangs, []);

        // Populate repos
        const staticRepos = CUSTOM_FEATURED_REPOS.map(name => ({
            name, html_url: `https://github.com/zayennn/${name}`,
            description: 'Pinned repository', language: null,
            stargazers_count: 0, forks_count: 0, watchers_count: 0,
            updated_at: new Date().toISOString(), private: false
        }));
        updateReposSection(staticRepos, []);

        // Weekly static
        document.getElementById('weeklyCodeTime').textContent = '13.5';
        document.getElementById('weeklyTopLang').textContent = 'CSS';
        document.getElementById('weeklyEditor').textContent = 'Antigravity';

        // Insights
        document.getElementById('insightMostActiveDesc').textContent =
            'portfolio is my most recently updated repository';
        document.getElementById('insightMostPopular').textContent =
            'portfolio has the most stars';
        document.getElementById('insightPrimaryLang').textContent =
            'JavaScript is my most used language';
    }

    // ============================================
    // UPDATE SECTIONS
    // ============================================
    function updateProfileSection(userData) {
        // Profile data already static in HTML, update avatar if needed
        const avatar = document.querySelector('.profile-avatar');
        if (avatar && userData.avatar_url) {
            avatar.src = userData.avatar_url;
        }
    }

    function updateStatsSection(userData, reposData) {
        if (userData.public_repos) {
            document.getElementById('statRepos').textContent = userData.public_repos;
        }
        document.getElementById('statFollowers').textContent = userData.followers || '--';
        document.getElementById('statFollowing').textContent = userData.following || '--';
        
        const totalStars = reposData.reduce((sum, r) => sum + r.stargazers_count, 0);
        const totalForks = reposData.reduce((sum, r) => sum + r.forks_count, 0);
        document.getElementById('statStars').textContent = totalStars || '--';
        document.getElementById('statForks').textContent = totalForks || '--';
        document.getElementById('statGists').textContent = userData.public_gists || '--';

        // Animate stats
        document.querySelectorAll('.stat-node').forEach((node, i) => {
            gsap.from(node, {
                scrollTrigger: { trigger: node, start: 'top 85%' },
                opacity: 0, y: 30, scale: 0.8,
                duration: 0.6, delay: i * 0.1,
                ease: 'back.out(1.7)'
            });
        });
    }

    function updateLanguagesSection(languages, reposData) {
        const langGrid = document.getElementById('langGrid');
        const totalCount = languages.reduce((acc, [, c]) => acc + c, 0);

        langGrid.innerHTML = languages.map(([lang, count], i) => {
            const percent = Math.round((count / totalCount) * 100);
            const color = getLangColor(lang);
            return `
                <div class="lang-item">
                    <div class="lang-header">
                        <span class="lang-name">
                            <span class="lang-dot" style="background:${color};box-shadow:0 0 8px ${color};"></span>
                            ${lang}
                        </span>
                        <span class="lang-percent">${percent}%</span>
                    </div>
                    <div class="lang-bar">
                        <div class="lang-fill" style="width:0%;background:${color};color:${color};" data-width="${percent}%"></div>
                    </div>
                    <span class="lang-count">${count} ${count === 1 ? 'repo' : 'repos'}</span>
                </div>
            `;
        }).join('');

        // Animate language bars
        setTimeout(() => {
            document.querySelectorAll('.lang-fill').forEach(bar => {
                gsap.to(bar, {
                    width: bar.dataset.width,
                    duration: 1.5,
                    delay: Math.random() * 0.5,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: bar, start: 'top 90%' }
                });
            });
        }, 300);
    }

    function updateReposSection(popularRepos, allRepos) {
        const reposGrid = document.getElementById('reposGrid');
        
        reposGrid.innerHTML = popularRepos.slice(0, 6).map(repo => {
            const lang = repo.language || (allRepos.find(r => r.name === repo.name)?.language || null);
            return `
                <a href="${repo.html_url}" target="_blank" class="repo-card">
                    <div class="repo-top">
                        <i class="fas fa-bookmark repo-icon"></i>
                        <span class="repo-name">${repo.name}</span>
                        <span class="repo-visibility">${repo.private ? 'Private' : 'Public'}</span>
                    </div>
                    <p class="repo-desc">${repo.description || 'No description'}</p>
                    ${lang ? `
                    <div class="repo-lang">
                        <span class="lang-color" style="background:${getLangColor(lang)};box-shadow:0 0 5px ${getLangColor(lang)};"></span>
                        <span class="lang-name">${lang}</span>
                    </div>` : ''}
                    <div class="repo-stats">
                        <span class="repo-stat"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                        <span class="repo-stat"><i class="fas fa-code-fork"></i> ${repo.forks_count}</span>
                    </div>
                </a>
            `;
        }).join('');

        // Update insights
        if (allRepos.length > 0) {
            const sortedByUpdated = [...allRepos].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            const sortedByStars = [...allRepos].sort((a, b) => b.stargazers_count - a.stargazers_count);
            
            document.getElementById('insightMostActiveDesc').textContent =
                `${sortedByUpdated[0]?.name || 'N/A'} is my most recently updated repository`;
            document.getElementById('insightMostPopular').textContent =
                `${sortedByStars[0]?.name || 'N/A'} has the most stars (${sortedByStars[0]?.stargazers_count || 0})`;
        }

        // Animate repos
        document.querySelectorAll('.repo-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: 'top 85%' },
                opacity: 0, y: 40, scale: 0.9,
                duration: 0.6, delay: i * 0.1,
                ease: 'back.out(1.7)'
            });
        });
    }

    // ============================================
    // PRODUCTIVE TIME BARS
    // ============================================
    function createDayBars() {
        const dayBars = document.getElementById('dayBars');
        const data = [
            { day: 'Mon', percent: 15.33, color: '#6366f1' },
            { day: 'Tue', percent: 23.79, color: '#8b5cf6' },
            { day: 'Wed', percent: 7.10, color: '#6366f1' },
            { day: 'Thu', percent: 9.81, color: '#6366f1' },
            { day: 'Fri', percent: 14.61, color: '#6366f1' },
            { day: 'Sat', percent: 15.86, color: '#a5b4fc' },
            { day: 'Sun', percent: 13.50, color: '#6366f1' }
        ];

        dayBars.innerHTML = data.map(d => `
            <div class="day-bar-wrap">
                <span class="day-percent">${d.percent}%</span>
                <div class="day-bar" style="height:0;background:${d.color};box-shadow:0 0 10px ${d.color}40;" data-height="${d.percent * 3}px"></div>
                <span class="day-label">${d.day}</span>
            </div>
        `).join('');

        setTimeout(() => {
            document.querySelectorAll('.day-bar').forEach(bar => {
                gsap.to(bar, {
                    height: bar.dataset.height,
                    duration: 1.2, delay: Math.random() * 0.5,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: bar, start: 'top 90%' }
                });
            });
        }, 300);
    }

    function createTimeBars() {
        const timeBars = document.getElementById('timeBars');
        const data = [
            { label: '🌞 Morning', percent: 24.81, color: '#fbbf24' },
            { label: '☀️ Day', percent: 20.39, color: '#fb923c' },
            { label: '🌆 Evening', percent: 24.77, color: '#6366f1' },
            { label: '🌙 Night', percent: 30.02, color: '#8b5cf6' }
        ];

        timeBars.innerHTML = data.map(d => `
            <div class="time-bar-wrap">
                <span class="time-percent">${d.percent}%</span>
                <div class="time-bar">
                    <div class="time-fill" style="height:0;background:${d.color};box-shadow:0 0 10px ${d.color}60;" data-height="${d.percent * 2.5}px"></div>
                </div>
                <span class="time-label">${d.label}</span>
            </div>
        `).join('');

        setTimeout(() => {
            document.querySelectorAll('.time-fill').forEach(fill => {
                gsap.to(fill, {
                    height: fill.dataset.height,
                    duration: 1.5, delay: Math.random() * 0.5,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: fill, start: 'top 90%' }
                });
            });
        }, 300);
    }

    // ============================================
    // GSAP SCROLL ANIMATIONS
    // ============================================
    function initAnimations() {
        // Header
        gsap.from('.behind-badge', {
            scrollTrigger: { trigger: '.behind-header', start: 'top 85%' },
            opacity: 0, y: -30, duration: 0.8, ease: 'power3.out'
        });
        gsap.from('.behind-title', {
            scrollTrigger: { trigger: '.behind-header', start: 'top 85%' },
            opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: 'power3.out'
        });

        // Profile card
        gsap.from('.profile-card', {
            scrollTrigger: { trigger: '.profile-section', start: 'top 80%' },
            opacity: 0, y: 40, scale: 0.95, duration: 0.8, ease: 'power3.out'
        });

        // Sections
        document.querySelectorAll('.contribution-card, .snake-card, .lang-card, .weekly-card, .productive-card, .cta-card').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 85%' },
                opacity: 0, y: 40, duration: 0.8, ease: 'power3.out'
            });
        });

        // Activity cards
        document.querySelectorAll('.activity-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: 'top 85%' },
                opacity: 0, y: 30, x: (i % 2 === 0 ? -20 : 20),
                duration: 0.6, delay: i * 0.15, ease: 'power3.out'
            });
        });
    }

    // ============================================
    // INITIALIZE
    // ============================================
    fetchGitHubData();
    createDayBars();
    createTimeBars();
    initAnimations();

    console.log('🧠 Behind the Code - Neural Data Stream initialized!');
});